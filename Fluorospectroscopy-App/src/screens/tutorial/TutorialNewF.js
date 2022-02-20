import React, { useRef } from 'react';
import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import ImageA from '../../resources/tutorial/image4.svg'
import ImageB from '../../resources/tutorial/image5.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Popup from 'reactjs-popup';

const TutorialNewF = () => {
  const correctRef = useRef();
  const openCorrectPopup = () => correctRef.current.open();

  const incorrectRef = useRef();
  const openIncorrectPopup = () => incorrectRef.current.open();

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
                Fluorospectroscopy Tutorial
              </Typography>
            </div>

            <div className="header-buttons">
              <Link to="/">
                <button className="home-button"></button>
              </Link>
            </div>
          </div>

          <LinearProgress color="secondary" variant="determinate" value={(100.0/15) * 5} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text" variant="h3" color="secondary">
          Bandwidth is the like the aperture setting of a camera.
        </Typography>

        <div className="side-by-side-container">
          <div className="vertical-container">
            <Paper className="paper-img1" elevation={10}>
              <img className="img2" src={ImageA} alt=""/>
            </Paper>
            <Typography className= "general-text" variant="h6">
              Excitation/Emission Bandwidth = 5nm
            </Typography>
          </div>
          <div className="vertical-container">
            <Paper className="paper-img1" elevation={10}>
              <img className="img2" src={ImageB} alt=""/>
            </Paper>
            <Typography className= "general-text" variant="h6">
              Excitation/Emission Bandwidth = 10nm
            </Typography>
          </div>
        </div>

        <Typography className= "general-text" variant="h3" color="secondary">
          We measured Trp at two different bandwidths. What trend do you observe?
        </Typography>

        <div className="side-by-side-container-quiz">
          <div className="general-text-quiz-div">
            <Typography onClick={openCorrectPopup} className= "general-text-quiz" variant="h4">
              The greater the bandwidth, the more light passes through the shutter
            </Typography>
          </div>

          <div className="general-text-quiz-div">
            <Typography onClick={openIncorrectPopup} className= "general-text-quiz" variant="h4">
              The smaller the bandwidth, the more light passes through the shutter
            </Typography>
          </div>

          <div className="general-text-quiz-div">
            <Typography onClick={openIncorrectPopup} className= "general-text-quiz" variant="h4">
              Bandwidth doesn't affect the amount of light that can pass through the shutter
            </Typography>
          </div>
        </div>
      </div>

      <Popup ref={correctRef} modal>
        <div className="popup-correct">
          <Typography variant="h4" color="secondary">
            You got it! A longer bandwidth will yield a greater intensity.
          </Typography>
          <Box display="flex" justifyContent="right" m={2}>
            <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/tutorial/6">
              Next
            </Button>
          </Box>
        </div>
      </Popup>

      <Popup ref={incorrectRef} modal>
        <div className="popup-correct">
          <Typography variant="h4" color="secondary">
            Sorry, that isn't right! Take a closer look at the Intensity of each graph.
          </Typography>
        </div>
      </Popup>
    </>
  );
}

export default TutorialNewF;