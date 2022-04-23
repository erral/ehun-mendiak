//import "./App.css";
import { AppRoutes } from "./Routes";
import messages_eu from "./locales/eu/eu.json";
import { IntlProvider } from "react-intl";

import "./App.scss";
const messages = {
  eu: messages_eu,
};

function App() {
  return (
    <IntlProvider locale="eu" messages={messages.eu}>
      <AppRoutes />
    </IntlProvider>
  );
}

export default App;
