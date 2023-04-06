import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>home page here</h1>
      <p>
        GO to home<Link to={"/products"}>list of products</Link>
      </p>
    </>
  );
};

export default Homepage;
