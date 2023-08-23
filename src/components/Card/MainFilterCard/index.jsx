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
} from "@mui/material";
import { ICONS } from "../../../assets/icons";
import "./styles.css";

const MainFilterCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const FlightTab = () => {
    const [tripType, setTripType] = useState("oneWay");
    const [flightType, setFlightType] = useState("business");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(1);
    const [infants, setInfants] = useState(0);
    const flightTypes = [{ value: "business", label: "Business" }];

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
          <Select value={flightType} onChange={handleChange}>
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
              color={tripType === "oneWay" ? "primary" : "default"}
              onClick={() =>
                handleOptionChange({ target: { value: "oneWay" } })
              }
              style={{ margin: "4px" }}
            />
            <Chip
              label="Round Trip"
              clickable
              color={tripType === "roundTrip" ? "primary" : "default"}
              onClick={() =>
                handleOptionChange({ target: { value: "roundTrip" } })
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
