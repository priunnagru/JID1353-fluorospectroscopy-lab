import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './screens/Menu'
import Tutorial from './screens/Tutorial'
import TutorialNewA from './screens/tutorial/TutorialNewA'
import TutorialNewB from './screens/tutorial/TutorialNewB'
import TutorialNewC from './screens/tutorial/TutorialNewC'
import Lab from './screens/Lab'
import Settings from './screens/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}/>

        <Route path="/tutorial" element={<TutorialNewA />}/>
        <Route path="/tutorial/1" element={<TutorialNewB />}/>
        <Route path="/tutorial/2" element={<TutorialNewC />}/>

        <Route path="/lab" element={<Lab />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </Router>
  );
}

export default App;
