import "./HolidayCards.css";

import HolidayCard from "../HolidayCard/HolidayCard";

export default function HolidayCards({
  dataToDisplay,
  selectedCountry,
  handleBookHolidayClick,
}) {
  const holidayCardsMarkup = dataToDisplay.map((holiday) => (
    <HolidayCard
      key={holiday.id}
      holiday={holiday}
      handleBookHolidayClick={handleBookHolidayClick}
    />
  ));

  const title = selectedCountry
    ? `Holidays in ${
        selectedCountry[0].toUpperCase() + selectedCountry.slice(1)
      }`
    : "All our holidays";
  return (
    <div className="holiday-cards-container">
      <h3>{title}</h3>
      {holidayCardsMarkup}
    </div>
  );
}
