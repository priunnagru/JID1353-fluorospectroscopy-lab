import React, { useRef } from 'react';
import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import ImageA from '../../resources/tutorial/image8.svg'
import ImageB from '../../resources/tutorial/image9.svg'
import ImageC from '../../resources/tutorial/image10.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Popup from 'reactjs-popup';

const TutorialNewH = () => {
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

          <LinearProgress color="secondary" variant="determinate" value={(100.0/15) * 7} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text" variant="h3" color="secondary">
          What does the excitation bandwidth affect?
        </Typography>

        <div className="side-by-side-container-quiz">
          <div className="general-text-quiz-div">
            <div className="general-text-quiz" onClick={openCorrectPopup}>
              <div className="vertical-container">
                <Paper className="paper-img1" elevation={10}>
                  <img className="img2" src={ImageA} alt=""/>
                </Paper>
                <Typography className= "general-text" variant="h5">
                  Amount of light exposed to the sample
                </Typography>
              </div>
            </div>
          </div>

          <div className="general-text-quiz-div">
            <div className="general-text-quiz" onClick={openIncorrectPopup}>
              <div className="vertical-container">
                <Paper className="paper-img1" elevation={10}>
                  <img className="img2" src={ImageB} alt=""/>
                </Paper>
                <Typography className= "general-text" variant="h5">
                  Amount of light exposed to the detector
                </Typography>
              </div>
            </div>
          </div>

          <div className="general-text-quiz-div">
            <div className="general-text-quiz" onClick={openIncorrectPopup}>
              <div className="vertical-container">
                <Paper className="paper-img1" elevation={10}>
                  <img className="img2" src={ImageC} alt=""/>
                </Paper>
                <Typography className= "general-text" variant="h5">
                  Amount of light exposed to both the sample and the detector
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup ref={correctRef} modal>
        <div className="popup-correct">
          <Typography variant="h4" color="secondary">
            That's right! The lamp will expose a different amount of light to the sample depending on the excitation bandwidth.
          </Typography>
          <Box display="flex" justifyContent="right" m={2}>
            <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/tutorial/8">
              Next
            </Button>
          </Box>
        </div>
      </Popup>

      <Popup ref={incorrectRef} modal>
        <div className="popup-correct">
          <Typography variant="h4" color="secondary">
            That's not it. Try again!
          </Typography>
        </div>
      </Popup>
    </>
  );
}

export default TutorialNewH;