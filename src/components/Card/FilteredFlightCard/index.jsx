import React from "react";
import "./styles.css";
import { Avatar, Button, Card } from "@mui/material";
import { ICONS } from "../../../assets/icons";

const FilteredFlightCard = (props) => {
  const {
    imageSrc,
    name,
    price,
    from,
    to,
    takeOffTime,
    landingTime,
    takeOffDate,
    landingDate,
    journeyTime,
    stops,
  } = props;
  return (
    <Card className="filteredFlightContainer">
      <div className="filteredFlightCard">
        <div className="flight-brand">
          <Avatar alt="flight" src={imageSrc} />
          <h4>{name}</h4>
        </div>
        <h2 className="flightPrice">${price}</h2>
      </div>
      <div className="flightContainer-middle">
        <div className="flight-data">
          <div className="flightEst">
            <h4>{from}</h4>
            <span>{takeOffDate}</span>
            <span>{takeOffTime}</span>
          </div>
          <div className="flightJourney">
            {ICONS.flightJourney}
            <div className="flightJourney-Details">
              <span>{journeyTime}</span>
              <span>({stops} stop)</span>
            </div>
          </div>
          <div className="flightEst">
            <h4>{to}</h4>
            <span>{landingDate}</span>
            <span>{landingTime}</span>
          </div>
        </div>

        <Button variant="contained">Select Flight</Button>
      </div>
    </Card>
  );
};

export default FilteredFlightCard;
