import { Link } from "react-router-dom";
import { useState } from "react";

function Gym() {
  const [steps, setSteps] = useState([])
    return ( 
      <div className="Gym">
        <h1 className="gymTitle">Gym</h1>
            <p className="gymIntro">Welcome to the complete Noob's gym starter course! Here, we'll guide you through the first steps toward reaching your fitness goals, with the easiest route in mind.</p>
        <div className="Step">
            <h2>Step 1: Identify Your Fitness Goals</h2>
            <p>The first step in any journey is making a plan. Fitness is no different, and once the plan is made you have to commit to it to see results. So lets answer some questions to determine our approach:</p>

            <ul>
                <li>Would you like to lose or gain weight?</li>
                <li>Do you want to add more activity in your life?</li>
                <li>How many days can you go to the gym per week?</li>
                <li>What is your monthly budget?</li>
            </ul>

            <p>Each of these questions are important for figuring out what the basic structure of your routine will look like. Remember your answers as they will be referenced in Step 2!</p>
            
            
        </div>

      </div>
    );
  }
  
  export default Gym;