import React from "react";
import { Snackbar, Alert } from "@mui/material";

const AlertComponent = ({ open, onClose, severity, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom", // Position at the top
        horizontal: "right", // Position at the right
      }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: "400px", // Set a larger width
          textAlign: "center",
          fontSize: "16px", // Increase the font size
          padding: "20px", // Increase the padding for more space
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
