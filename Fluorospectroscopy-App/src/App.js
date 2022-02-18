import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './screens/Menu'
import Tutorial from './screens/Tutorial'
import TutorialNew from './screens/tutorial/TutorialNewA'
import Lab from './screens/Lab'
import Settings from './screens/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}/>
        <Route path="/tutorial" element={<TutorialNew />}/>
        <Route path="/lab" element={<Lab />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </Router>
  );
}

export default App;
