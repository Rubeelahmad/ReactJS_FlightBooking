import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import AuthLayout from "../layouts/AuthLayout";

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
  "& .MuiFormGroup-root": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .MuiFormControlLabel-label": {
    marginLeft: "8px",
  },
});

const CenteredTypography = styled(Typography)({
  textAlign: "center",
  marginBottom: "16px", // Add margin to create space below the image
});

const FlexContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const CenteredImage = styled("img")({
  display: "block",
  margin: "0 auto", // Center the image horizontally
});

const ForgotPasswordLink = styled(Link)({
  textAlign: "right",
  display: "block",
  marginTop: "8px",
});

const Login = () => {
  // Handle login logic

  return (
    <AuthLayout>
      <AuthCard>
        <CardContent>
          <CenteredImage src="profile.png" alt="Profile" />
          <CenteredTypography variant="h6">
            Login to Existing User
          </CenteredTypography>
          <Form noValidate autoComplete="off">
            <TextField label="Email" fullWidth variant="outlined" />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              type="password"
            />
            <FlexContainer>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Login Info"
              />
              <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
            </FlexContainer>
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
            <Typography variant="body2" color="textSecondary">
              Don’t have an account? <Link to="/register">Create account</Link>
            </Typography>
          </Form>
        </CardContent>
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;
