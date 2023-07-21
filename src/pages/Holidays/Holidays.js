import { Helmet } from "react-helmet-async";

import UserForm from "../../components/UserForm/UserForm";
import HolidayCards from "../../components/HolidayCards/HolidayCards";

import "./Holidays.css";

import data from "../../data/data.json";

export default function Holidays() {
  console.log(data);
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
        <UserForm />
        <HolidayCards data={data} />
      </main>
    </>
  );
}
