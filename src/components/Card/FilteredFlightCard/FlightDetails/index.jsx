import React, { useState } from "react";
import "./styles.css";
import { Tab, Tabs, Typography } from "@mui/material";

const FlightDetails = () => {
  const [tabValue, setTabValue] = useState(0); // State to manage active tab

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      {tabValue > 0 && (
        <div className="collapsibleDetails">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="LHE - DXB" />
            <Tab label="DXB - LHE" />
          </Tabs>
          <div className="collapsibleTab">
            {tabValue === 1 ? (
              <Typography variant="h6" color="var(--primary-color)">
                LHE - DXB
              </Typography>
            ) : (
              <Typography variant="h6" color="var(--primary-color)">
                DXB - LHE
              </Typography>
            )}
            {/* Place content for the selected tab */}
          </div>
        </div>
      )}
    </>
  );
};

export default FlightDetails;
