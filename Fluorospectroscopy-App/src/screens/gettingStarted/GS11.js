import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import image from '../../resources/gettingStarted/graphed.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Popup from 'reactjs-popup';
import React, { useRef } from 'react';

const GS11 = () => {
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

          <LinearProgress color="secondary" variant="determinate" value={(100.0/10) * 10} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text" variant="h3" color="secondary">
          Next Steps
        </Typography>

        <div className="side-by-side-container">
          <div className="bulleted-info">

                <Typography className= "general-text" variant="h4">
                  Congratulations! You completed the getting started tutorial. To start the lab, return to the main menu and select the lab simulation button.
                </Typography>
              
          </div>
        </div>

        <Box display="flex" justifyContent="right" m={0}>
          <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/">
            Main Menu
          </Button>
        </Box>
      </div>
    </>
  );
}

export default GS11;