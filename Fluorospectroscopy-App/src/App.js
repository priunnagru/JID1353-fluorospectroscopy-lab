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
import Lab from './screens/Lab'
import Settings from './screens/Settings'
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

        <Route path="/lab" element={<Lab />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </Router>
  );
}

export default App;
