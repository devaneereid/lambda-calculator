import React from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

import { from } from "rxjs";

//import any components needed

//Import your array data to from the provided data file
const Specials= ({specials}) => {
  // const Specials = (props) => {
  // const [special] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
  
      /* /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/ 
    <div class="special-btn"> 
       {specials.map((specials, index) => {
         <SpecialButton key={specials} value= {index}/>
       })};
    </div>
  );
};
export default Specials;