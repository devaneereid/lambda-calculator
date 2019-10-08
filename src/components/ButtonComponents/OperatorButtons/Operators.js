import React, {useState} from "react";
import {operators} from "../../../data";

//import any components needed

//Import your array data to from the provided data file

export default function Operator() {
const Operators = (props) => {
  const [operator] = useState(operators);

  // STEP 2 - add the imported data to state
  return (
    
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

    <div> 
       {operator.map((operators, index) => {
         <operators key= {index} operators= {operators}/>
         return (
           <button className="button" 
              onClick={() => props.operators}
           />
       ))};
    </div>
  );
};
};
export default Operators;