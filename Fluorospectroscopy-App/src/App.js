import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './screens/Menu'

import Tutorial from './screens/Tutorial'
import TutorialNewA from './screens/tutorial/TutorialNewA'
import TutorialNewB from './screens/tutorial/TutorialNewB'
import TutorialNewC from './screens/tutorial/TutorialNewC'
import TutorialNewD from './screens/tutorial/TutorialNewD'
import TutorialNewE from './screens/tutorial/TutorialNewE'
import TutorialNewF from './screens/tutorial/TutorialNewF'
import TutorialNewG from './screens/tutorial/TutorialNewG'
import TutorialNewH from './screens/tutorial/TutorialNewH'
import TutorialNewI from './screens/tutorial/TutorialNewI'
import TutorialNewJ from './screens/tutorial/TutorialNewJ'
import TutorialNewK from './screens/tutorial/TutorialNewK'
import TutorialNewL from './screens/tutorial/TutorialNewL'
import TutorialNewM from './screens/tutorial/TutorialNewM'
import TutorialNewN from './screens/tutorial/TutorialNewN'

import GS1 from "./screens/gettingStarted/GS1"
import GS2 from "./screens/gettingStarted/GS2"
import GS3 from "./screens/gettingStarted/GS3"
import GS4 from "./screens/gettingStarted/GS4"
import GS5 from "./screens/gettingStarted/GS5"
import GS6 from "./screens/gettingStarted/GS6"
import GS7 from "./screens/gettingStarted/GS7"
import GS8 from "./screens/gettingStarted/GS8"
import GS9 from "./screens/gettingStarted/GS9"
import GS10 from "./screens/gettingStarted/GS10"
import GS11 from "./screens/gettingStarted/GS11"

import TopScreen from './screens/simulation/TopScreen'

import FluorometerTop from './screens/simulation/FluorometerTop'
import FluorometerSide from './screens/simulation/FluorometerSide'
import FluorometerFront from './screens/simulation/FluorometerFront'

import ComputerScreen from './screens/simulation/ComputerScreen'


import AboutUs from './screens/AboutUs'
import ScrollToTop from './ScrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Menu />}/>

        <Route path="/tutorial" element={<TutorialNewA />}/>
        <Route path="/tutorial/1" element={<TutorialNewB />}/>
        <Route path="/tutorial/2" element={<TutorialNewC />}/>
        <Route path="/tutorial/3" element={<TutorialNewD />}/>
        <Route path="/tutorial/4" element={<TutorialNewE />}/>
        <Route path="/tutorial/5" element={<TutorialNewF />}/>
        <Route path="/tutorial/6" element={<TutorialNewG />}/>
        <Route path="/tutorial/7" element={<TutorialNewH />}/>
        <Route path="/tutorial/8" element={<TutorialNewI />}/>
        <Route path="/tutorial/9" element={<TutorialNewJ />}/>
        <Route path="/tutorial/10" element={<TutorialNewK />}/>
        <Route path="/tutorial/11" element={<TutorialNewL />}/>
        <Route path="/tutorial/12" element={<TutorialNewM />}/>
        <Route path="/tutorial/13" element={<TutorialNewN />}/>

        <Route path="/gettingStarted" element={<GS1/>}/>
        <Route path="/gettingStarted/1" element={<GS2/>}/>
        <Route path="/gettingStarted/2" element={<GS3/>}/>
        <Route path="/gettingStarted/3" element={<GS4/>}/>
        <Route path="/gettingStarted/4" element={<GS5/>}/>
        <Route path="/gettingStarted/5" element={<GS6/>}/>
        <Route path="/gettingStarted/6" element={<GS7/>}/>
        <Route path="/gettingStarted/7" element={<GS8/>}/>
        <Route path="/gettingStarted/8" element={<GS9/>}/>
        <Route path="/gettingStarted/9" element={<GS10/>}/>
        <Route path="/gettingStarted/10" element={<GS11/>}/>

        <Route path="/simulation" element={<TopScreen />}/>
          
        <Route path="/simulation/fluorometer/front" element={<FluorometerFront />}/>
        <Route path="/simulation/fluorometer/side" element={<FluorometerSide />}/>
        <Route path="/simulation/fluorometer/top" element={<FluorometerTop />}/>

        <Route path="/simulation/computer" element={<ComputerScreen />}/>

        <Route path="/aboutus" element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
