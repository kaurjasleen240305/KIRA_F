import './App.css';
import login from './screens/login';
import prompt from './screens/prompt';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/login" Component={login}/> 
        <Route path="/kira" Component={prompt}/> 
      </Routes>
    </Router>
  );
}

export default App;
