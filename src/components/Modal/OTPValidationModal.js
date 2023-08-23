import React, { useState } from "react";
import { Modal, Typography, Button, Grid, TextField } from "@mui/material";

const OTPValidationModal = ({ open, onClose, onValidate }) => {
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);

  const handleDigitChange = (index, value) => {
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;
    setOtpDigits(newOtpDigits);
  };

  const handleValidate = () => {
    const otp = otpDigits.join("");
    onValidate(otp);
    onClose();
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
          width: 300,
          padding: 20,
          backgroundColor: "#fff",
          borderRadius: 5,
        }}
      >
        <Typography variant="h6" gutterBottom align="center" style={{}}>
          Verify Code
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: 8, lineHeight: 1.5 }}
        >
          We sent an OTP code on your Email.
        </Typography>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          style={{ marginTop: 16 }}
        >
          {otpDigits.map((digit, index) => (
            <Grid item xs={2} key={index}>
              <TextField
                variant="outlined"
                value={digit}
                onChange={(e) => handleDigitChange(index, e.target.value)}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", lineHeight: 2 },
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
        >
          Validate
        </Button>
      </div>
    </Modal>
  );
};

export default OTPValidationModal;
