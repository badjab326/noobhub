import { Link } from "react-router-dom";
import Gym1 from "./Gym1";
import Gym2 from "./Gym2";
import Gym3 from "./Gym3";

function Gym() {
  const togglePanel = (e) => {
    console.log(e.target.children[0])
    console.log(e.target)
    if (e.target.children[0].style.display === 'none') {
        e.target.children[0].style.display = ''
    } else {
        e.target.children[0].style.display = 'none'
    }
    
}
    return ( 
      <div className="Gym">
        <h1 className="gymTitle">Gym</h1>
            <p className="gymIntro">Welcome to the complete Noob's gym starter course! Here, we'll guide you through the first steps toward reaching your fitness goals, with the easiest route in mind.</p>
        <div className="stepInfo">
          <div className="stepTitle" onClick={(e) => togglePanel(e)}>
            Step 1: Identify Your Fitness Goals
            <div className="stepContent" style={{display: 'none'}}>
              <Gym1/>
            </div>
          </div>
          <div className="stepTitle" onClick={(e) => togglePanel(e)}>
            Step 2: Choosing a Gym
            <div className="stepContent" style={{display: 'none'}}>
              <Gym2/>
            </div>
          </div>
          <div className="stepTitle" onClick={(e) => togglePanel(e)}>
            Step 3: Building a Routine
            <div className="stepContent" style={{display: 'none'}}>
              <Gym3/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Gym;