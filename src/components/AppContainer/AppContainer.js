import { Row, Col, Container } from 'react-bootstrap';
import { Menu } from '../Menu/Menu';

const AppContainer = ({
  bgColor = 'blue' || 'dark' || 'light',
  className = '',
  animate = false,
  children,
}) => {
  return (
    <Container className={className} fluid>
      <Menu />
      <Row className="mx-0">
        <Col className="mx-auto">
          <div
            className={`app-container app-bg-${bgColor} ${
              animate
                ? 'animate__animated animate__slideInUp animate__faster'
                : ''
            }`}
          >
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AppContainer;
