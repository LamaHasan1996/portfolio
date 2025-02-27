import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contactMe/Contact";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import { Fab, Zoom, Tooltip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [showUpIcon, setShowUpIcon] = useState(false);

  const theme = createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("Home");
      if (homeSection) {
        const { top, bottom } = homeSection.getBoundingClientRect();
        const isHomeVisible = top <= 0 && bottom > 0;
        setShowUpIcon(!isHomeVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    const homeSection = document.getElementById("Home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Zoom in={showUpIcon}>
        <Fab
          color="primary"
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            zIndex: 1000,
            backgroundColor: "#ff4d5a",
          }}
        >
          <Tooltip title={"Up"}>
            <ArrowUpwardIcon />
          </Tooltip>
        </Fab>
      </Zoom>
    </ThemeProvider>
  );
}

export default App;
