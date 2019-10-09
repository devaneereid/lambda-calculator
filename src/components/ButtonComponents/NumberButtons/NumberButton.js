import React from "react";
import { tsPropertySignature } from "@babel/types";
import {numbers} from "../../../data";

const NumberButton = ({numbers, index, setNumber}) => {
  return (

      /* Display a button element rendering the data being passed down from the parent container on props */
      // <button> {props.button.value}</button>}
    <button
      key={index}
      className="numbers-btn"
      onClick={() => setNumber(numbers.value)}>
      {index.numbers}
    </button>
          /* onClick={() => props.number()}>
            {props.button.value}
          </button> */
  );
}
console.log(numbers);

export default NumberButton;