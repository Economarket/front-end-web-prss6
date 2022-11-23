import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ToastContainer } from "react-toastify";

import Routes from "./routes/";
import { SessionProvider } from "./contexts/session";
import { LocalizationProvider } from "./contexts/localization";

const App = () => (
  <Router>
    <GlobalStyle />
    <ToastContainer style={{ width: "250px", fontSize: "15px" }} />
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <LocalizationProvider>
          <Routes />
        </LocalizationProvider>
      </SessionProvider>
    </ThemeProvider>
  </Router>
);

export default App;
