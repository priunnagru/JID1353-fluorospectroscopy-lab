import React, { useRef } from 'react';
import { Button, Typography, Box, Paper, LinearProgress, CircularProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Popup from 'reactjs-popup';

const TutorialNewK = () => {
  const errorRef = useRef();
  const openErrorPopup = () => errorRef.current.open();
  const closeErrorPopup = () => errorRef.current.close();

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
                Fluorescence Spectroscopy Tutorial
              </Typography>
            </div>

            <div className="header-buttons">
              <Link to="/">
                <button className="home-button"></button>
              </Link>
            </div>
          </div>

          <LinearProgress color="secondary" variant="determinate" value={(100.0/13) * 10} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text-extra" variant="h3" color="secondary">
          You will see error popups when you make a mistake!
        </Typography>
        <div className="side-by-side-container-align">
          <div className="vertical-container">
            <Button variant="contained" color="secondary" onClick={openErrorPopup}>
              Click here to see an error popup!
            </Button>
          </div>

          <div className="vertical-container">
            <Box display="flex" justifyContent="center" m={0}>
              <CircularProgress size={100}></CircularProgress>
            </Box>
            <Box display="flex" justifyContent="center" m={0}>
              <Typography className= "general-text" variant="h6">
                The slower your scan speed, the longer it will take to scan...
              </Typography>
            </Box>

          </div>
        </div>

        <Box display="flex" justifyContent="right" m={0}>
          <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/tutorial/11">
            Next
          </Button>
        </Box>
      </div>

      <Popup ref={errorRef} modal>
        <div className="popup-error">
          <button className="popup-close" onClick={closeErrorPopup}>
            &times;
          </button>
          <Typography variant="h4" color="secondary">
            The scan speed and response time do not match. Double-check your parameters!
          </Typography>
        </div>
      </Popup>
    </>
  );
}

export default TutorialNewK;