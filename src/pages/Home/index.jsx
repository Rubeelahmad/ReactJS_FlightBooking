import React from "react";
import { ICONS } from "../../assets/icons";
import "./styles.css";
import MainFilterCard from "../../components/Card/MainFilterCard";
import FilteredFlightCard from "../../components/Card/FilteredFlightCard";

const Home = () => {
  const flights = [
    {
      imageSrc: "path/to/image1.jpg",
      name: "Flight 123",
      price: 250,
      from: "New York",
      to: "Los Angeles",
      takeOffTime: "08:00 AM",
      landingTime: "11:30 AM",
      takeOffDate: "2023-09-01",
      landingDate: "2023-09-01",
      journeyTime: "3h 30m",
      stops: 0,
    },
    {
      imageSrc: "path/to/image2.jpg",
      name: "Flight 456",
      price: 180,
      from: "London",
      to: "Paris",
      takeOffTime: "10:30 AM",
      landingTime: "01:00 PM",
      takeOffDate: "2023-09-02",
      landingDate: "2023-09-02",
      journeyTime: "2h 30m",
      stops: 1,
    },
  ];

  return (
    <div>
      <div className="bannerImage">{ICONS.homePageMainBanner}</div>
      <MainFilterCard />
      {flights.map((flight, i) => (
        <FilteredFlightCard
          imageSrc={flight.imageSrc}
          name={flight.name}
          price={flight.price}
          from={flight.from}
          to={flight.to}
          takeOffTime={flight.takeOffTime}
          landingTime={flight.landingTime}
          takeOffDate={flight.takeOffDate}
          landingDate={flight.landingDate}
          journeyTime={flight.journeyTime}
          stops={flight.stops}
        />
      ))}
    </div>
  );
};

export default Home;
