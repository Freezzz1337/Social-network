import {Button, Container, Modal, Nav, Navbar} from "react-bootstrap";
import {useAuth} from "../../context/auth-context";
import {useState} from "react";

const Header = () => {
    const [show, setShow] = useState(false);
    const {logout} = useAuth();

    const handleLogoutClick = () => {
        setShow(true);
    }

    const handleCloseLogoutModal = () => {
        setShow(false);
    }

    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">My Social Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#explore">Explore</Nav.Link>
                            <Nav.Link href="#notifications">Notifications</Nav.Link>
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <Nav.Link href="#logout" onClick={handleLogoutClick}>Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Modal show={show} onHide={handleCloseLogoutModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to log out?</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCloseLogoutModal} variant="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogout} variant="primary">
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header;