import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";

const Footer = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box
        className={styles.mail}
        onClick={() => window.open(`mailto:${"lamahasan1996@gmail.com"}`)}
      >
        <Box className={styles.email}>
          <EmailIcon />
        </Box>
      </Box>

      <Typography className={styles.text}>
        <CopyrightIcon /> Lama Hasan 2025
      </Typography>
    </Box>
  );
};

export default Footer;
