import { Box, Container, Typography, TextField, Button } from "@mui/material";
import useStyles from "./styles";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";

const Contact = () => {
  const styles = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Invalid email address.";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true); // Start spinner

      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSnackbar({
              open: true,
              message: "Your message has been sent successfully!",
              severity: "success",
            });
            setFormData({ name: "", email: "", message: "" });
            setLoading(false); // Stop spinner
          },
          (err) => {
            console.log("FAILED...", err);
            setSnackbar({
              open: true,
              message: "Failed to send message. Please try again.",
              severity: "error",
            });
            setLoading(false); // Stop spinner even on failure
          }
        );
    }
  };

  return (
    <Container maxWidth="xl" className={styles.root} id="Contact">
      <Box className={styles.titleBox}>
        <Typography className={styles.title} variant="h3">
          Contact
        </Typography>
      </Box>
      <Box className={styles.container}>
        <Typography className={styles.text}>
          Have a question or want to work together? Leave your details and I'll
          get back to you as soon as possible.
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="filled"
            className={styles.input}
            required
            error={Boolean(errors.name)}
            helperText={errors.name}
            InputProps={{
              disableUnderline: true,
            }}
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="filled"
            className={styles.input}
            required
            error={Boolean(errors.email)}
            helperText={errors.email}
            InputProps={{
              disableUnderline: true,
            }}
          />

          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="filled"
            className={styles.input}
            multiline
            rows={4}
            required
            error={Boolean(errors.message)}
            helperText={errors.message}
            InputProps={{
              disableUnderline: true,
            }}
          />

          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button type="submit" size="small" className={styles.submitButton}>
              SUBMIT
              {loading ? (
                <CircularProgress
                  size={20}
                  style={{ color: "#ff4d5a", marginLeft: "8px" }}
                />
              ) : null}
            </Button>
          </Box>
        </form>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Contact;
