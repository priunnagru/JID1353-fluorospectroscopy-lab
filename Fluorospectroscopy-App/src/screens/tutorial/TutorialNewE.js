import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import ImageA from '../../resources/tutorial/image3.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';

const TutorialNewE = () => {
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

          <LinearProgress color="secondary" variant="determinate" value={(100.0/13) * 4} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <div className="side-by-side-container">
          <Typography className= "general-text-extra" variant="h3" color="secondary">
            Scanning over a range that includes the excitation usually drowns out the emission.
          </Typography>

          <Paper className="paper-img1" elevation={10}>
            <img className="img1" src={ImageA} alt=""/>
          </Paper>
        </div>

        <Box display="flex" justifyContent="right" m={0}>
          <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/tutorial/5">
            Next
          </Button>
        </Box>
      </div>
    </>
  );
}

export default TutorialNewE;