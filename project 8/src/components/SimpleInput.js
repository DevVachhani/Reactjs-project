import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const inpiutref = useRef();
  const [entredname, setentredname] = useState("");
  const [validstate, setvalidstate] = useState(true);

  const nameInputChangeHandler = (event) => {
    setentredname(event.target.value);
  };

  const formsubmissionHandler = (event) => {
    event.preventDefault();

    if (entredname.trim() === "") {
      setvalidstate(false);
      return;
    }

    setvalidstate(true);
    console.log(entredname);

    const enterdvalue = inpiutref.current.value;

    console.log(enterdvalue);
  };
  const namevalidestate = validstate ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formsubmissionHandler}>
      <div className={namevalidestate}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inpiutref}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {!validstate && <p className="error-text">name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
