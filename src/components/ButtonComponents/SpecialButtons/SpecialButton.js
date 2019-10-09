import React from "react";
import {specials} from "./Specials";

const SpecialButton = ({specials, index, setSpecial}) => {
  return (
      {/* Display a button element rendering the data being passed down from the parent container on props */}
 
      <button
        key={index}
        className="special-btn"
        onClick={(index) => setSpecial(specials.value)}>
        {index.specials}
      </button>
        // <button className= "button-specials">
        //   <span>
        //     {specials}
        //   </span>
        // </button> 
    );
  };
export default SpecialButton;
console.log(specials);
