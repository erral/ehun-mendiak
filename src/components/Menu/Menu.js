import { Navbar, Container, Nav } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            <FormattedMessage id="Home" />
          </Link>

          <Link to="/mapa" className="nav-link">
            <FormattedMessage id="Map" />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export { Menu };
