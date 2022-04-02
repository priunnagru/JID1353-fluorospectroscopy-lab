import { Box, Button, TextField, Tooltip, ToggleButtonGroup, ToggleButton, Paper, Typography } from '@mui/material';
import '../../styles/tutorial_styles.css';
import '../../styles/param_styles.css';
import { Link } from 'react-router-dom';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'

import React, { useRef } from 'react';
import Popup from 'reactjs-popup';

const ComputerScreen = () => {
  const paramRef = useRef();
  const openParamPopup = () => paramRef.current.open();
  const closeParamPopup = () => paramRef.current.close();

  const [bandwidth, setBandwidth] = React.useState(2.5);
  const bandwidthChange = (event, newBandwidth) => {
    if (newBandwidth !== null) {
      setBandwidth(newBandwidth);
    }
  };

  const [sensitivity, setSensitivity] = React.useState(1);
  const sensitivityChange = (event, newSensitivity) => {
    if (newSensitivity !== null) {
      setSensitivity(newSensitivity);
    }
  };

  const [response, setResponse] = React.useState(20);
  const responseChange = (event, newResponse) => {
    if (newResponse !== null) {
      setResponse(newResponse);
    }
  };

  const concentration = 0.0125; // This is probably a setting that needs to be changed on the fluorometer screen

  return (
    <>
      <header>
        <Paper className="paper-header">
          <div className="title-and-buttons">
            <div className="header-logo">
              <img src={TechGold} alt="TechGold" />
            </div>

            <div className="header-title">
              <Typography className="general-text" variant="h2" color="primary">
                Fluorescense Spectroscopy Simulation
              </Typography>
            </div>

            <div className="header-buttons">
              <Link to="/">
                <button className="home-button"></button>
              </Link>
            </div>
          </div>
        </Paper>
      </header>

      <Button variant="contained" onClick={openParamPopup}>
        Parameters
      </Button>

      <Popup ref={paramRef} modal>
        <div className="popup-params">
          <button className="popup-close" onClick={closeParamPopup}>
            &times;
          </button>

          <div className="input-box">
            <Tooltip title={
              <h2>
                The excitation mode is also a measurement mode option for a real experiment.
              </h2>
            } placement="right" arrow>
              <TextField disabled id="filled-disabled" label="Measurement Mode" variant="outlined" defaultValue="Emission" size="small"/>
            </Tooltip>
          </div>

          <div className="input-box">
            <Tooltip title={
              <h2>
                Excitation wavelength and emission wavelength range will vary depending on the fluorophore being monitored in the experiment.
              </h2>
            } placement="right" arrow>
              <TextField disabled id="filled-disabled" label="Excitation Wavelength" variant="outlined" defaultValue="280 nm" size="small"/>
            </Tooltip>
          </div>

          <div className="input-box">
            <Tooltip title={
              <h2>
                Enter values from 200 - 800 nm.
              </h2>
            } placement="right" arrow>
              <TextField disabled id="filled-disabled" label="Emission Range" variant="outlined" defaultValue="300 nm - 500 nm" size="small"/>
            </Tooltip>
          </div>

          <div className="input-box">
            <Typography variant="h6" color="primary">
              Excitation and Emission Bandwidth
            </Typography>
            <Tooltip title={
              <h2>
                Bandwidth settings regulate the amount of light to and from the sample. <br /><br />
                Excitation and emission bandwidths may be adjusted individually in real fluorometers and additional bandwidth settings may be available.
              </h2>
            } placement="right" arrow>
              <ToggleButtonGroup
                color="secondary"
                value={bandwidth}
                exclusive
                onChange={bandwidthChange}
              >
                <ToggleButton value={2.5}>2.5 nm</ToggleButton>
                <ToggleButton value={5}>5 nm</ToggleButton>
                <ToggleButton value={10}>10 nm</ToggleButton>
              </ToggleButtonGroup>
            </Tooltip>
          </div>

          <div className="input-box">
            <Typography variant="h6" color="primary">
              Sensitivity
            </Typography>
            <Tooltip title={
              <h2>
                Choose the sensitivity level based on the how well you'd like the fluorometer to detect a signal compared to the background noise.
              </h2>
            } placement="right" arrow>
              <ToggleButtonGroup
                color="secondary"
                value={sensitivity}
                exclusive
                onChange={sensitivityChange}
              >
                <ToggleButton value={1}>Low</ToggleButton>
                <ToggleButton value={2}>Medium</ToggleButton>
                <ToggleButton value={3}>High</ToggleButton>
              </ToggleButtonGroup>
            </Tooltip>
          </div>

          <div className="input-box">
            <Typography variant="h6" color="primary">
              Response Time
            </Typography>
            <Tooltip title={
              <h2>
                Response time and scan speed must match! 
              </h2>
            } placement="right" arrow>
              <ToggleButtonGroup
                color="secondary"
                value={response}
                exclusive
                onChange={responseChange}
              >
                <ToggleButton value={20}>20 ms</ToggleButton>
                <ToggleButton value={50}>50 ms</ToggleButton>
                <ToggleButton value={100}>0.1 s</ToggleButton>
                <ToggleButton value={200}>0.2 s</ToggleButton>
                <ToggleButton value={500}>0.5 s</ToggleButton>
              </ToggleButtonGroup>
            </Tooltip>
          </div>

          <div className="input-box">
            <Tooltip title={
              <h2>
                The data interval is the arbitrary step size between data points. Options include 0.5, 1, 2, 5, and 10 nm. 
              </h2>
            } placement="right" arrow>
              <TextField disabled id="filled-disabled" label="Data Interval" variant="outlined" defaultValue="1 nm" size="small"/>
            </Tooltip>
          </div>

          <div className="input-box">
            <Tooltip title={
              <h2>
                Scan speeds can vary from really slow (20 nm/min) to really fast (20,000 nm/min) rates. Scan speed must be appropriate for the designated response time.
              </h2>
            } placement="right" arrow>
              <TextField disabled id="filled-disabled" label="Scan Speed" variant="outlined" defaultValue="2,000 nm/min" size="small"/>
            </Tooltip>
          </div>

          <div className="input-box">
            <Tooltip title={
              <h2>
                The average of multiple accumulations (replicate measurements) is reported.
              </h2>
            } placement="right" arrow>
              <TextField disabled id="filled-disabled" label="Accumulations" variant="outlined" defaultValue="1" size="small"/>
            </Tooltip>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default ComputerScreen;