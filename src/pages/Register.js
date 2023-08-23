import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../store/features/authentication/authSlice";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import { showAlertMessage } from "../store/features/generalSlice/alertSlice";

const AuthCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #ccc",
  borderRadius: theme.spacing(1),
  backgroundColor: "#fff",
  maxWidth: 400,
  width: "100%",
}));

const Form = styled("form")({
  marginTop: "16px",
  "& .MuiTextField-root": {
    marginBottom: "16px",
  },
  "& .MuiButton-root": {
    marginTop: "16px",
  },
  "& .MuiFormControlLabel-root": {
    marginTop: "8px",
  },
});

const CenteredTypography = styled(Typography)({
  textAlign: "center",
});

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: "",
  });
  const [alertMsg, setAlertMsg] = useState({
    open: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors = {
      fullName: formData.fullName ? "" : "Full Name is required",
      email: validateEmail(formData.email) ? "" : "Invalid email format",
      phone: formData.phone ? "" : "Phone Number is required",
      password:
        formData.password.length >= 8
          ? ""
          : "Password must be at least 8 characters",
      confirmPassword:
        formData.confirmPassword === formData.password
          ? ""
          : "Passwords do not match",
      agreeToTerms: formData.agreeToTerms ? "" : "You must agree to the terms",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  // Handle registration logic

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const actionResult = await dispatch(registerUserAsync(formData));
        dispatch(
          showAlertMessage({
            open: true,
            message: actionResult.payload.message,
            severity: actionResult.payload.status ? "success" : "error",
          })
        );

        if (actionResult.payload.status) {
          navigate("/login");
        }
        // Handle successful registration or navigate to another page
      } catch (error) {
        console.error("Registration Error:", error);
        // Handle registration error
      }
    }
  };

  return (
    <AuthCard>
      <CardContent>
        <CenteredTypography variant="h6" color={"var(--primary-color)"}>
          Register for New User
        </CenteredTypography>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            fullWidth
            variant="outlined"
            value={formData.fullName}
            onChange={handleInputChange}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
            name="fullName"
          />
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            error={Boolean(errors.email)}
            helperText={errors.email}
            name="email"
          />
          <TextField
            label="Phone Number"
            fullWidth
            variant="outlined"
            value={formData.phone}
            onChange={handleInputChange}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            name="phone"
          />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            error={Boolean(errors.password)}
            helperText={errors.password}
            name="password"
          />
          <TextField
            label="Confirm Password"
            fullWidth
            variant="outlined"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            type="password"
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            name="confirmPassword"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
              />
            }
            label="I agree to the terms of service and privacy policy"
            error={Boolean(errors.agreeToTerms)}
            helperText={errors.agreeToTerms}
          />

          <Button variant="contained" color="primary" fullWidth type="submit">
            Register
          </Button>
        </Form>
        <Typography variant="body2" color="textSecondary">
          Already have an account? <Link to="/login">Login here.</Link>
        </Typography>
      </CardContent>
    </AuthCard>
  );
};

export default Register;
