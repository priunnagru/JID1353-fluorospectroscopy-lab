import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../resources/GeorgiaTech_TechGold.png'
import '../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';

const AboutUs = () => {
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
        </Paper>
      </header>

      <div className="body">
        <Box display="flex" justifyContent="center" m={2}>
          <Typography className= "general-text" variant="h2" color="secondary">
            About the Team
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" m={2}>
          <Typography className= "general-text" variant="h4" color="secondary">
            This Lab Simulation was created by a group of 4 Computer Science and Computational Media majors at The Georgia Institute of Technology. The members included Paul Case, Priun Nagru, Bum Chan Koo, and Khadijat Amoo.
          </Typography>
        </Box>
        
        <div className="side-by-side-container">
            <Paper className="paper-image" elevation={10}>
                <img className="image" src={image} alt="image" onClick={openImageAPopup}/>
            </Paper>
            <Typography className= "general-text" variant="h4">
                Paul Case: Fullstack designer 
            </Typography>
        </div>

      </div>

    </>
  );
}

export default AboutUs;