import { AppContainer } from "../../components";
import { Container } from "react-bootstrap";
import { getMountains } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export const MapPage = () => {
  const dispatch = useDispatch();
  dispatch(getMountains());
  const mountains = useSelector((state) => state.mountains?.data);
  const bounds = mountains.map((mountain) => {
    return [
      parseFloat(mountain.mendikat_latitude),
      parseFloat(mountain.mendikat_longitude),
    ];
  });
  return (
    <AppContainer>
      <Container fluid>
        <MapContainer bounds={bounds} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
          {mountains.map((mountain) => (
            <Marker
              icon={DefaultIcon}
              position={[
                parseFloat(mountain.mendikat_latitude),
                parseFloat(mountain.mendikat_longitude),
              ]}
            >
              <Popup>
                {mountain.Mendia} ({mountain.Altuera})
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Container>
    </AppContainer>
  );
};
