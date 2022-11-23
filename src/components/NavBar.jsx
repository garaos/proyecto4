import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar=()=>{
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><i className="fa-solid fa-burger"></i> Angry Burger</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            {/* <Nav.Link href="/Reservas">Reservas</Nav.Link> */}
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavBar;

