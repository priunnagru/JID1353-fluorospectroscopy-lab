import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import ImageA from '../../resources/tutorial/image11.svg'
import ImageB from '../../resources/tutorial/image12.svg'
import ImageC from '../../resources/tutorial/image13.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Popup from 'reactjs-popup';
import React, { useRef } from 'react';

const TutorialNewJ = () => {
  const imageARef = useRef();
  const openImageAPopup = () => imageARef.current.open();
  const closeImageAPopup = () => imageARef.current.close();
  const imageBRef = useRef();
  const openImageBPopup = () => imageBRef.current.open();
  const closeImageBPopup = () => imageBRef.current.close();
  const imageCRef = useRef();
  const openImageCPopup = () => imageCRef.current.open();
  const closeImageCPopup = () => imageCRef.current.close();

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

          <LinearProgress color="secondary" variant="determinate" value={(100.0/13) * 9} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text-extra" variant="h3" color="secondary">
          Response is the time for which detection is made. Can you see how it affects the emission spectrum?
        </Typography>
        <div className="side-by-side-container">
          <div className="vertical-container">
            <Paper className="paper-img1" elevation={10}>
              <img className="img2" src={ImageA} alt="" onClick={openImageAPopup}/>
            </Paper>
            <Typography className= "general-text" variant="h6" style={{ fontWeight: 600 }}>
              Response time = 20ms
            </Typography>
          </div>

          <div className="vertical-container">
            <Paper className="paper-img1" elevation={10}>
              <img className="img2" src={ImageB} alt="" onClick={openImageBPopup}/>
            </Paper>
            <Typography className= "general-text" variant="h6" style={{ fontWeight: 600 }}>
              Response time = 50ms
            </Typography>
          </div>

          <div className="vertical-container">
            <Paper className="paper-img1" elevation={10}>
              <img className="img2" src={ImageC} alt="" onClick={openImageCPopup}/>
            </Paper>
            <Typography className= "general-text" variant="h6" style={{ fontWeight: 600 }}>
              Response time = 100ms
            </Typography>
          </div>
        </div>

        <Box display="flex" justifyContent="right" m={0}>
          <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/tutorial/10">
            Next
          </Button>
        </Box>
      </div>

      <Popup ref={imageARef} modal>
        <div className="popup-img">
          <button className="popup-close" onClick={closeImageAPopup}>
            &times;
          </button>
          <img className="img1-popup" src={ImageA} alt=""/>
        </div>
      </Popup>

      <Popup ref={imageBRef} modal>
        <div className="popup-img">
          <button className="popup-close" onClick={closeImageBPopup}>
            &times;
          </button>
          <img className="img1-popup" src={ImageB} alt=""/>
        </div>
      </Popup>

      <Popup ref={imageCRef} modal>
        <div className="popup-img">
          <button className="popup-close" onClick={closeImageCPopup}>
            &times;
          </button>
          <img className="img1-popup" src={ImageC} alt=""/>
        </div>
      </Popup>
    </>
  );
}

export default TutorialNewJ;