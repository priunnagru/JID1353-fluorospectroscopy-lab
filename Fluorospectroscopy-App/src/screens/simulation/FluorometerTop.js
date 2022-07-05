import { 
  TextField, 
  Tooltip, 
  ToggleButtonGroup, ToggleButton, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';

import FluorometerOpenEmpty from '../../resources/simulation/top - open.svg'
import FluorometerOpenNotEmpty from '../../resources/simulation/top - open_cuvette.svg'
import FluorometerClosedEmpty from '../../resources/simulation/top - closed.svg'

import Incorrect from '../../resources/sounds/wrong-buzzer-6268.mp3' 

import React, { useRef } from 'react';
import Popup from 'reactjs-popup';

const FluorometerTop = () => {
  const paramRef = useRef();
  const openParamPopup = () => {
    if (sessionStorage.getItem("bIsOpen") === "false")
    {
      openDoor2ErrorPopup();
    }
    else if (sessionStorage.getItem("bHasCuvette") === "true")
    {
      openSampleErrorPopup();
    }
    else
    {
      paramRef.current.open();
    }
  }
  const closeParamPopup = () => {
    sessionStorage.setItem("bHasCuvette", "true");
    updateState();
    paramRef.current.close();
  }

  const [concentration, setConcentration] = React.useState(20);
  const concentrationChange = (event, newConcentration) => {
    if (newConcentration !== null) {
      setConcentration(newConcentration);
      sessionStorage.setItem("concentration", newConcentration.toString())
    }
  };

  var incorrect_audio = new Audio(Incorrect);
  incorrect_audio.volume = 0.05;
  const sampleErrorRef = useRef();
  const openSampleErrorPopup = () => {
    incorrect_audio.play();
    sampleErrorRef.current.open()
  };
  const closeSampleErrorPopup = () => sampleErrorRef.current.close();

  const doorErrorRef = useRef();
  const openDoorErrorPopup = () => {
    incorrect_audio.play();
    doorErrorRef.current.open()
  };
  const closeDoorErrorPopup = () => doorErrorRef.current.close();

  const door2ErrorRef = useRef();
  const openDoor2ErrorPopup = () => {
    incorrect_audio.play();
    door2ErrorRef.current.open()
  };
  const closeDoor2ErrorPopup = () => door2ErrorRef.current.close();

  const removeSampleErrorRef = useRef();
  const openRemoveSampleErrorPopup = () => {
    incorrect_audio.play();
    removeSampleErrorRef.current.open()
  };
  const closeRemoveSampleErrorPopup = () => removeSampleErrorRef.current.close();

  var fluorometer_image;
  if (sessionStorage.getItem("bIsOpen") === "true")
  {
    if (sessionStorage.getItem("bHasCuvette") === "true")
    {
      fluorometer_image = FluorometerOpenNotEmpty;
    }
    else
    {
      fluorometer_image = FluorometerOpenEmpty;
    }
  }
  else
  {
    fluorometer_image = FluorometerClosedEmpty;
  }

  const updateState = () => {
    if (sessionStorage.getItem("bIsOpen") === "true")
    {
      if (sessionStorage.getItem("bHasCuvette") === "true")
      {
        document.getElementById("imgClickAndChange").src = FluorometerOpenNotEmpty;
      }
      else
      {
        document.getElementById("imgClickAndChange").src = FluorometerOpenEmpty;
      }
    }
    else
    {
      document.getElementById("imgClickAndChange").src = FluorometerClosedEmpty;
    }
  }

  const removeCuvette = () => {
    if (sessionStorage.getItem("bIsOpen") === "false")
    {
      openRemoveSampleErrorPopup();
    }
    else
    {
      sessionStorage.setItem("bHasCuvette", "false");
      sessionStorage.setItem("concentration", "0");
      updateState();
    }
  }

  const openFluorometer = () => {
    if (sessionStorage.getItem("bIsOpen") === "true")
    {
      sessionStorage.setItem("bIsOpen", "false");
    }
    else
    {
      if (sessionStorage.getItem("bIsActivated") === "true")
      {
        openDoorErrorPopup();
      }
      else
      {
        sessionStorage.setItem("bIsOpen", "true");
      }
    }
    updateState();
  }

  return (
    <>
      <header>
        <Paper className="paper-header">
          <div className="title-and-buttons">
            <div className="header-logo">
              <img src={TechGold} alt="TechGold" />
            </div>

            <div className="header-title">
              <Typography className= "general-text" variant="h2" color="primary">
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

      <Box display="flex" m={2}>
        <Button variant="contained" endIcon={<NavigateNext/>} component={Link} to="/simulation">
          Return to Table
        </Button>
      </Box>

      <div className='fluorometer-body'>
        <div className='center'>
          <img className="FluorometerOpenEmpty" src={fluorometer_image} alt="FluorometerOpenEmpty" id="imgClickAndChange" width={1000}/>
        </div>
        <Box display="flex" justifyContent="center" m={0} >
          <Button className="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometer/side">
            Side
          </Button>
          <Button className="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometer/front">
            Front
          </Button>
          <Button className="cuvette-Select" variant="contained" color="primary" onClick={openParamPopup}>
            Insert Sample
          </Button>
          <Button className="cuvette-Select" variant="contained" color="primary" onClick={removeCuvette}>
            Remove Sample
          </Button>
          <Button className="cuvette-Select" variant="contained" color="primary" onClick={openFluorometer}>
            Open/Close Door
          </Button>
        </Box>
      </div>

      <Popup ref={sampleErrorRef} modal>
        <div className="popup-error">
          <button className="popup-close" onClick={closeSampleErrorPopup}>
            &times;
          </button>
          <Typography variant="h4" color="secondary">
            Error: Please remove the cuvette before selecting another sample.
          </Typography>
        </div>
      </Popup>

      <Popup ref={doorErrorRef} modal>
        <div className="popup-error">
          <button className="popup-close" onClick={closeDoorErrorPopup}>
            &times;
          </button>
          <Typography variant="h4" color="secondary">
            Error: Please deactivate the fluorometer before opening the door.
          </Typography>
        </div>
      </Popup>

      <Popup ref={door2ErrorRef} modal>
        <div className="popup-error">
          <button className="popup-close" onClick={closeDoor2ErrorPopup}>
            &times;
          </button>
          <Typography variant="h4" color="secondary">
            Error: Please open the door before inserting a new sample.
          </Typography>
        </div>
      </Popup>

      <Popup ref={removeSampleErrorRef} modal>
        <div className="popup-error">
          <button className="popup-close" onClick={closeRemoveSampleErrorPopup}>
            &times;
          </button>
          <Typography variant="h4" color="secondary">
            Error: Please open the door before removing the sample.
          </Typography>
        </div>
      </Popup>

      <Popup ref={paramRef} modal>
        <div className="popup-params">
          <button className="popup-close" onClick={closeParamPopup}>
            &times;
          </button>

          <div className="input-box">
            <Typography variant="h6" color="primary">
              Sample Concentration
            </Typography>
            <Tooltip title={
              <h2>
                Select a concentration for the sample.
              </h2>
            } placement="right" arrow>
              <ToggleButtonGroup
                color="secondary"
                value={concentration}
                exclusive
                onChange={concentrationChange}
              >
                <ToggleButton value={0.0125} style={{textTransform: "none"}}>0.0125 mM</ToggleButton>
                <ToggleButton value={0.025} style={{textTransform: "none"}}>0.025 mM</ToggleButton>
                <ToggleButton value={0.0375} style={{textTransform: "none"}}>0.0375 mM</ToggleButton>
                <ToggleButton value={0.05} style={{textTransform: "none"}}>0.05 mM</ToggleButton>
                <ToggleButton value={0.0625} style={{textTransform: "none"}}>0.0625 mM</ToggleButton>
                <ToggleButton value={0.075} style={{textTransform: "none"}}>0.075 mM</ToggleButton>
                <ToggleButton value={0.0875} style={{textTransform: "none"}}>0.0875 mM</ToggleButton>
                <ToggleButton value={0.1} style={{textTransform: "none"}}>0.1 mM</ToggleButton>
                <ToggleButton value={0.1125} style={{textTransform: "none"}}>0.1125 mM</ToggleButton>
                <ToggleButton value={0.125} style={{textTransform: "none"}}>0.125 mM</ToggleButton>
              </ToggleButtonGroup>
            </Tooltip>
          </div>

          <div className="input-box">
            <Box display="flex" justifyContent="right">
              <Button variant="contained" onClick={closeParamPopup}>
                Insert Sample
              </Button>
            </Box>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default FluorometerTop;
