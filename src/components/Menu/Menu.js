import { Navbar, Container, Nav } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">
            <FormattedMessage id="Home" />
          </Nav.Link>
          <Nav.Link href="/mapa">
            <FormattedMessage id="Map" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export { Menu };
