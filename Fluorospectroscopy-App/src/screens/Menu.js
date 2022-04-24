import { Button, Typography, Box } from '@mui/material';
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
      <Box display="flex" justifyContent="center" m={5}>
        <Typography variant="h1" align="center" color="primary">
          Virtual Spectroscopy Lab
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" component={Link} to="/tutorial">
          Start Tutorial
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" component={Link} to="/simulation" onClick={Initialize}>
          Start Lab Simulation
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" color="secondary" component={Link} to="/settings">
          Settings
        </Button>
      </Box>
    </>
  );
}

export default Menu;
