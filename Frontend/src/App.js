import './App.css';
//import Pages
import Form from './pages/Form';

//Import components
import Navbar from './components/navbar/navbar';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/create-empleado" element={<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
