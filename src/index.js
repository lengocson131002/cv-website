import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./GlobalStyles"
import { ModalProvider } from "./context/ModalProvider"
const theme = {
  color: {
    background: "#212428",
    text_dark: "#c4cfde",
    text_light: "#f4f5f6",
    primary: "#ff014f",
    tertiary: "#0d1013",
    gray: "#f6f6f6",
    subtitle: "#f9004d"
  },
  background: {
    background_1: "linear-gradient(145deg,#1e2024,#23272b)",
    background_2: "linear-gradient(to right bottom,#212428,#16181c)"
  },
  shadow: {
    shadow_1: "10px 10px 19px #1c1e22,-10px -10px 19px #262a2e"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
