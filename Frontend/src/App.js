import './App.css';
//import Pages
import Form from './pages/Form';
import Income from './pages/createIncome';
import Guests from './pages/guests';

//Import components
import Navbar from './components/navbar/navbar';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Form/>}/>
        <Route exact path="/create-income" element={<Income/>}/>
        <Route exact path="/guests" element={<Guests/>}/>
      </Routes>
    </Router>
  );
}

export default App;
