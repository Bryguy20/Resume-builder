import { Navbar } from "react-bootstrap";


const NavBar = () => {
  return (
    <nav style={{background: "pink", height: "100px"}}>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <h1 href="/" style={{textAlign: "center", alignItems: "center"}}>CV Generator App</h1>
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;