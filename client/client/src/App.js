import logo from './logo.svg';
import './App.css';
import NavBarr from './Components/Navbarr';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
  <>
     <NavBarr></NavBarr>
     <Routes>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='me' element={<Dashboard></Dashboard>}></Route>

     </Routes>
     <ToastContainer />
     </>
    );
}

export default App;
