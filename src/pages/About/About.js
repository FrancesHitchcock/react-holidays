import { Helmet } from "react-helmet-async";
import "./About.css";

export default function About() {
  return (
    <>
      <Helmet>
        <title>React Holidays About Page</title>
        <meta
          name="description"
          content="This is the React Holidays About page"
        />
      </Helmet>
      <main>
        <h2>This is the about page</h2>
        <div>
          <p>
            We have such lovely holidays at React Holidays. You will travel to
            your destination by rail to minimise your carbon footprint.
          </p>
          <p>Our beautiful destinations include France, Italy and Spain.</p>
        </div>
      </main>
    </>
  );
}
