import React from "react";
import "./styles.css";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { ICONS } from "../../assets/icons";

const ContactUsFooter = () => {
  return (
    <div className="contactUsFooterWrapper">
      <div className="contactUsFooterWrapper">
        <div className="contactUsFooterWrapperLeft">
          <h3>Have any question? Let us help you!</h3>
          <span>Lörem ipsum krorat ekosiv och sende anim</span>
        </div>
        <FormControl variant="outlined">
          <Input
            startAdornment={
              <InputAdornment position="start">{ICONS.send}</InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
};

export default ContactUsFooter;
