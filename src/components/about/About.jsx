import { Box, Typography, Container } from "@mui/material";
import { data, myInfo } from "./data";
import useStyles from "./styles";
import Logo from "./image";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      delay: 0.2,
      duration: 0.6,
    },
  },
};

const About = () => {
  const theme = useTheme();
  const styles = useStyles();
  console.log(theme, "themeeee");

  return (
    <Container maxWidth="xl" className={styles.root} id="About">
      <Box className={styles.titleBox}>
        <Typography className={styles.title} variant="h3">
          About
        </Typography>
      </Box>
      <Box className={styles.contentBox}>
        <motion.div
          className={styles.motionBox}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% visible
        >
          <Box
            className={styles.logo}
            display={"flex"}
            flexDirection={"column"}
          >
            <Logo />
            <Typography className={styles.info}>{myInfo}</Typography>
          </Box>
        </motion.div>
        <motion.div
          className={styles.motionBox}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Triggers animation when 20% visible
        >
          <Box className={styles.gridContainer}>
            {data?.map((item) => (
              <Box className={styles.card}>
                <Box className={styles.img}>
                  <img src={item.image} alt={item.label} />
                </Box>
                <Typography className={styles.text}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
