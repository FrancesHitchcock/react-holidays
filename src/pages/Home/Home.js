import { Helmet } from "react-helmet-async";

import "./Home.css";

export default function Home() {
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
        <h2>This is the home page</h2>
        <div>
          <p>React Holidays are the best.</p>
          <p>
            Why don't you go to the about page to find out more about us. Then
            navigate to the holidays page to choose your dream holiday!
          </p>
        </div>
      </main>
    </>
  );
}
