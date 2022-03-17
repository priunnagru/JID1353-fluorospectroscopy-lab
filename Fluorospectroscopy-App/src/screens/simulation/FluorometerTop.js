import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import FluorometerOpenEmpty from '../../resources/simulation/Fluorometer-TopView-Empty-NoLight-Open.png'
import FluorometerOpenNotEmpty from '../../resources/simulation/Fluorometer-TopView-NotEmpty-NoLight-Open.png'

import React, { useRef } from 'react';
import Popup from 'reactjs-popup';

const FluorometerTop = () => {
  const cuvetteSelectionRef = useRef();
  const openCuvetteSelectionPopup = () => {
    cuvetteSelectionRef.current.open();
  }

  var fluorometer_image;
  if (sessionStorage.getItem("bHasCuvette") != null)
  {
    if (sessionStorage.getItem("bHasCuvette") == "true")
    {
      fluorometer_image = FluorometerOpenNotEmpty;
      console.log("NOT EMPTY");
    }
    else
    {
      fluorometer_image = FluorometerOpenEmpty;
      console.log("EMPTY");
    }
  }
  else
  {
    fluorometer_image = FluorometerOpenEmpty;
  }

  const addCuvette = () => {
    document.getElementById("imgClickAndChange").src = FluorometerOpenNotEmpty;
    sessionStorage.setItem("bHasCuvette", "true");
    console.log(sessionStorage.getItem("bHasCuvette"));
    cuvetteSelectionRef.current.close();
  }

  const removeCuvette = () => {
    document.getElementById("imgClickAndChange").src = FluorometerOpenEmpty;
    sessionStorage.setItem("bHasCuvette", "false");
    console.log(sessionStorage.getItem("bHasCuvette"));
    
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