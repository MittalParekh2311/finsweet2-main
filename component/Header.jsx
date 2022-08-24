import React,{useState,useEffect} from "react";
import { Container, Row, Navbar, Nav, Link, Offcanvas } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import style from "../styles/Header.module.css";

export const Header = () => {
 
  const [activeLink, setActiveLink] = useState("");
const clickbtn = () =>{
  window.location.href = "Contact";
}
useEffect(() => {
  setActiveLink(window.location.pathname);
});
  return (
    <>
      {/* <h1>Home page </h1> */}
      <div className={style.header_section}>
        <div className="desktop_nav">
          <Container>
            <Row>
              <Navbar expand="lg">
                <Navbar.Brand href="#home">
                  <img src="/images/logo.svg" />
                </Navbar.Brand>
                <NavbarToggle />
                <NavbarCollapse
                  id="responsive-navbar-nav"
                  className={style.navbar}
                >
                  <Nav className={style.header_nav}>
                    <Nav.Link
                      href="Home"
                      active={activeLink == "/Home"}
                      className={[style.navlink, style.active]}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link href="About"  active={activeLink == "/About"} className={style.navlink}>
                      About Us
                    </Nav.Link>
                    <Nav.Link href="Feature" active={activeLink == "/Feature"} className={style.navlink}>
                      Features
                    </Nav.Link>
                    <Nav.Link href="Pricing" active={activeLink == "/Pricing"} className={style.navlink}>
                      Pricing
                    </Nav.Link>
                    <Nav.Link href="" className={style.navlink}>
                      FAQ
                    </Nav.Link>
                    <Nav.Link href="Blog" active={activeLink == "/Blog"} className={style.navlink}>
                      Blog
                    </Nav.Link>
                  </Nav>
                  <button className={style.contact_btn} onClick={clickbtn}>
                    {" "}
                    Contact us
                  </button>
                </NavbarCollapse>
              </Navbar>
            </Row>
          </Container>
        </div>

        <div className="mobile_nav">
          <Navbar expand={false}>
            <Container fluid>
              <Navbar.Brand href="#">
                {" "}
                <img src="/images/logo.svg" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                className={style.menu_icon}
              />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                className={style.leftmenu}
              >
                <Offcanvas.Header closeButton className="closebtn">
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link
                      href="Home"
                      className={[style.navlink, style.active]}
                    >
                      Home
                    </Nav.Link>
                    <Nav.Link href="Aboutus" className={style.navlink}>
                      About Us
                    </Nav.Link>
                    <Nav.Link href="Feature" className={style.navlink}>
                      Features
                    </Nav.Link>
                    <Nav.Link href="Pricing" className={style.navlink}>
                      Pricing
                    </Nav.Link>
                    <Nav.Link href="" className={style.navlink}>
                      FAQ
                    </Nav.Link>
                    <Nav.Link href="Blog" className={style.navlink}>
                      Blog
                    </Nav.Link>
                    <button className={style.contact_btn} onClick={clickbtn}>
                    {" "}
                    Contact us
                  </button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};
// export default Header;
