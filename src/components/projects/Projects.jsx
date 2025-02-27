import { Box, Container, Typography } from "@mui/material";
import useStyles from "./styles";
import { project } from "./data";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
    },
  },
};

const Projects = () => {
  const styles = useStyles();

  return (
    <Container maxWidth="xl" className={styles.root} id="Projects">
      <Box className={styles.titleBox}>
        <Typography className={styles.title} variant="h3">
          Projects
        </Typography>
      </Box>
      <Box className={styles.gridContainer}>
        {project?.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.2 }} // Trigger when 20% visible
          >
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "300px",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                aria-label={item.title}
              />
              <Typography className={styles.cardTitle}>{item.title}</Typography>
            </a>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
