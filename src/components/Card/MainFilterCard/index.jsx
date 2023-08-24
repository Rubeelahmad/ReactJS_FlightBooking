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
import { useSelector, useDispatch } from "react-redux";
import { showAlertMessage } from "../../../store/features/generalSlice/alertSlice";
import { getAvailableFightsAsync } from "../../../store/features/flights/flightsSlice";
import { cities } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";

const flightTypes = [
  { value: "First", label: "First" },
  { value: "Business", label: "Business" },
  { value: "Economy", label: "Economy" },
  { value: "PremiumEconomy", label: "PremiumEconomy" },
];
const MainFilterCard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const FlightTab = () => {
    const [tripType, setTripType] = useState("OneWay");
    const [flightType, setFlightType] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [airportOriginCode, setAirportOriginCode] = useState("");
    const [airportDestinationCode, setAirportDestinationCode] = useState("");
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [errors, setErrors] = useState({
      tripType: "",
      flightType: "",
      departureDate: "",
      returnDate: "",
      airportOriginCode: "",
      airportDestinationCode: "",
    });

    const validateForm = () => {
      const newErrors = {
        tripType: tripType ? "" : "tripType is required",
        flightType: flightType ? "" : "flightType is required",
        departureDate: departureDate ? "" : "Departure Date is required",
        returnDate:
          returnDate || tripType === "OneWay" ? "" : "Return Date is required",
        airportOriginCode: airportOriginCode ? "" : "this input is required",
        airportDestinationCode: airportDestinationCode
          ? ""
          : "this input is required",
      };
      setErrors(newErrors);
      return Object.values(newErrors).every((error) => error === "");
    };

    const handleSearch = async (event) => {
      if (validateForm()) {
        const params = {
          journeyType: tripType,
          class: flightType,
          departureDate,
          returnDate,
          airportOriginCode,
          airportDestinationCode,
          adults,
          childs: children,
          infants,
        };
        const resultAction = await dispatch(getAvailableFightsAsync(params));
        dispatch(
          showAlertMessage({
            open: true,
            message: resultAction.payload?.status
              ? resultAction.payload?.message
              : resultAction.payload?.message?.ErrorMessage,
            severity: resultAction.payload?.status ? "success" : "error",
          })
        );
        if (resultAction.payload?.status) {
          navigate("/flights");
        }
      }
    };

    const handleTravelerInput = (event) => {
      const inputText = event.target.value;
      const matches = inputText.match(
        /(\d+)\s+Adult?,\s+(\d+)\s+Children?,\s+(\d+)\s+Infants?/i
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
              <p>Select Flight Type</p>
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
              label="Round Trip"
              clickable
              color={tripType === "Return" ? "primary" : "default"}
              onClick={() =>
                handleOptionChange({ target: { value: "Return" } })
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
              onChange={(e) => setAirportOriginCode(e.target.value)}
              error={Boolean(errors.airportOriginCode)}
              helperText={errors.airportOriginCode}
            />
            <TextField
              label="Flying To"
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
              variant="standard"
              placeholder="Sharjah(SHJ)"
              className="borderless-input"
              onChange={(e) => setAirportDestinationCode(e.target.value)}
              error={Boolean(errors.airportDestinationCode)}
              helperText={errors.airportDestinationCode}
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
              inputProps={{
                min: new Date().toISOString().split("T")[0], // Set the minimum date to today
              }}
              error={Boolean(errors.departureDate)}
              helperText={errors.departureDate}
            />
            {tripType === "Return" && (
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
                inputProps={{
                  min: departureDate
                    ? new Date(departureDate).toISOString().split("T")[0]
                    : new Date().toISOString().split("T")[0], // Set the minimum date to today
                }}
                error={Boolean(errors.returnDate)}
                helperText={errors.returnDate}
              />
            )}
            <Divider orientation="vertical" variant="middle" flexItem />
            <TextField
              label="Travelers"
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
              variant="standard"
              placeholder="1 Adult, 0 Child, 0 Infants"
              className="borderless-input"
              onChange={handleTravelerInput}
            />
          </div>

          <Button
            variant="contained"
            endIcon={ICONS.profileIcon}
            onClick={handleSearch}
          >
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
      <CardContent>{activeTab === 0 && <FlightTab />}</CardContent>
    </Card>
  );
};

export default MainFilterCard;
