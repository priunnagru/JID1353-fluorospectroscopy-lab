import { Button, Typography, Box } from '@mui/material';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState('Menu');

  const MenuScreen = (
    <>
      <Box display="flex" justifyContent="center" m={5}>
        <Typography variant="h1" align="center" color="primary">
          Virtual Spectroscopy Lab
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained"
          onClick={() => {
            setCurrent(TutorialScreen);
          }}
        >
          Start Tutorial
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained"
          onClick={() => {
            setCurrent(LabScreen);
          }}
        >
          Start Lab Simulation
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" m={2}>
        <Button variant="contained" color="secondary"
            onClick={() => {
              setCurrent(SettingsScreen);
            }}
          >
            Settings
        </Button>
      </Box>
    </>
  );

  const TutorialScreen = (
    <>
      <Box display="flex" m={2}>
        <Button variant="contained" color="secondary"
            onClick={() => {
              setCurrent(MenuScreen);
            }}
          >
            Back
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" m={5}>
        <Typography variant="h2" align="center" color="primary">
          Tutorial
        </Typography>
      </Box>
    </>
  );
  
  const LabScreen = (
    <>
      <Box display="flex" m={2}>
        <Button variant="contained" color="secondary"
            onClick={() => {
              setCurrent(MenuScreen);
            }}
          >
            Back
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" m={5}>
        <Typography variant="h2" align="center" color="primary">
          Lab Simulation
        </Typography>
      </Box>
    </>
  );

  const SettingsScreen = (
    <>
      <Box display="flex" m={2}>
        <Button variant="contained" color="secondary"
            onClick={() => {
              setCurrent(MenuScreen);
            }}
          >
            Back
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" m={5}>
        <Typography variant="h2" align="center" color="secondary">
          Settings
        </Typography>
      </Box>
    </>
  );

  return current === 'Menu' ? MenuScreen : current;
}

export default App;
