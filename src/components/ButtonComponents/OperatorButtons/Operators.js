import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";
import '../../buttons.css';

//import any components needed

//Import your array data to from the provided data file

// const function Operator() {
const Operators = ({operators}) => {
  const [operator, setOperator] = useState('');
  console.log(operators);
  // STEP 2 - add the imported data to state
  return (
    
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

    
    <div class="operators-btn">
      {operators.map((operators, index) => {
         return <OperatorButton operators={operators} index={index} setOperator={setOperator} />;
      )};
    </div>
  );
};
export default Operators;
console.log(Operators);