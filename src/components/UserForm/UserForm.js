import "./UserForm.css";

export default function UserForm() {
  return (
    <form>
      <label htmlFor="country">Choose your holiday destination: </label>
      <select id="country" name="country">
        <option value="">All countries</option>
        <option value="france">France</option>
        <option value="italy">Italy</option>
        <option value="spain">Spain</option>
      </select>
    </form>
  );
}
