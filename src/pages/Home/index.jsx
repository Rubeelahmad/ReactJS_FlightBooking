import React, { useState } from "react";
import { ICONS } from "../../assets/icons";
import "./styles.css";
import MainFilterCard from "../../components/Card/MainFilterCard";
import FilteredFlightCard from "../../components/Card/FilteredFlightCard";
import { useSelector, useDispatch } from "react-redux";
import { selectedFlightData } from "../../store/features/flights/flightsSlice";
import { useNavigate } from "react-router-dom";
import { authInLocalStorage } from "../../utils/helpers";
import { showAlertMessage } from "../../store/features/generalSlice/alertSlice";

const Home = () => {
  const flights = useSelector((state) => state.flights.flights);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(flights.length / itemsPerPage);

  const displayedFlights = flights.slice(startIndex, endIndex);

  const handleSelectFlight = (flight) => {
    if (!authInLocalStorage.get()) {
      dispatch(
        showAlertMessage({
          open: true,
          message: "First you shuold be login please.",
          severity: "error",
        })
      );
      return;
    }
    dispatch(selectedFlightData(flight));
    navigate("/flightbooking");
  };

  return (
    <div>
      <div className="bannerImage">{ICONS.homePageMainBanner}</div>
      <MainFilterCard />
      {displayedFlights.map((flight, i) => (
        <FilteredFlightCard
          key={i}
          imageSrc={flight.sourceCode}
          name={flight.name}
          price={flight.fareTotal.total?.Amount}
          from={flight.from}
          to={flight.to}
          takeOffTime={flight.takeOffTime}
          landingTime={flight.landingTime}
          takeOffDate={flight.takeOffDate}
          landingDate={flight.landingDate}
          journeyTime={flight.journeyTime}
          stops={flight.stops}
          flight={flight}
          handleSelectFlight={handleSelectFlight}
        />
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`circle ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
