import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import PersonalHomepage from "../PersonalHomepage";
import { selectIsDarkTheme } from "../PersonalHomepage/Header/ThemeSwitch/themeSwitchSlice";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "./theme";

export const App = () => {
  const darkModeOff = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={darkModeOff ? themeDark : themeLight}>
      <GlobalStyle />
      <Normalize />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;