import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    position: "relative",
    backgroundColor: "#030304",
    paddingTop: "32px",
    paddingBottom: "32px",
  },
  titleBox: {
    position: "relative",
    "&:before": {
      position: "absolute",
      content: '""',
      borderBottom: "18px solid #ff4d5a",
      display: "block",
      margin: "0 auto",
      position: "relative",
      top: "3.3rem",
      left: "1.7rem",
      width: "9rem",
      zIndex: 1,
      [theme.breakpoints.down("lg")]: {
        borderBottom: "12px solid #ff4d5a",
        top: "3rem",
        left: "1.3rem",
        width: "7rem",
      },
    },
  },
  title: {
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5rem!important",
    },
  },
  text: {
    color: "#fff",
    fontSize: "18px !important",
    maxWidth: "470px",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    maxWidth: "600px",
    paddingTop: "16px",
  },
  input: {
    borderRadius: "8px",
    overflow: "hidden",
    "& .MuiInputBase-input": {
      color: "#fff",
      borderRadius: "8px",
    },
    "& .MuiInputLabel-root": {
      color: "#aaa!important",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "#2c2c2c",
      border: "1px solid #444",
      borderRadius: "8px",
    },
    "& .MuiFilledInput-root:hover": {
      backgroundColor: "#333",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "#2c2c2c",
      borderColor: "#ff3f81",
    },
  },
  submitButton: {
    color: "#fff!important",
    fontWeight: "bold!important",
    textTransform: "uppercase!important",
    position: "relative",
    backgroundColor: "inherit!important",
    zIndex: 2,
    transition: "color 0.3s ease 0.1s",
    width: "fit-content",
    "&:before": {
      top: "1rem",
      left: "4.3rem",
      width: "5rem",
      margin: "0 auto",
      content: '""',
      display: "block",
      zIndex: 1,
      position: "relative",
      borderBottom: "3px solid #ff4d5a",
      transition: "top 0.3s ease 0.1s",
      [theme.breakpoints.down("768")]: {
        left: "3.5rem",
        width: "4rem",
      },
    },
  },
  successMessage: {
    color: "green",
    marginTop: 10,
  },
}));
export default useStyles;
