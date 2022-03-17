import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import FluorometerSideClosed from '../../resources/simulation/Fluorometer-SideView.png'


import React, { useRef } from 'react';
import Popup from 'reactjs-popup';

const FluorometerSide = () => {
  var fluorometer_image = FluorometerSideClosed;
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
          <Button id="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometerTop">
            Top
          </Button>
          <Button id="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/lab">
            Front
          </Button>
        </Box>
      </div>
    </>
  );
}

export default FluorometerSide;