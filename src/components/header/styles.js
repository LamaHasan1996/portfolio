import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
    borderBottom: "1px solid #1a1a1a",
    backgroundColor: "rgba(40, 40, 40, 0.95)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "24px",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)",
    zIndex: 100,
    position: "sticky",
    top: 0,
    [theme.breakpoints.down("600")]: {
      justifyContent: "center",
    },
  },
  link: {
    color: "#fff!important",
    textDecoration: "none!important",
    cursor: "pointer",
  },
  activeLink: {
    color: "#ff4d5a!important",
  },
}));
export default useStyles;
