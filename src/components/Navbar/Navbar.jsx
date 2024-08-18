import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import styles from './Navbar.module.css'; 

function NavbarPizza() {
  const total = "25.000";
  const token = false; // Estado hardcodeado, cambiar a true para cambiar visibililizacion de botones

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="ms-0">Pizzeria Mamma Mia</Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="outline-light">🍕 Home</Button>{' '}
            <div className={token ? styles.visible : styles.hidden}>
              <Button variant="outline-light">🔓 Profile</Button>{' '}
              <Button variant="outline-light">🔒 Logout</Button>{' '}
            </div>
            <div className={!token ? styles.visible : styles.hidden}>
              <Button variant="outline-light">🔐 Login</Button>{' '}
              <Button variant="outline-light">🔐 Register</Button>{' '}
            </div>
          </Nav>
          <Nav>
            <Button variant="outline-light">🛒 Total: ${total}</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPizza;