import React from "react";
import "./Accordion.css";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import { useState } from "react";
const Accordion = ({ title,content }) => {
  // const [setActive, setActiveState] = useState("");
  // const [setHeight, setHeightState] = useState("0px");
  // const [setRotate, setRotateState] = useState("accordion__icon");

  const [plusOne, setPlusOne] = useState(false)



  // const toggleAccordion = () => {
  //   setActiveState(setActive === "" ? "active" : "");
  //   setHeightState(
  //     setActiveState === "active" ? "0px" : `${content?.current?.scrollHeight}px`
  //   );
  //   setRotateState(
  //     setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
  //   );
  //   console.log(content?.current?.scrollHeight);
  // };

  return (
    <div className="accordion">
    <div className="accordion__selection" >
    
        <button /*className={`accordion ${setActive}`} onClick={toggleAccordion} */
        >
          <p className="accordion__title" style={{float:"left" }}>{title}</p>
        <div className="accordion__icon" style={{float:"right"}}>
          <AddOutlinedIcon onClick={() => setPlusOne(!plusOne)} />
        </div>
        </button>
      
      {plusOne && (
        <div
          className="accordion__text"
          // style={{ height: setHeight }}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
      </div>
      </div>
  );
};

export default Accordion;
