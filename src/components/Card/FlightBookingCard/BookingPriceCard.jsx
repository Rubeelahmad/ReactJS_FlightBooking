import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

const BookingPriceCard = (props) => {
  const { flightDetail, totalPessenger } = props;

  const { fareTotal } = flightDetail;
  return (
    <CardContent
      sx={{
        borderRadius: "10px",
        marginRight: "30px",
        width: "350px", // Adjust the width as needed
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1976D2",
          padding: "10px",
          borderRadius: "10px 10px 0 0",
          color: "white",
        }}
      >
        <Typography variant="h6">Booking Price</Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "white",
          boxShadow: 5,
          marginTop: "auto", // Align to the bottom
        }}
      >
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          {totalPessenger} x Pessenger
          <strong>${fareTotal.baseFare.Amount}</strong>
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          Tax and Charges <strong>${fareTotal.totalTax.Amount}</strong>
        </Typography>
        <Typography variant="subtitle1">
          <strong>Total</strong> <strong>${fareTotal.total.Amount}</strong>
        </Typography>
      </Box>
    </CardContent>
  );
};

export default BookingPriceCard;
