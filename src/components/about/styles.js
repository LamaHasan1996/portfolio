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
      left: "2.3rem",
      width: "8rem",
      zIndex: 1,
      [theme.breakpoints.down("lg")]: {
        borderBottom: "12px solid #ff4d5a",
        top: "3rem",
        left: "1.5rem",
        width: "6rem",
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
  contentBox: {
    display: "flex",
    gap: "40px",
    [theme.breakpoints.down("1440")]: {
      flexDirection: "column",
      gap: "20px",
    },
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
    alignContent: "flex-end",
    gap: "20px",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "23%",
    border: "double 3px transparent",
    borderImageSlice: "1",
    borderWidth: "3px",
    backgroundImage:
      "linear-gradient(#1a1a1a, #1a1a1a), radial-gradient(circle at top left, #51a2e9, #ff4d5a)",
    borderRadius: "10px",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    [theme.breakpoints.down("768")]: {
      width: "45%",
    },
  },
  img: {
    height: "60px",
    width: "60px",
    marginTop: "16px",
    marginBottom: "16px",
    "& img": {
      height: "100%",
      width: "100%",
    },
    "& .MuiTypography-root": {
      marginBottom: "16px",
    },
  },
  logo: {
    height: "24rem",
    marginBottom: "4rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: "17px",
    textAlign: "center",
    lineHeight: "27px",
  },
  info: {
    textAlign: "center",
    fontSize: "16px!important",
    lineHeight: "29px!important",
    paddingTop: "16px",
  },
  motionBox: {
    overflow: "hidden",
    width: "50%",
    [theme.breakpoints.down("1440")]: {
      width: "100%",
    },
  },
}));
export default useStyles;
