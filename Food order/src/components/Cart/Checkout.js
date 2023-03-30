import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isfivechanrt = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setformInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalcode: true,
  });
  const nameInputref = useRef();
  const streetInputref = useRef();
  const postalCodeInputref = useRef();
  const cityInputref = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enterdName = nameInputref.current.value;
    const enterdstreet = streetInputref.current.value;
    const enterpostalcode = postalCodeInputref.current.value;
    const enterdcity = cityInputref.current.value;

    const enterdNameIsvalid = !isEmpty(enterdName);
    const enterdstreetIsvalid = !isEmpty(enterdstreet);
    const enterdcitytIsvalid = !isEmpty(enterdcity);
    const enterdpostalcodeIsvalid = isfivechanrt(enterpostalcode);

    setformInputValidity({
      name: enterdNameIsvalid,
      street: enterdstreetIsvalid,
      city: enterdcitytIsvalid,
      postalcode: enterdpostalcodeIsvalid,
    });

    const formIsValid =
      enterdNameIsvalid &&
      enterdpostalcodeIsvalid &&
      enterdcitytIsvalid &&
      enterdstreetIsvalid;

    if (!formIsValid) {
      return;
    } else {
      props.onConfirm({
        name: enterdName,
        street: enterdstreet,
        city: enterdcity,
        postalcode: enterpostalcode,
      });
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputref} />
        {!formInputValidity.name && <p>please enter a valid Name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputref} />
        {!formInputValidity.street && <p>please enter a valid street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.postalcode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputref} />
        {!formInputValidity.postalcode && (
          <p>please enter a valid PostalCode</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputref} />
        {!formInputValidity.street && <p>please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
