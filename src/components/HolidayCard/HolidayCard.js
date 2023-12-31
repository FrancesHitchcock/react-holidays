import "./HolidayCard.css";

export default function HolidayCard({ holiday, handleBookHolidayClick }) {
  return (
    <div>
      <h3>{holiday.holiday}</h3>
      <p className="country">
        {holiday.country[0].toUpperCase() + holiday.country.slice(1)}
      </p>
      <p className="duration">{holiday.duration}</p>
      <p className="cost">{holiday.cost}</p>
      <p className="description">{holiday.description}</p>
      <button onClick={() => handleBookHolidayClick(holiday)}>
        Book this holiday
      </button>
      <hr />
    </div>
  );
}
