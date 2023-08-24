import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
} from "@mui/material";
import { ICONS } from "../../../assets/icons";

const FlightBookingCard = (props) => {
  const { list, index } = props;
  const [formData, setFormData] = useState(list);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    passportNumber: "",
    expirationDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBirthdayChange = (date) => {
    setFormData((prevData) => ({ ...prevData, birthday: date }));
  };

  const handleExpirationDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, expirationDate: date }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!formData.birthday) {
      newErrors.birthday = "Birthday is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.passportNumber) {
      newErrors.passportNumber = "Passport Number is required";
      isValid = false;
    }

    if (!formData.expirationDate) {
      newErrors.expirationDate = "Expiration Date is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <Card
      sx={{
        boxShadow: 5,
        borderRadius: 5,
        maxWidth: 1000,
        marginLeft: 30,
        marginTop: 3,
        marginBottom: 3,
        padding: 3,
      }}
    >
      <CardContent>
        <Typography variant="h6">
          Traveler {index + 1}: {formData.travelerType}
        </Typography>
        <Grid container spacing={2}>
          {/* Gender */}
          <Grid item xs={12}>
            <Typography variant="subtitle1">Gender</Typography>
            <RadioGroup row>
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                name="gender"
                onChange={handleChange}
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                name="gender"
                onChange={handleChange}
              />
            </RadioGroup>
          </Grid>

          {/* First Name */}
          <Grid item xs={4}>
            <TextField
              label="First Name"
              fullWidth
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />
          </Grid>

          {/* Middle Name */}
          <Grid item xs={4}>
            <TextField
              label="Middle Name"
              fullWidth
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={4}>
            <TextField
              label="Last Name"
              fullWidth
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
            />
          </Grid>

          {/* Birthday */}
          <Grid item xs={6}>
            <TextField
              label="Birth Date"
              type="date"
              placeholder="YYYY-MM-DD"
              className="borderless-input"
              value={formData.birthday}
              onChange={handleBirthdayChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
              inputProps={{
                max: new Date().toISOString().split("T")[0], // Set the minimum date to today
              }}
              error={Boolean(errors.birthday)}
              helperText={errors.birthday}
            />
          </Grid>

          {/* Nationality */}
          <Grid item xs={6}>
            <TextField
              label="Nationality"
              fullWidth
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </Grid>

          {/* Phone Number */}
          <Grid item xs={6}>
            <TextField
              label="Phone Number"
              fullWidth
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={6}>
            <TextField
              label="Email"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <Typography variant="body2">
              Booking confirmation will be sent to this email address.
            </Typography>
          </Grid>

          {/* Passport Detail */}
          <Grid item xs={12}>
            <Typography variant="h6">Passport Detail</Typography>
          </Grid>

          {/* Passport Number */}
          <Grid item xs={6}>
            <TextField
              label="Passport Number"
              fullWidth
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              error={Boolean(errors.passportNumber)}
              helperText={errors.passportNumber}
            />
          </Grid>

          {/* Expiration Date */}
          <Grid item xs={6}>
            <TextField
              label="Expiration Date"
              type="date"
              placeholder="YYYY-MM-DD"
              className="borderless-input"
              value={formData.expirationDate}
              onChange={handleExpirationDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: ICONS.profileIcon,
              }}
              inputProps={{
                min: new Date().toISOString().split("T")[0], // Set the minimum date to today
              }}
              error={Boolean(errors.expirationDate)}
              helperText={errors.expirationDate}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightBookingCard;
