
import './App.css';
import Home from './components/Home';
import History from './components/History';
import Climb from './components/Climb';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
        <Route path='/' element={       <Home/>} />
        <Route path='/history' element={        <History/>}/>
        <Route path='/climb' element={        <Climb/>}/>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
