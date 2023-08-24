import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FlightBookingCard from "../../components/Card/FlightBookingCard";
import { generateUniqueId } from "../../utils/helpers";
import { Button } from "@mui/material";
import BookingPriceCard from "../../components/Card/FlightBookingCard/BookingPriceCard";
import BaggageDimentionCard from "../../components/Card/FlightBookingCard/BaggageDimensionCard";
import { showAlertMessage } from "../../store/features/generalSlice/alertSlice";

const FlightBooking = () => {
  const selectedFlight = useSelector((state) => state.flights.selectedFlight);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formDataList, setFormDataList] = useState([]);
  useEffect(() => {
    if (!selectedFlight) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (selectedFlight) {
      const dataList = selectedFlight.passengers.reduce(
        (arr, { Type, Quantity }) => {
          for (let i = 0; i < Quantity; i++) {
            arr.push({
              id: generateUniqueId(),
              travelerType: Type,
              gender: "",
              firstName: "",
              middleName: "",
              lastName: "",
              birthday: null,
              nationality: "",
              phoneNumber: "",
              email: "",
              passportNumber: "",
              expirationDate: null,
            });
          }
          return arr;
        },
        []
      );

      setFormDataList(dataList);
    }
  }, [selectedFlight]);

  if (selectedFlight) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            {formDataList &&
              formDataList.length > 0 &&
              formDataList.map((list, index) => (
                <FlightBookingCard list={list} key={index} index={index} />
              ))}
          </div>
          <div>
            <BookingPriceCard
              flightDetail={{ ...selectedFlight }}
              totalPessenger={formDataList.length}
            />
            <BaggageDimentionCard />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginLeft: "240px",
            margin: "40px",
          }}
        >
          <Link to="/flights">
            <Button
              variant="outlined"
              sx={{ borderRadius: "20px", fontSize: "16px" }}
            >
              Back
            </Button>
          </Link>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(
                showAlertMessage({
                  open: true,
                  message: "Please fill correct info & must fill all field",
                  severity: "error",
                })
              );
            }}
            sx={{ borderRadius: "20px", fontSize: "16px" }}
          >
            Next
          </Button>
        </div>
      </>
    );
  }
};

export default FlightBooking;
