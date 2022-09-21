import { Link } from "react-router-dom";
import { useState } from "react";
import useCollapse from 'react-collapsed'
import Gym1 from "./Gym1";

function Gym() {
  const { getCollapseProps, getToggleProps, isExpanded} = useCollapse();
    return ( 
      <div className="Gym">
        <h1 className="gymTitle">Gym</h1>
        <div className="gymStep1">
            <p className="gymIntro">Welcome to the complete Noob's gym starter course! Here, we'll guide you through the first steps toward reaching your fitness goals, with the easiest route in mind.</p>
        <div className="stepInfo">
          <div className="stepTitle" {...getToggleProps()}>
            <h2>Step 1: Identify Your Fitness Goals</h2>
          </div>
          <div className="stepContent" {...getCollapseProps()}>
            <Gym1/>
          </div>
        </div>
        </div>

      </div>
    );
  }
  
  export default Gym;