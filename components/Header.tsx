import Image from "next/image";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

type HeaderProps = {
  setCreateClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({setCreateClicked}: HeaderProps) => {

  const handleClickCreate = () => {
    setCreateClicked(true);
  }

  return (
    <Navbar expand className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white">MyDogsCollection<img
            className="ms-2"
            src="favicon.ico"
            alt="Bootstrap"
            width="20"
            height="20"
          ></img></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#create" className="text-white" onClick={handleClickCreate}>Create</Nav.Link>
            <Nav.Link id = "more-features" className="disabled">More features coming soon! 
            <Image
            className="ms-2"
            src="icons/stars.svg"
            alt="Bootstrap"
            width="20"
            height="20"
          ></Image></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
