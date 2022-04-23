import { AppContainer } from '../../components';
import {
  Row,
  Col,
  Container,
  Card,
  ButtonGroup,
  Button,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { getMountains } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const FrontPage = () => {
  const dispatch = useDispatch();
  dispatch(getMountains());
  const raw_mountains = useSelector((state) => state.mountains?.data);
  let mountains = {};
  for (let mountain of raw_mountains) {
    let day = mountain.Eguna.trim();
    let date = new Date(Date.parse(day));
    let year = date.getFullYear();

    mountains[year] = mountains[year] || [];
    mountains[year].push(mountain);
  }
  return (
    <AppContainer>
      <Container fluid>
        <Navbar>
          <Navbar.Brand>
            <FormattedMessage id="Year" defaultMessage="Year" />
          </Navbar.Brand>
          {Object.keys(mountains).map((year) => (
            <Link to={`/#year${year}`} className="nav-link">
              {year}
            </Link>
          ))}
        </Navbar>

        {Object.keys(mountains).map((year) => (
          <Row>
            <>
              <h2 id={`#year${year}`}> {year}</h2>
              {mountains[year].map((mountain) => (
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>{mountain.Mendia}</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>
                            <FormattedMessage
                              id="Height"
                              defaultMessage="Height"
                            />
                            : {mountain.Altuera}
                          </li>
                          <li>
                            <FormattedMessage
                              id="Country"
                              defaultMessage="Country"
                            />
                            : {mountain.Lurraldea}
                          </li>
                          <li>
                            <FormattedMessage id="Date" defaultMessage="Date" />
                            : {mountain.Eguna}
                          </li>
                        </ul>
                        <ButtonGroup>
                          <Button href={mountain['mendiak.eus']}>
                            mendiak.eus <BoxArrowUpRight />
                          </Button>
                          <Button variant="secondary" href={mountain.mendikat}>
                            mendikat <BoxArrowUpRight />
                          </Button>
                        </ButtonGroup>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </>
          </Row>
        ))}
      </Container>
    </AppContainer>
  );
};
