import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import img from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-body-tertiary shadow-sm">
      <div className="container">
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className=" mb-3">
            <Container fluid>
              <NavLink to="/">
                <img className="logo-img" src={img} alt="logo" />
              </NavLink>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Close
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3 main-nav">
                    <NavLink className="nav-items" to="/">
                      Product list
                    </NavLink>
                    <NavLink className="nav-items" to="/create">
                      Create product
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
