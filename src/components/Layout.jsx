import { Outlet,Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>
{
    return(
        <>
       <Container>
        <div>
       <Navbar bg="secodary" data-bs-theme="red">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="cards">Cards</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   <div style={{height:"550px"}}>
        
        <Outlet/>

   </div>
   <div style={{height:"75px"}}>
  
  <h1 style={{marginLeft:"120px"}}>All coppy are reserved by Rajan kumar in 2024</h1>

   </div>
      </div>
       </Container>
        </>
    )
}

export default Layout;