import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

const BaggageDimentionCard = (props) => {
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
        <Typography variant="h6">Baggage Dimension</Typography>
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
          carry-on-bag
          <strong>55x20x40cm, 8kg</strong>
        </Typography>
      </Box>
    </CardContent>
  );
};

export default BaggageDimentionCard;
