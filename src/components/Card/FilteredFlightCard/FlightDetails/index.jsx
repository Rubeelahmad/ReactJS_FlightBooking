import React, { useState } from "react";
import { Avatar, Tab, Tabs, Typography } from "@mui/material";
import { ICONS } from "../../../../assets/icons";
import "./styles.css";

const FlightDetails = () => {
  const [tabValue, setTabValue] = useState(0); // State to manage active tab

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const flights = [
    {
      stopDate: "2023-08-25",
      stopDay: "Wednesday",
      imageSrc: "path-to-image1.jpg",
      departureTime: "08:00 AM",
      arrivalTime: "10:00 AM",
      from: "LHE",
      to: "DXB",
      fromCityName: "Lahore",
      toCityName: "Dubai",
      travelTime: "2h",
      flightName: "Example Airlines",
      fromAirport: "Lahore International Airport",
      toAirport: "Dubai International Airport",
      flightNo: "E123",
      cabin: "Economy",
      fareType: "One Way",
    },
    {
      stopDate: "2023-08-25",
      stopDay: "Wednesday",
      imageSrc: "path-to-image2.jpg",
      departureTime: "11:00 AM",
      arrivalTime: "03:00 PM",
      from: "DXB",
      to: "LHE",
      fromCityName: "Dubai",
      toCityName: "Lahore",
      travelTime: "4h",
      flightName: "Another Airlines",
      fromAirport: "Dubai International Airport",
      toAirport: "Lahore International Airport",
      flightNo: "A456",
      cabin: "Business",
      fareType: "Round Trip",
    },
  ];

  const FlightStopsDetails = (props) => {
    const {
      stopDate,
      stopDay,
      imageSrc,
      departureTime,
      arrivalTime,
      from,
      to,
      travelTime,
      flightName,
      fromAirport,
      toAirport,
      flightNo,
      cabin,
      fareType,
      fromCityName,
      toCityName,
    } = props;
    return (
      <div className="flightStopsDetails-container">
        <div className="flightStopsDetailsTop">
          {ICONS.calendar}
          <div className="flightStopsDetailsTop-title">
            <span>{stopDate}</span>
            <span>{stopDay}</span>
          </div>
        </div>
        <div className="flightStopsDetailsBody">
          <div className="flightStopsDetailsBody-left">
            <Avatar alt="flight" src={imageSrc} />
            {ICONS.flightJourneyHorizontal}
            <div className="flightStopsDetailsBody-leftJourney">
              <div>
                <span>
                  <b>{departureTime}</b>
                </span>
                <span>
                  <b>{fromCityName}</b>
                </span>
                <span>{fromAirport}</span>
              </div>
              <div>
                <h4>{flightName}</h4>
                <span>Travel Time: {travelTime}</span>
              </div>
              <div>
                <span>
                  <b>{arrivalTime}</b>
                </span>
                <span>
                  <b>{toCityName}</b>
                </span>
                <span>{toAirport}</span>
              </div>
            </div>
          </div>
          <div className="flightStopsDetailsBody-right">
            <h3>Flight Details</h3>
            <p>
              Operated By: <b>{flightName}</b>
            </p>
            <p>
              Flight No: <b>{flightNo}</b>
            </p>
            <p>
              Cabin: <b>{cabin}</b>
            </p>
            <p>
              Fare Type: <b>{fareType}</b>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="collapsibleDetails">
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab className="tabSelector" label="Lahore (LHE) - Dubai (DXB)" />
          <Tab className="tabSelector" label="Dubai (DXB) - Lahore (LHE)" />
        </Tabs>
        <div className="collapsibleTab">
          {tabValue === 0 ? (
            <>
              {flights.map((flight) => (
                <FlightStopsDetails
                  stopDate={flight.stopDate}
                  stopDay={flight.stopDay}
                  imageSrc={flight.imageSrc}
                  flightName={flight.flightName}
                  flightNo={flight.flightNo}
                  arrivalTime={flight.arrivalTime}
                  cabin={flight.cabin}
                  departureTime={flight.departureTime}
                  fareType={flight.fareType}
                  from={flight.from}
                  to={flight.to}
                  fromAirport={flight.fromAirport}
                  toAirport={flight.toAirport}
                  travelTime={flight.travelTime}
                  toCityName={flight.toCityName}
                  fromCityName={flight.fromCityName}
                />
              ))}
            </>
          ) : (
            <Typography variant="h6" color="var(--primary-color)">
              DXB - LHE
            </Typography>
          )}
          {/* Place content for the selected tab */}
        </div>
      </div>
    </>
  );
};

export default FlightDetails; // This should be at the end of the file
