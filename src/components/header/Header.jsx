import { Box, Link } from "@mui/material";
import { data } from "./data";
import useStyles from "./styles";
import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const styles = useStyles();

  const handleScroll = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = data.map((item) => document.querySelector(item.link));

      sections.forEach((section) => {
        if (section) {
          const top = section.getBoundingClientRect().top;
          const offset = window.innerHeight / 3;

          if (top < offset && top > -offset) {
            const id = section.getAttribute("id");
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className={styles.root}>
      {data?.map((item, index) => (
        <Link
          key={index}
          onClick={() => handleScroll(item.link)}
          className={`${styles.link} ${
            activeSection === item.link.substring(1) ? styles.activeLink : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </Box>
  );
};

export default Header;
