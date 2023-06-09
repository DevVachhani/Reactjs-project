import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>REACT MEALS</h1>
        <HeaderCartButton onClick={props.onshowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table Full Of Delicious Food ! " />
      </div>
    </Fragment>
  );
};

export default Header;
