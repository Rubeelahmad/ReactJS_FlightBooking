import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextField,
  Divider,
  Chip,
  Button,
  Typography,
} from "@mui/material";
import { ICONS } from "../../../assets/icons";
import "./styles.css";

const MainFilterCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const FlightTab = () => {
    const [tripType, setTripType] = useState("");
    const [flightType, setFlightType] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const flightTypes = [
      { value: "First", label: "First" },
      { value: "Business", label: "Business" },
      { value: "Economy", label: "Economy" },
      { value: "PremiumEconomy", label: "PremiumEconomy" },
    ];

    const handleTravelerInput = (event) => {
      const inputText = event.target.value;
      const matches = inputText.match(
        /(\d+)\s+Adults?,\s+(\d+)\s+Children?,\s+(\d+)\s+Infants?/i
      );

      if (matches) {
        const [, adultsCount, childrenCount, infantsCount] =
          matches.map(Number);
        setAdults(adultsCount);
        setChildren(childrenCount);
        setInfants(infantsCount);
      }
    };

    const handleDepartureDateChange = (event) => {
      setDepartureDate(event.target.value);
    };

    const handleReturnDateChange = (event) => {
      setReturnDate(event.target.value);
    };

    const handleChange = (event) => {
      setFlightType(event.target.value);
    };

    const handleOptionChange = (event) => {
      setTripType(event.target.value);
    };
    return (
      <>
        <div className="flightTabContainer">
          <Select
            value={flightType}
            onChange={handleChange}
            style={{ minWidth: 150 }}
            displayEmpty
            placeholder="Select Flight Type"
          >
            <MenuItem disabled value="">
              <em>Select Flight Type</em>
            </MenuItem>
            {flightTypes.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <div>
            <Chip
              label="One Way"
              clickable
              color={tripType === "OneWay" ? "primary" : "default"}
              onClick={() =>
                handleOptionChange({ target: { value: "OneWay" } })
              }
              style={{ margin: "4px" }}
            />
            <Chip
              label="Return Trip"
              clickable
              color={tripType === "Return" ? "primary" : "default"}
              onClick={() =>
                handleOptionChange({ target: { value: "Return" } })
              }
              style={{ margin: "4px" }}
            />
            <Chip
              label="Circle Trip"
              clickable
              color={tripType === "Circle" ? "primary" : "default"}
              onClick={() =>
                handleOptionChange({ target: { value: "Circle" } })
              }
              style={{ margin: "4px" }}
            />
          </div>
        </div>
        <div className="flight-filterContainer">
          <div className="flight-filters">
            <TextField
              label="Flying From"
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
              variant="standard"
              placeholder="Dubai(DXB)"
              className="borderless-input"
            />
            <TextField
              label="Flying To"
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
              variant="standard"
              placeholder="Sharjah(SHJ)"
              className="borderless-input"
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <TextField
              label="Departure"
              type="date"
              placeholder="18 Apr 2023"
              className="borderless-input"
              value={departureDate}
              onChange={handleDepartureDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
            />
            <TextField
              label="Return"
              type="date"
              placeholder="06 May 2023"
              className="borderless-input"
              value={returnDate}
              onChange={handleReturnDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <TextField
              label="Travelers"
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
              variant="standard"
              placeholder="2 Adults, 1 Child, 0 Infants"
              className="borderless-input"
              onChange={handleTravelerInput}
            />
          </div>

          <Button variant="contained" endIcon={ICONS.profileIcon}>
            Search
          </Button>
        </div>
      </>
    );
  };

  return (
    <Card className="mainFilterCard">
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Flights" />
        <Tab label="Hotels" />
        <Tab label="Car Rental" />
      </Tabs>
      <CardContent>
        {activeTab === 0 && <FlightTab />}
        {activeTab === 1 && <div>Content for Hotels</div>}
        {activeTab === 2 && <div>Content for Car Rental</div>}
      </CardContent>
    </Card>
  );
};

export default MainFilterCard;
