import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "lightgray"
    }
  }
});
//todo, change theme so it renders properly text and all shit
const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const Theme = (props) => {
  const [light, setLight] = React.useState(true);
  //am using the return below to bypass all the theme until i understand material ui theming
  return (props.children)
  // return (
  //   <MuiThemeProvider theme={light ? themeLight : themeDark}>
  //     <CssBaseline />
  //     {/* to do... move button to Navbar wire the props to here */}
  //     {/* <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button> */}
  //     {props.children}
  //   </MuiThemeProvider>
  // );
};

export default Theme