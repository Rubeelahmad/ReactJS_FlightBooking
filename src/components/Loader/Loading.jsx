import React from "react";
import { CircularProgress, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Close as CloseIcon } from "@mui/icons-material";

const LoadingContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9999,
  color: "var(--text-white)",
});

const Loading = ({ message = "Loading...", onClose }) => {
  return (
    <LoadingContainer>
      <CircularProgress size={80} />
      <Typography variant="body1" color="textSecondary" mt={2}>
        {message}
      </Typography>
      {onClose && (
        <IconButton
          aria-label="close"
          color="inherit"
          onClick={onClose}
          style={{ position: "absolute", top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </LoadingContainer>
  );
};

export default Loading;
