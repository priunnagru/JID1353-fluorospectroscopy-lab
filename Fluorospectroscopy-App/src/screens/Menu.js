import { Button, Typography, Box, Paper} from '@mui/material';
import TechGold from '../resources/GeorgiaTech_TechGold.png'
import { Link } from 'react-router-dom';

const Menu = () => {
  const Initialize = () => {
    sessionStorage.setItem("bIsActivated", "false");
    sessionStorage.setItem("bIsOpen", "false");
    sessionStorage.setItem("bHasCuvette", "false");
    sessionStorage.setItem("concentration", "0");
  }

  return (
    <>
      <Paper className="paper-header">
          <div className="title-and-buttons">
            <div className="header-logo">
              <img src={TechGold} alt="TechGold" />
            </div>

            <div className="header-title">
              <Typography className= "general-text" variant="h2" color="primary">
                Fluorescence Spectroscopy Virtual Lab
              </Typography>
            </div>
          </div>
        </Paper>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" component={Link} to="/tutorial">
          Start Tutorial
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" component={Link} to="/gettingStarted">
          Getting Started
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" component={Link} to="/simulation" onClick={Initialize}>
          Start Lab Simulation
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" color="secondary" component={Link} to="/aboutus">
          About Us
        </Button>
      </Box>
    </>
  );
}

export default Menu;
