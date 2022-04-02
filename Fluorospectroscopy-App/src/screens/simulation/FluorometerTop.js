import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import FluorometerOpenEmpty from '../../resources/simulation/Fluorometer-TopView-Empty-NoLight-Open.png'
import FluorometerOpenNotEmpty from '../../resources/simulation/Fluorometer-TopView-NotEmpty-NoLight-Open.png'
import FluorometerOpenNotEmptyLight from '../../resources/simulation/Fluorometer-TopView-NotEmpty-Light-Open.png'

import React, { useRef } from 'react';
import Popup from 'reactjs-popup';

const FluorometerTop = () => {
  const cuvetteSelectionRef = useRef();
  const openCuvetteSelectionPopup = () => {
    cuvetteSelectionRef.current.open();
  }

  // We also need a closed version of the fluorometer from the top view
  var fluorometer_image;
  if (sessionStorage.getItem("bHasCuvette") != null)
  {
    if (sessionStorage.getItem("bHasCuvette") == "true")
    {
      if (sessionStorage.getItem("bIsActivate") == "true")
      {
        fluorometer_image = FluorometerOpenNotEmptyLight;
      }
      else
      {
        fluorometer_image = FluorometerOpenNotEmpty;
      }
    }
    else
    {
      if (sessionStorage.getItem("bIsActivate") == "true")
      {
        fluorometer_image = FluorometerOpenNotEmptyLight; // Replace with empty but activate
      }
      else
      {
        fluorometer_image = FluorometerOpenEmpty;
      }
    }
  }
  else
  {
    fluorometer_image = FluorometerOpenEmpty;
  }

  const updateState = () => {
    console.log("UPDATE");
    if (sessionStorage.getItem("bHasCuvette") != null)
    {
      if (sessionStorage.getItem("bHasCuvette") == "true")
      {
        if (sessionStorage.getItem("bIsActivate") == "true")
        {
          document.getElementById("imgClickAndChange").src = FluorometerOpenNotEmptyLight;
        }
        else
        {
          document.getElementById("imgClickAndChange").src = FluorometerOpenNotEmpty;
        }
      }
      else
      {
        if (sessionStorage.getItem("bIsActivate") == "true")
        {
          document.getElementById("imgClickAndChange").src = FluorometerOpenNotEmptyLight; // Replace with empty but activate
        }
        else
        {
          document.getElementById("imgClickAndChange").src = FluorometerOpenEmpty;
        }
      }
    }
    else
    {
      document.getElementById("imgClickAndChange").src = FluorometerOpenEmpty;
    }
  }

  const addCuvette = () => {
    sessionStorage.setItem("bHasCuvette", "true");
    updateState();
    cuvetteSelectionRef.current.close();
  }

  const removeCuvette = () => {
    sessionStorage.setItem("bHasCuvette", "false");
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

      <div className='fluorometer-body'>
        <div className='center'>
          <img className="FluorometerOpenEmpty" src={fluorometer_image} alt="FluorometerOpenEmpty" id="imgClickAndChange" width={1000}/>
        </div>
        <Box display="flex" justifyContent="center" m={0} >
          <Button id="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometerSide">
            Side
          </Button>
          <Button id="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/lab">
            Front
          </Button>
          <Button id="cuvette-Select" variant="contained" color="primary" onClick={openCuvetteSelectionPopup}>
            Chemicals
          </Button>
          <Button id="cuvette-Select" variant="contained" color="primary" onClick={removeCuvette}>
            Remove Cuvette
          </Button>
          <Button id="cuvette-Select" variant="contained" color="primary">
            Open/Close Hood
          </Button>
        </Box>
      </div>

      <Popup ref={cuvetteSelectionRef} modal>
        <div className="popup-correct">
          <div className="side-by-side-container-quiz">
            <div onClick={addCuvette}>
              <Box className="cuvette-button" margin={2}>
                <Typography align='center' variant="h1">
                  A
                </Typography>
              </Box>
            </div>
            <div onClick={addCuvette}>
              <Box className="cuvette-button" margin={2}>
                <Typography align='center' variant="h1">
                  B
                </Typography>
              </Box>
            </div>
            <div onClick={addCuvette}>
              <Box className="cuvette-button" margin={2}>
                <Typography align='center' variant="h1">
                  C
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </Popup>

    </>
  );
}

export default FluorometerTop;