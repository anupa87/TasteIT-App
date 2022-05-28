import React from "react";

const Button = (props) => {
  return (
    <button
      className=" btn btn-default"
      type={props.type || "button"}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default Button;
