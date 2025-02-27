import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "16px",
    boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
    borderBottom: "1px solid #1a1a1a",
    backgroundColor: "rgba(40, 40, 40, 0.95)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  },
  mail: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  text: {
    display: "flex",
  },
  email: {
    backgroundColor: "#fafafa",
    borderRadius: "16px",
    height: "33px",
    width: "33px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      color: "#333333",
    },
  },
}));
export default useStyles;
