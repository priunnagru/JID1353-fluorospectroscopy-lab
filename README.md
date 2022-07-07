# INITIAL SETUP
You may skip initial setup if you already have an environment running Node LTS (16.14.2)

1. Download and install Docker Desktop (https://www.docker.com/products/docker-desktop)
2. Download and install VSCode (https://code.visualstudio.com/download)
3. Run Docker Desktop
4. Open VSCode, install the Docker extension (https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
5. Install the Remote Development extension (https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
6. You should probably restart your computer now

# VSCODE SETUP
1. Open VSCode, File > Open Folder > JID1353-fluorospectroscopy-lab (wherever you cloned the git repo)
2. Make sure you have the Explorer tab selected (First tab on the left in VSCode)
3. Right click docker-compose.yml on the left, and select "Compose Up" from the context menu. 
4. Wait for the terminal at the bottom to display "Creating fluorospectroscopy-docker ... done"
5. Select the Docker whale on the left, expand the arrow to the left of jid1353-fluorospectroscopy-lab
6. Right click on node:latest, select "Attach Visual Studio Code" from the context menu
7. A new VSCode window should have opened. Go to File > Open Folder > .. > Fluorospectroscopy-App > OK
8. At the top, go to Terminal > New Terminal
9. Run the command ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash```
10. Close the terminal by clicking the trash can in the top right of the terminal.
11. Go to Terminal > New Terminal. Run the command ```nvm install --lts```
12. Run the command ```yarn install```, this will take a while
13. Once the above is done, run ```yarn start```
14. After a bit, you should see the terminal say "Starting the development server..."
15. Your browser should open, and eventually it will display the React app.

NOTE: Every time you start the container, you will need to type ```nvm use --lts``` before you can start the app.

# DEPLOYMENT, PLESK HOSTING
You need to be on GT VPN. Head to https://hosting.gatech.edu/ and login. You should be able to access the control panel here.
Any future developers must request access to the control panel. Email: web@cos.gatech.edu



## FOR EXISTING DOMAINS
1. Run ```yarn build``` on your local environment. Make sure to wait until the text says ```Done ...``` so that the build fully completes
2. Once it completes, you should have a directory named ```build/``` on your local development environment
3. Navigate to the plesk control panel, and open the Plesk File Manager
4. Navigate to the Application root. Remove all of the following: ```build/``` directory, ```node_modules/``` directory, ```package.json```, ```yarn.lock```, and any ```.zip``` files. Press the checkmark next to them, and press the `Remove` button.
5. On your local environment, create a zip file with any name. In it, place all of the following: ```build/``` directory, ```package.json```, and ```yarn.lock```
6. Upload this zip file to the ```Application root``` directory on Plesk (you can find this path listed under the Node.js App section of Plesk). You may use the ```+``` button in the top left of Plesk, or drag and drop the zip file.
7. In the Plesk File Manager, select the pancake menu at the right of the zip file you just uploaded and select ```Extract Files```. Press OK.
8. In Plesk, return to the "Websites & Domains" tab on the left.
9. Select the ```Node.js App``` blue link near the top of the page.
10. Go to the Node.js section of Plesk
11. Make sure the Application root is the location where all the site’s files will be located
12. Make sure the Document root is in the /build directory of the Application root (for example, if ```/httpdocs``` is the Application root, the Document root should be ```/httpdocs/build```). You may not have permission to change this, if so, go to Hosting Settings, and change it from there instead.
13. Make sure the Application Startup File is ```entry.js```
14. If you see a warning indicating that entry.js does not exist, go to your local repository, locate Fluorospectroscopy-App/entry.js, and upload that file to the Application root in Plesk. Once you do this, the warning should disappear.
15. At the top, click on ```Yarn install```. A popup will appear, this may take a while. Once it finishes, you may ignore the errors that popup.
16. At the top, click on ```Restart App```. After a short period, the app will be deployed.

# DATAGEN SETUP
The graphs were generated using a python script. This project is located in datagen.

1. Install python 3 in your environment (https://www.python.org/downloads/)
2. In your choice of terminal, run ```pip install -r requirements.txt```
3. To execute the script, simply run ```python graph.py```
4. Input .csv files (provided by client) are in ```csvs/```. The output is in ```out/```.
