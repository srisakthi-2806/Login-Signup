/*import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App" >
      <center>
        <h1>Bio-data</h1>
    <form>
      <label for="RollNumber">RollNumber:</label>
      <input type="text" id="RollNumber" name="Rollnumber"></input>
      <br></br><br></br><label for="Name">Name:</label>
      <input type="text" id="name" name="name"></input>
      <br></br><br></br><label for="Date Of Birth">Date Of Birth:</label>
      <input type="date" id="datemax" max="2023-12-31"></input>
      <br></br><br></br><label for="Email">Email:</label>
      <input type="email" id="email" name="email"></input>
      <br></br><br></br><label for="number">Phone Number:</label>
     <input type="number" id="number" name="number"></input>
      <br></br><p> Gender:
      <label><input type="radio" name="gender" value="male" />Male</label>

      <label><input type="radio" name="gender" value="Female" />Female</label>
      </p>
      <p>
        <label>
          Address :
          <br />
          <textarea name="address" cols="30" rows="3"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">SUBMIT</button>
      </p>

    </form>
    </center>
    </div>
  );
}

export default App;*/

/*import ClassComp from "./Component/ClassComp.js";
import FunctionalComp from "./Component/FunctionalComp.js";
import OneExport from "./Component/OneExport.js";
export default function App()
{
  return(
    <div>
      <FunctionalComp/>
      <ClassComp/>
      <OneExport/>
    </div>
  )
}*/

/*import PropsFunctional from "./Component/Day4/PropsFunctional";
import PropsClass from "./Component/Day4/PropsClass";
export default function App()
{
  return(
    <div>
    <PropsFunctional name="Srisakthi"></PropsFunctional>
    <PropsClass college="SKCT"></PropsClass>
    </div>
  )
}*/

/*import PropsFunctional from "./Component/Day4/PropsFunctional";
import ArrowProps from "./Component/Day4/ArrowProps";
import StateClassCom from "./Component/Day4/StateClassCom";
import StateFunction from "./Component/Day4/StateFunction";
import StateHoldObject from "./Component/Day4/StateHoldObject";
import DynamicRendering from "./Component/Day4/DynamicRendering";
import TwoWayBinding from "./Component/Day4/TwoWayBinding";
import ParentChild from "./Component/Day4/ParentChild";
import DefaultProps from "./Component/Day4/DefaultProps";
export default function App()
{
  return(
    <div>
      <PropsFunctional college="Sri Krishna College of Technology" place="Kovaipudur"></PropsFunctional>
      <ArrowProps petname="Mennan"></ArrowProps>
      <StateClassCom></StateClassCom>
      <StateFunction></StateFunction>
      <StateHoldObject></StateHoldObject>
      <DynamicRendering></DynamicRendering>
      <TwoWayBinding></TwoWayBinding>
      <ParentChild></ParentChild>
      <DefaultProps></DefaultProps>
     
    </div>
  )
}*/

import './App.css';
import LoginPage from './Component/VehiclePortal/LoginPage';

function App() {

  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  );
}
export default App;
