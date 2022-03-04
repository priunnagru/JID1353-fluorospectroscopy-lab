import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import ImageA from '../../resources/tutorial/image2.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';

const TutorialNewD = () => {
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

          <LinearProgress color="secondary" variant="determinate" value={(100.0/13) * 3} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text" variant="h3" color="secondary">
          Fluorescence will always occur at a longer wavelength than the excitation wavelength...
        </Typography>

        <div className="side-by-side-container">
          <div className="bulleted-info">
            <ul>
              <li>
                <Typography className= "general-text" variant="h4">
                  Excite Trp at 280 nm - what fluorescence emission peak is observed?
                </Typography>
              </li>
              <li>
                <Typography className= "general-text" variant="h4">
                  Excite Trp at ____ nm - what is observed?
                </Typography>
              </li>
            </ul>
          </div>
          <Paper className="paper-img1" elevation={10}>
            <img className="img1" src={ImageA} alt=""/>
          </Paper>
        </div>

        <Box display="flex" justifyContent="right" m={0}>
          <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/tutorial/4">
            Next
          </Button>
        </Box>
      </div>
    </>
  );
}

export default TutorialNewD;