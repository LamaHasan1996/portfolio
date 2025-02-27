import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Button, Typography, Container } from "@mui/material";
import useStyles from "./styles";
import VantaBackground from "./VantaBackground";

const Main = () => {
  const styles = useStyles();
  const handleScroll = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className={styles.root} id="Home">
      <VantaBackground />
      <Container maxWidth="md">
        <Box className={styles.textBox}>
          <Typography variant="h3" className={styles.text}>
            Hello, I'm <span class="name">Lama.</span>
          </Typography>
          <Typography variant="h3" className={styles.text}>
            I'm a Front-End web Developer.
          </Typography>
          <Button
            variant="outlined"
            className={styles.btn}
            onClick={() => handleScroll("#Projects")}
          >
            View my work <ArrowDownwardIcon />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Main;
