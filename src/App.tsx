import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { ToastContainer } from 'react-toastify';


import Routes from "./routes/";
// import { LayoutProvider } from "./contexts/layout";
// import { SessionProvider } from "./contexts/session";

const App = () => (
  <Router>
    <GlobalStyle />
    <ToastContainer style={{ width: "250px", fontSize: "15px" }}/>
    <ThemeProvider theme={theme}>
      {/* <LayoutProvider>
        <SessionProvider> */}
      <Routes />
      {/* </SessionProvider>
      </LayoutProvider> */}
    </ThemeProvider>
  </Router>
);

export default App;
