import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, useNavigate} from 'react-router-dom'
import './nav.css'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/esm/Button';
import { logout } from '../redux/slices/AuthSlice';
import AddProduct from './AddProduct';
function NavBarr() {
  const {user}=useSelector(state=>state.authReducer)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const logoff=(e)=>{
    e.preventDefault()
    dispatch(logout())
    navigate('/login')
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-commerce website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks">
            {!user?<>   <Link to="login">Login</Link>
            <Link to="register">Register</Link></>:
            <>

             <Link to="dashboard">Dashboard</Link>
             <Button onClick={logoff}>Logout</Button>
             <AddProduct></AddProduct>

             </>
}
         
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarr;