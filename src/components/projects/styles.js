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
      width: "11rem",
      zIndex: 1,
      [theme.breakpoints.down("lg")]: {
        borderBottom: "12px solid #ff4d5a",
        top: "3rem",
        left: "1.3rem",
        width: "8rem",
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
  // imageBox: {
  //   width: "21.3rem",
  //   height: "18rem",
  //   "& img": {
  //     height: "100%",
  //     width: "100%",
  //   },
  // },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-end",
    gap: "24px",
  },
  card: {
    overflow: "hidden",
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
    [theme.breakpoints.down("lg")]: {
      width: "45%",
    },
    [theme.breakpoints.down("768")]: {
      width: "100%",
    },
  },
  cardTitle: {
    margin: "16px 8px!important",
    fontSize: "18px!important",
    fontWeight: 600,
    textAlign: "center",
  },
}));
export default useStyles;
