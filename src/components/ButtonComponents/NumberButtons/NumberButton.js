import React, {useState} from "react";
import { tsPropertySignature } from "@babel/types";

import {numbers} from "../../../data";

const NumberButton = (props) => {
  return (

      /* Display a button element rendering the data being passed down from the parent container on props */
      // <button> {props.button.value}</button>}
    <button>
      {props.button.value}
        <NumberButton number= {props.numbers} buttonValue="Add 1" />
        <NumberButton number= {resetNumber} buttonValue= "Reset" />
    </button>


    /* onClick={() => props.number()}>
      {props.button.value}
    </button> */
   
  );
}

export default NumberButton;