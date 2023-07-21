import "./HolidayCards.css";

import HolidayCard from "../HolidayCard/HolidayCard";

export default function HolidayCards({ data }) {
  const holidayCardsMarkup = data.map((holiday) => (
    <HolidayCard key={holiday.id} holiday={holiday} />
  ));
  return (
    <div className="holiday-cards-container">
      <h3>All our holidays</h3>
      {holidayCardsMarkup}
    </div>
  );
}
