import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from "./routes/";
import { SessionProvider } from "./contexts/session";

const App = () => (
  <Router>
    <GlobalStyle />
    <ToastContainer style={{ width: "250px", fontSize: "15px" }} />
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <Routes />
      </SessionProvider>
    </ThemeProvider>
  </Router>
);

export default App;
