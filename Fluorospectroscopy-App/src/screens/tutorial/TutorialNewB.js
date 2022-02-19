import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import Tryptophan from '../../resources/Tryptophan.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';

const TutorialNewB = () => {
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

          <LinearProgress color="secondary" variant="determinate" value={(100.0/15) * 1} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text" variant="h3" color="secondary">
          A fluorophore is required in order to conduct a fluorescence experiment
        </Typography>

        <div className="side-by-side-container">
          <Paper className="paper-tryptophan" elevation={10}>
            <img className="tryptophan" src={Tryptophan} alt="Tryptophan" />

            <Typography className= "general-text" variant="h7">
              Source: Wikipedia
            </Typography>
          </Paper>

          <div className="bulleted-info">
            <ul>
              <li>
                <Typography className= "general-text" variant="h4">
                  Tryptophan, Trp, W
                </Typography>
              </li>
              <li>
                <Typography className= "general-text" variant="h4">
                  Amino acid with a hydrophobic side chain
                </Typography>
              </li>
              <li>
                <Typography className= "general-text" variant="h4">
                  Side chain has a conjugated ring system
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        <Box display="flex" justifyContent="right" m={0}>
          <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/tutorial/2">
            Next
          </Button>
        </Box>
      </div>
    </>
  );
}

export default TutorialNewB;