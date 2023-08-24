import React, { useState } from "react";
import { Modal, Typography, Button, Grid, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { otpValidateUserAsync } from "../../store/features/authentication/authSlice";
import { showAlertMessage } from "../../store/features/generalSlice/alertSlice";
import { useNavigate } from "react-router-dom";

const OTPValidationModal = ({ open, onClose, email }) => {
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDigitChange = (index, value) => {
    console.log("input", value);
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;
    setOtpDigits(newOtpDigits);
    setError("");
  };

  const handleValidate = async () => {
    const otpCode = otpDigits.join("");
    if (otpCode.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    const resultAction = await dispatch(otpValidateUserAsync(otpCode));
    dispatch(
      showAlertMessage({
        open: true,
        message: resultAction.payload.message,
        severity: resultAction.payload.status ? "success" : "error",
      })
    );
    if (resultAction.payload.status) {
      navigate("/");
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 600, // Increase the width of the Modal
          padding: 40, // Increase the padding of the Modal content
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Verify Code
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ marginTop: 20, lineHeight: 1.5 }}
        >
          We sent an OTP code on your Email.
        </Typography>
        <Typography variant="h6" align="center">
          {email}
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ marginTop: 20 }}
        >
          {otpDigits.map((digit, index) => (
            <Grid item xs={2} key={index}>
              <TextField
                variant="outlined"
                value={digit}
                onChange={(e) => handleDigitChange(index, e.target.value)}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", lineHeight: 2, fontSize: 24 },
                }}
              />
            </Grid>
          ))}
        </Grid>
        {error && (
          <Typography
            style={{ marginTop: 20, lineHeight: 1.5 }}
            variant="body2"
            color="error"
            align="left"
          >
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 30 }}
          onClick={handleValidate}
        >
          Validate
        </Button>
      </div>
    </Modal>
  );
};

export default OTPValidationModal;
