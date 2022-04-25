import { Button, Typography, Box, Paper} from '@mui/material';
import TechGold from '../resources/GeorgiaTech_TechGold.png'
import '../styles/tutorial_styles.css';
import '../styles/aboutus.css'
import { Link } from 'react-router-dom';
import paul from '../resources/headshots/Paul Case.jpg'
import kd from '../resources/headshots/Khadijat_Amoo.JPG'
import priun from '../resources/headshots/Priun Nagru.jpg'
import shaun from '../resources/headshots/Bum Chan Koo.jpg'
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
                <img className="headshot" src={kd} alt="image"/>
            </Paper>
            <Box display="flex" justifyContent="center" m={2}>
                <Typography className= "general-text" variant="h4">
                    Khadijat Amoo: UX/UI Designer <br></br>
                    Hi, my name is Khadijat Amoo, and I am a Computational Media major at Georgia Tech. I am specializing in people and interactive design. I'm going to be a full-time UX Designer at Amazon.
                </Typography>
            </Box>
        </div>
        <div className="side-by-side-container">
            <Paper className="paper-image" elevation={10}>
                <img className="headshot" src={paul} alt="image"/>
            </Paper>
            <Typography className= "general-text" variant="h4">
                Paul Case: Frontend Developer <br></br>
                Hello, My name is Paul Case, and I am a 3rd year computer science major at Georgia Tech. My concentrations are system architecture and devices, and I want to work on creating firmware after graduation.
            </Typography>
        </div>
        <div className="side-by-side-container">
            <Paper className="paper-image" elevation={10}>
                <img className="headshot" src={shaun} alt="image"/>
            </Paper>
            <Box display="flex" justifyContent="center" m={2}>
                <Typography className= "general-text" variant="h4">
                    Bum Chan Koo: Full Stack Developer <br></br>
                    My name is Bum Chan Koo, and I am a computer science major studing media and intelligence. I want to be a video game developer.
                </Typography>
            </Box>
        </div>
        <div className="side-by-side-container">
            <Paper className="paper-image" elevation={10}>
                <img className="headshot" src={priun} alt="image"/>
            </Paper>
            <Box display="flex" justifyContent="center" m={2}>
                <Typography className= "general-text" variant="h4">
                    Priun Nagru: Full Stack Developer <br></br>
                    I'm Priun Nagru, a Computer Science major in the Devices and Systems and Architecture threads. Ultimately, I want to apply my knowledge to become an embedded systems engineer, or work for companies manufacturing processors such as AMD, Intel, or NVIDIA!                    
                </Typography>
            </Box>
        </div>

      </div>

    </>
  );
}

export default AboutUs;