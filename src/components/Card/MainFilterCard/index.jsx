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
  Menu,
} from "@mui/material";
import { ICONS } from "../../../assets/icons";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { showAlertMessage } from "../../../store/features/generalSlice/alertSlice";
import {
  getAvailableFightsAsync,
  setTripType,
  setFlightType,
  setDepartureDate,
  setReturnDate,
  setAirportOriginCode,
  setAirportDestinationCode,
  setAdults,
  setChildren,
  setInfants,
} from "../../../store/features/flights/flightsSlice";
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
    const tripType = useSelector((state) => state.flights.tripType);
    const flightType = useSelector((state) => state.flights.flightType);
    const departureDate = useSelector((state) => state.flights.departureDate);
    const returnDate = useSelector((state) => state.flights.returnDate);
    const airportOriginCode = useSelector(
      (state) => state.flights.airportOriginCode
    );
    const airportDestinationCode = useSelector(
      (state) => state.flights.airportDestinationCode
    );
    const adults = useSelector((state) => state.flights.adults);
    const children = useSelector((state) => state.flights.children);
    const infants = useSelector((state) => state.flights.infants);
    const [anchorEl, setAnchorEl] = useState(null);
    const [errors, setErrors] = useState({
      tripType: "",
      flightType: "",
      departureDate: "",
      returnDate: "",
      airportOriginCode: "",
      airportDestinationCode: "",
    });

    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    const handleIncrement = (type) => {
      if (type === "adult") {
        dispatch(setAdults(adults + 1));
      } else if (type === "child") {
        dispatch(setChildren(children + 1));
      } else if (type === "infant") {
        dispatch(setInfants(infants + 1));
      }
    };

    const handleDecrement = (type) => {
      if (type === "adult" && adults > 0) {
        dispatch(setAdults(adults - 1));
      } else if (type === "child" && children > 0) {
        dispatch(setChildren(children - 1));
      } else if (type === "infant" && infants > 0) {
        dispatch(setInfants(infants - 1));
      }
    };

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
              : resultAction.payload?.message?.ErrorMessage ||
                "Result Not Found",
            severity: resultAction.payload?.status ? "success" : "error",
          })
        );
        if (resultAction.payload?.status) {
          navigate("/flights");
        }
      } else {
        dispatch(
          showAlertMessage({
            open: true,
            message: "All fields must be required.",
            severity: "error",
          })
        );
      }
    };

    const handleDepartureDateChange = (event) => {
      dispatch(setDepartureDate(event.target.value));
    };

    const handleReturnDateChange = (event) => {
      dispatch(setReturnDate(event.target.value));
    };

    const handleChange = (event) => {
      dispatch(setFlightType(event.target.value));
    };

    const handleOptionChange = (event) => {
      dispatch(setTripType(event.target.value));
    };
    return (
      <div className="flightData">
        <div className="flightTabContainer">
          <Select
            variant="outlined"
            value={flightType}
            onChange={handleChange}
            className="mainFilterDropdown"
            displayEmpty
            placeholder="Select Flight Type"
          >
            <MenuItem disabled value="">
              <p>Type</p>
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
              value={airportOriginCode}
              className="borderless-input"
              onChange={(e) =>
                dispatch(setAirportOriginCode(e.target.value?.toUpperCase()))
              }
              error={Boolean(errors.airportOriginCode)}
              helperText={errors.airportOriginCode}
            />
            <TextField
              label="Flying To"
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
              value={airportDestinationCode}
              variant="standard"
              placeholder="Sharjah(SHJ)"
              className="borderless-input"
              onChange={(e) =>
                dispatch(
                  setAirportDestinationCode(e.target.value?.toUpperCase())
                )
              }
              error={Boolean(errors.airportDestinationCode)}
              helperText={errors.airportDestinationCode}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <TextField
              label="Departure"
              type="date"
              placeholder="18 Apr 2023"
              className="borderless-input date-input"
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
                className="borderless-input date-input"
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

            <div>
              <TextField
                label="Travelers"
                InputProps={{
                  startAdornment: ICONS.profileIcon,
                }}
                variant="standard"
                value={`${adults} Adult, ${children} Child, ${infants} Infant`}
                placeholder="1 Adult, 0 Child, 0 Infants"
                className="borderless-input"
                onClick={handleOpenMenu}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem>
                  <Typography>Adults</Typography>
                  <div>
                    <Button onClick={() => handleDecrement("adult")}>
                      <RemoveIcon />
                    </Button>
                    {adults}
                    <Button onClick={() => handleIncrement("adult")}>
                      <AddIcon />
                    </Button>
                  </div>
                </MenuItem>
                <MenuItem>
                  <Typography>Children</Typography>
                  <div>
                    <Button onClick={() => handleDecrement("child")}>
                      <RemoveIcon />
                    </Button>
                    {children}
                    <Button onClick={() => handleIncrement("child")}>
                      <AddIcon />
                    </Button>
                  </div>
                </MenuItem>
                <MenuItem>
                  <Typography>Infants</Typography>
                  <div>
                    <Button onClick={() => handleDecrement("infant")}>
                      <RemoveIcon />
                    </Button>
                    {infants}
                    <Button onClick={() => handleIncrement("infant")}>
                      <AddIcon />
                    </Button>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </div>

          <Button
            variant="contained"
            endIcon={ICONS.search}
            onClick={handleSearch}
            className="searchFlightBtn"
          >
            Search
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Card className="mainFilterCard">
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab className="tabSelector" icon={ICONS.flight} label="Flights" />
        <Tab className="tabSelector" icon={ICONS.hotel} label="Hotels" />
        <Tab className="tabSelector" icon={ICONS.car} label="Car Rental" />
      </Tabs>
      <CardContent>{activeTab === 0 && <FlightTab />}</CardContent>
    </Card>
  );
};

export default MainFilterCard;
