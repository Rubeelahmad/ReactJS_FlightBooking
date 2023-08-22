import React from "react";
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
import { Link } from "react-router-dom";

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
  // Handle registration logic

  return (
    <AuthCard>
      <CardContent>
        <CenteredTypography variant="h6">
          Register for New User
        </CenteredTypography>
        <Form noValidate autoComplete="off">
          <TextField label="Full Name" fullWidth variant="outlined" />
          <TextField label="Email" fullWidth variant="outlined" />
          <TextField label="Phone Number" fullWidth variant="outlined" />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
          />
          <TextField
            label="Confirm Password"
            fullWidth
            variant="outlined"
            type="password"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the terms of service and privacy policy"
          />
          <Button variant="contained" color="primary" fullWidth>
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
