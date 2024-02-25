import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar className="bg-transparent" style={{ maxWidth: "100%" }}>
      <Navbar.Brand href="/" style={{ padding: "10px" }}>
        Hidden
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Collapse className="justify-content-end">
          <Nav style={{ marginRight: "25px" }}>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/About">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Action 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
