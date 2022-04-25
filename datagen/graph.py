import csv
from posixpath import split
import matplotlib.pyplot as plt
import numpy as np
import matplotlib.font_manager as fm
import glob
import os
import re

def myround(x, base):
    return base * round((x + base)/base)

def stepsize(x):
    if x < 501:
        return 50
    if x < 1001:
        return 100
    if x < 5001:
        return 500
    if x < 10001:
        return 1000

# name:     string, including dash.                         ex: BSA-EGCG
# conc:     float, concentration in mM.                     ex: 0.0125mM
# ex_em:    float, excitation/em bandwidth.                 ex: 2.5
# resp:     int, response time in msec.                     ex: 100msec
# sens:     int, sensitivity with low=1, med=2, high=3.     ex: 2
def getHash(name: str, conc: float, ex_em: float, resp: int, sens: int) -> int:
    sum = 0
    # name
    for c in name:
        sum += ord(c)
    # conc
    sum += int(conc * 110000)
    # ex_em
    sum += int(ex_em * 50)
    # resp
    sum += resp * 7

    return int(sum << sens)


fe = fm.FontEntry(
    fname='./fonts/Helvetica-Bold.ttf',
    name='helvetica-bold')
fm.fontManager.ttflist.insert(0, fe)
plt.rcParams['font.family'] = fe.name

filepaths = glob.glob('./csvs/*/*/*/*/*.csv')
""" temp_set = set() """
for path in filepaths:
    filename = os.path.basename(path)
    print("Working on " + filename + " at " + path)

    with open(path) as csv_file:
        # Get the data from the csv
        csv_reader = csv.reader(csv_file, delimiter=',')
        temp = list(csv_reader)
        mat = np.array(temp[19:220])
        if np.ma.size(mat, axis=1) > 2:
            mat = np.delete(mat, 2, axis=1)
        mat = mat.astype(np.float32)
        mat = np.transpose(mat)
        
        # plot the data
        x, y = mat
        plt.figure(figsize=(10.65,5.52))
        plt.plot(x, y, linewidth=4)

        # text color
        charcoal = '#595959'

        # set up x axis
        # xlabel = wavelength
        # setup x axis limit with [300, 500]
        plt.xlabel('Wavelength (nm)', fontsize=20, color=charcoal)
        plt.xticks(fontsize=14, color=charcoal)
        plt.xlim([300, 500])
        plt.xticks(np.arange(min(x), max(x)+1, 20))

        # set up y axis
        # ylabel = fluorescence intensity
        # y ticks 
        plt.ylabel('Fluorescence Intensity', fontsize=20, color=charcoal)
        plt.yticks(fontsize=14, color=charcoal)
        plt.ylim([min(y), myround(max(y),stepsize(max(y)))])
        plt.yticks(np.arange(min(y), myround(max(y),stepsize(max(y)))+min(y)+1, stepsize(max(y))))

        # stops graph labels from getting cut off
        plt.subplots_adjust(bottom=.15)

        # gather details of the current experiment from the csv, and the concentration from the filepath
        split_path = path.split('/')
        name = split_path[2]
        conc = float(re.search('([0][.].+?)mM', split_path[3]).group(1))
        ex_em = float(temp[253][1].split(' ')[0])
        resp = temp[255][1].split(' ')
        if resp[1] == 'sec':
            resp = int(float(resp[0]) * 1000)
        else:
            resp = int(resp[0])
        sens = temp[256][1]
        if sens == 'Low':
            sens = 1
        elif sens == 'Medium':
            sens = 2
        elif sens == 'High':
            sens = 3
        
        graph_filename = str(getHash(name, conc, ex_em, resp, sens))
        plt.savefig("./out/graphs/" + graph_filename + ".svg")
        plt.close()

        # The following is hard coded for BSA-EGCG as given by the clients. Please change if new chemicals are added.
        title = ['Data from the Virtual Biochemistry Laboratory Simulation']
        subtitle = ['Protein-Ligand Binding Experiment Data']
        protein = ['Protein', '50 µg/mL Bovine Serum Albumin (BSA)']
        ligand = ['Ligand', str(conc) + ' mM Epigallocatechin Gallate (EGCG)']
        data_type = ['Data Type', 'Fluorescence Emission Spectrum']
        fluorophore = ['Fluorophore', 'Tryptophan']
        buffer = ['Buffer', '50 mM Sodium Phosphate buffer, pH 7.0']
        measurement_parameters = ['Measurement Parameters']
        excitation_bandwidth = ['Excitation bandwidth', str(ex_em) + ' nm']
        emission_bandwidth = ['Emission bandwidth', str(ex_em) + ' nm']
        response = ['Response', temp[255][1]]
        sensitivity = ['Sensitivity', temp[256][1]]
        measurement_range = ['Measurement range', '300 - 500 nm']
        data_interval = ['Data interval (step size)', '1 nm']
        excitation_wavelength = ['Excitation wavelength', '280.0 nm']
        scan_speed = ['Scan speed', '2000 nm/min']
        light_source = ['Light source', 'Xe lamp']

        new_csv = open('./out/data/' + graph_filename + '.csv', 'w', encoding='UTF8')
        new_csv_writer = csv.writer(new_csv)

        new_csv_writer.writerow(title)
        new_csv_writer.writerow(subtitle)
        new_csv_writer.writerow('')
        new_csv_writer.writerow(protein)
        new_csv_writer.writerow(ligand)
        new_csv_writer.writerow(data_type)
        new_csv_writer.writerow(fluorophore)
        new_csv_writer.writerow(buffer)
        new_csv_writer.writerow('')
        new_csv_writer.writerow('')

        np.savetxt(new_csv, np.transpose(mat), delimiter=',', header='Wavelength (nm), Fluorescence Intensity', comments='', fmt='%f')

        new_csv_writer.writerow('')
        new_csv_writer.writerow(measurement_parameters)
        new_csv_writer.writerow(excitation_bandwidth)
        new_csv_writer.writerow(emission_bandwidth)
        new_csv_writer.writerow(response)
        new_csv_writer.writerow(sensitivity)
        new_csv_writer.writerow(measurement_range)
        new_csv_writer.writerow(data_interval)
        new_csv_writer.writerow(excitation_wavelength)
        new_csv_writer.writerow(scan_speed)
        new_csv_writer.writerow(light_source)

        new_csv.close()


