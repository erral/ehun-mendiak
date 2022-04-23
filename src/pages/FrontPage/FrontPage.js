import { AppContainer } from "../../components";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { getMountains } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

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
      <Container fluid="md">
        <Row>
          {Object.keys(mountains).map((year) => (
            <Col sm>
              <>
                <h2> {year}</h2>
                {mountains[year].map((mountain) => (
                  <Card>
                    <Card.Body>
                      <Card.Title>{mountain.Mendia}</Card.Title>
                      <Card.Text>
                        <ul>
                          <li>
                            <FormattedMessage id="Altuera" />:{" "}
                            {mountain.Altuera}
                          </li>
                          <li>
                            <FormattedMessage id="Lurraldea" />:{" "}
                            {mountain.Lurraldea}
                          </li>
                        </ul>
                        <Button
                          variant="primary"
                          href={mountain["mendiak.eus"]}
                        >
                          mendiak.eus
                        </Button>
                        <Button variant="primary" href={mountain.mendikat}>
                          mendikat
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </>
            </Col>
          ))}
        </Row>
      </Container>
    </AppContainer>
  );
};
