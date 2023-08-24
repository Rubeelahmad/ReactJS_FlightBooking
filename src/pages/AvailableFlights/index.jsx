import React, { useState, useEffect } from "react";
import { ICONS } from "../../assets/icons";
import "./styles.css";
import MainFilterCard from "../../components/Card/MainFilterCard";
import FilteredFlightCard from "../../components/Card/FilteredFlightCard";
import { useSelector, useDispatch } from "react-redux";
import { selectedFlightData } from "../../store/features/flights/flightsSlice";
import { useNavigate } from "react-router-dom";
import { authInLocalStorage, formatMinutes } from "../../utils/helpers";
import { showAlertMessage } from "../../store/features/generalSlice/alertSlice";
import moment from "moment";

const AvailabelFlights = () => {
  const flights = useSelector((state) => state.flights.flights);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filghtLists, setFlightLists] = useState([]);

  useEffect(() => {
    if (flights && flights.length > 0) {
      const data = flights.reduce((arr, obj) => {
        const dataObj = { ...obj };
        const detination = dataObj.originDestinationOptions[0];
        dataObj["price"] = dataObj.fareTotal.total?.Amount;
        dataObj["stops"] = detination.TotalStops || 0;
        dataObj["name"] = detination.tourSegments[0].AirlineName;
        dataObj["from"] = detination.tourSegments[0].DepartureAirportCode;
        dataObj["to"] = detination.tourSegments[0].ArrivalAirportCode;
        dataObj["takeOffDate"] = moment(
          detination.tourSegments[0].DepartureDateTime
        ).format("DD MMM");
        dataObj["takeOffTime"] = moment(
          detination.tourSegments[0].DepartureDateTime
        ).format("HH:mm");
        dataObj["landingDate"] = moment(
          detination.tourSegments[0].ArrivalDateTime
        ).format("DD MMM");
        dataObj["landingTime"] = moment(
          detination.tourSegments[0].ArrivalDateTime
        ).format("HH:mm");
        dataObj["journeyTime"] = formatMinutes(
          detination.tourSegments[0].JourneyDuration
        );

        if (dataObj) {
          arr.push(dataObj);
        }
        return arr;
      }, []);

      setFlightLists(data);
    } else {
      navigate("/");
    }
  }, [flights]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(filghtLists.length / itemsPerPage);

  const displayedFlights = filghtLists.slice(startIndex, endIndex);

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

export default AvailabelFlights;
