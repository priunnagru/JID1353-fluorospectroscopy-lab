import { Button, Typography, Box, Paper } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import Table from '../../resources/simulation/table.png'
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
      <div className="spacer"></div>
      <div className="Simulation-body">
          <Box display="flex" justifyContent="center" m={0}>
            <div classname="desktop">
              <Link to="/simulation/computer">
                <button className="computer"></button>
              </Link>
              <button className="cuvettes"></button>
              <Link to="/simulation/fluorometer/front">
                <button className="fluoro"></button>
              </Link>
            </div>
          </Box>
          <div classname="table" justifyContent="center">
            <img className="table-img" src={Table} alt="Table" />
          </div>
      </div>
    </>
  );

}
export default TopScreen;