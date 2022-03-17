import { Button, Typography, Box, Paper } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import Table from '../../resources/Simulation/table.png'
import '../../styles/sim_styles.css';
import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
const TopScreen = () => {

  return (
    <>
      <header>
        <Paper className="paper-header">
          <div className="title-and-buttons">
            <div className="header-logo">
              <img src={TechGold} alt="TechGold" />
            </div>

            <div className="header-title">
              <Typography className="general-text" variant="h2" color="primary">
                Fluorescense Spectroscopy Simulation
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
      <div className="Simulation-body">
        <Paper>
          <Box display="flex" justifyContent="center" m={2}>
            <Typography className="general-text" variant="h2" color="secondary">
              Hello all.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" m={0}>
            <div classname="desktop">
              <Link to="/">
                <button className="computer"></button>
              </Link>
              <button className="cuvettes"></button>
              <Link to="/">
                <button className="fluoro"></button>
              </Link>
            </div>
          </Box>
          <div classname="table" justifyContent="center">
            <img src={Table} alt="Table" />
          </div>
        </Paper>
      </div>
    </>
  );

}
export default TopScreen;