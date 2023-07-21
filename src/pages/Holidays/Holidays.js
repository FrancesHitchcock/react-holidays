import { useState } from "react";
import { Helmet } from "react-helmet-async";

import UserForm from "../../components/UserForm/UserForm";
import HolidayCards from "../../components/HolidayCards/HolidayCards";
import BookedHoliday from "../../components/BookedHoliday/BookedHoliday";

import "./Holidays.css";

import data from "../../data/data.json";

export default function Holidays() {
  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [holidayBooked, setHolidayBooked] = useState(false);
  const [chosenHoliday, setChosenHoliday] = useState({});

  function handleCountrySelect(country) {
    const filteredData = country
      ? data.filter((item) => item.country === country)
      : data;
    setDataToDisplay(filteredData);
    setSelectedCountry(country);
  }

  function handleBookHolidayClick(holiday) {
    setChosenHoliday(holiday);
    setHolidayBooked(true);
  }

  function handleContinueBrowsingClick() {
    setSelectedCountry("");
    setChosenHoliday({});
    setHolidayBooked(false);
    setDataToDisplay(data);
  }

  return (
    <>
      <Helmet>
        <title>React Holidays Holidays Page</title>
        <meta
          name="description"
          content="This is the React Holidays Holidays page"
        />
      </Helmet>
      <main>
        <h2>This is the holidays page</h2>
        {!holidayBooked && (
          <UserForm handleCountrySelect={handleCountrySelect} />
        )}
        {!holidayBooked && (
          <HolidayCards
            dataToDisplay={dataToDisplay}
            selectedCountry={selectedCountry}
            handleBookHolidayClick={handleBookHolidayClick}
          />
        )}
        {holidayBooked && (
          <BookedHoliday
            chosenHoliday={chosenHoliday}
            handleContinueBrowsingClick={handleContinueBrowsingClick}
          />
        )}
      </main>
    </>
  );
}
