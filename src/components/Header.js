import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = ({ name }) => {
    return (

            <Navbar collapseOnSelect expand="lg" bg="none" variant="dark" className='w-100 border-bottom border-2 mb-3 border-mute '>
                <Navbar.Brand href="/" className='display text-success text-uppercase '> <span className='text-light'>&lt;</span> {name} <span className='text-light'>/&gt;</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="d-flex justify-content-between ms-auto display">
                        <Nav.Link as={Link} to="/">About</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


    );
}

export default Header;

