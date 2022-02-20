import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';

const TutorialNewN = () => {
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

          <LinearProgress color="secondary" variant="determinate" value={(100.0/13) * 13} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Box display="flex" justifyContent="center" m={2}>
          <Typography className= "general-text" variant="h2" color="secondary">
            You have completed the tutorial. Return Home and start a simulation!
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" m={2}>
          <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/">
            Home
          </Button>
        </Box>
      </div>
    </>
  );
}

export default TutorialNewN;