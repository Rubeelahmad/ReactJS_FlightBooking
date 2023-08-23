import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { loginInUserAsync } from "../../store/features/authentication/authSlice";
import { Link } from "react-router-dom";
import OTPValidationModal from "../../components/Modal/OTPValidationModal";
import { showAlertMessage } from "../../store/features/generalSlice/alertSlice";
import { validateEmail } from "../../utils/helpers";
import { ICONS } from "../../assets/icons";

const FormContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('../../assets/icons/authBg.svg')",
}));

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

const ForgotPasswordLink = styled(Link)({
  textAlign: "right",
  display: "block",
  marginTop: "8px",
});

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [otpModalOpen, setOTPModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password || !password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (!Object.keys(newErrors).length) {
      // Dispatch the login action with email and password
      const resultAction = await dispatch(
        loginInUserAsync({ email, password })
      );
      setOTPModalOpen(resultAction.payload?.status);
      dispatch(
        showAlertMessage({
          open: true,
          message: resultAction.payload.message,
          severity: resultAction.payload.status ? "success" : "error",
        })
      );
      console.log("resultAction", resultAction);
    }
  };

  return (
    <FormContainer>
      <AuthCard>
        <CardContent>
          <center>{ICONS.loginProfile}</center>
          <CenteredTypography variant="h6" color={"var(--primary-color)"}>
            Login to Existing User
          </CenteredTypography>
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <FlexContainer>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Login Info"
              />
              <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
            </FlexContainer>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
            <Typography variant="body2" color="textSecondary">
              Don’t have an account? <Link to="/register">Create account</Link>
            </Typography>
          </Form>
        </CardContent>
        {otpModalOpen && (
          <OTPValidationModal
            open={otpModalOpen}
            onClose={() => setOTPModalOpen(false)}
            onValidate={(val) => console.log("otp", val)}
          />
        )}
      </AuthCard>
    </FormContainer>
  );
};

export default Login;
