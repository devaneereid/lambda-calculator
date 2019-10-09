import React, {useState} from "react";
import {operators} from "./Operators";

const OperatorButton = ({operators, index, setOperator}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
    <button
      key={index}
      className="operators-btn"
      onClick={() => setOperator(operators.value)}>
      {index.operators}
    </button>
  );
};

console.log(operators);

export default OperatorButton;