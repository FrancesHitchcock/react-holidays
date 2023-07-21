import "./UserForm.css";

export default function UserForm({ handleCountrySelect }) {
  return (
    <form>
      <label htmlFor="country">Choose your holiday destination: </label>
      <select
        id="country"
        name="country"
        onChange={(e) => handleCountrySelect(e.target.value)}
      >
        <option value="">All countries</option>
        <option value="france">France</option>
        <option value="italy">Italy</option>
        <option value="spain">Spain</option>
      </select>
    </form>
  );
}
