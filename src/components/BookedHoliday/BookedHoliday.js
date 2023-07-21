import "./BookedHoliday.css";

export default function BookedHoliday({ chosenHoliday }) {
  return (
    <main>
      <h2>Your holiday has been booked!</h2>
      <p>
        You are going to{" "}
        {chosenHoliday.country[0].toUpperCase() +
          chosenHoliday.country.slice(1)}{" "}
        on the {chosenHoliday.holiday} holiday.
      </p>
    </main>
  );
}
