import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    width: "100%",
    minHeight: "85vh",
    [theme.breakpoints.down("768")]: {
      minHeight: "45vh",
    },
  },
  text: {
    textAlign: "center",
    "& .name": {
      color: "#ff4d5a",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5rem!important",
    },
    [theme.breakpoints.down("768")]: {
      fontSize: "2rem!important",
    },
    [theme.breakpoints.down("700")]: {
      fontSize: "1.5rem!important",
    },
  },
  textBox: {
    backdropFilter: "blur(2px)",
    padding: "12px",
    borderRadius: "8px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  btn: {
    color: "#ff4d5a !important",
    borderColor: "#ff4d5a !important",
    textTransform: "capitalize!important",
  },
}));
export default useStyles;
