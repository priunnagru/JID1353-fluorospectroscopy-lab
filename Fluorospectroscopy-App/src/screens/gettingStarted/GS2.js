import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import image from '../../resources/gettingStarted/front fluoro.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Popup from 'reactjs-popup';
import React, { useRef } from 'react';

const GS2 = () => {
  const imageARef = useRef();
  const openImageAPopup = () => imageARef.current.open();
  const closeImageAPopup = () => imageARef.current.close();
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
                Fluorescence Spectroscopy Getting Started
              </Typography>
            </div>

            <div className="header-buttons">
              <Link to="/">
                <button className="home-button"></button>
              </Link>
            </div>
          </div>

          <LinearProgress color="secondary" variant="determinate" value={(100.0/10) * 1} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text" variant="h3" color="secondary">
          Front View of the Spectrometer
          </Typography>

        <div className="side-by-side-container">
          <Paper className="paper-image" elevation={10}>
            <img className="image" src={image} alt="image" onClick={openImageAPopup}/>
          </Paper>
          <Typography className= "general-text" variant="h4">
          Across the bottom of the screen, you will see a few buttons for navigation. You can select the top button to begin adding a chemical.
          </Typography>
    
        </div>

        <Box display="flex" justifyContent="right" m={0}>
          <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/gettingStarted/2">
            Next
          </Button>
        </Box>
      </div>

      <Popup ref={imageARef} modal>
        <div className="popup-img">
          <button className="popup-close" onClick={closeImageAPopup}>
            &times;
          </button>
          <img className="image" src={image} alt="image" />
        </div>
      </Popup>

    </>
  );
}

export default GS2;