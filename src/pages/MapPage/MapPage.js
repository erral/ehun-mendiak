import { AppContainer } from '../../components';
import { Container, Row, Col } from 'react-bootstrap';
import { getMountains, getBorder } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from 'react-leaflet';
import { FormattedMessage } from 'react-intl';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export const MapPage = () => {
  const dispatch = useDispatch();
  dispatch(getMountains());
  dispatch(getBorder());
  const mountains = useSelector((state) => state.mountains?.data);
  const border = useSelector((state) => state.border?.data);
  const borderOptions = { color: '#3381c2' };

  return (
    <AppContainer>
      <Container>
        <Row>
          <Col>
            <MapContainer bounds={border} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              />
              <Polyline positions={border} pathOptions={borderOptions} />
              {mountains.map((mountain) => (
                <Marker
                  key={mountain.Mendia}
                  icon={DefaultIcon}
                  position={[
                    parseFloat(mountain.mendikat_latitude),
                    parseFloat(mountain.mendikat_longitude),
                  ]}
                >
                  <Popup>
                    <p>
                      <strong>
                        {mountain.Mendia} ({mountain.Altuera}) <br />
                      </strong>
                      <FormattedMessage id="Date" defaultMessage="Date" />:{' '}
                      {mountain.Eguna}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </AppContainer>
  );
};
