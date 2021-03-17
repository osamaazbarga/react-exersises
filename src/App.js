
import './App.css';
import Button1 from './Components/Buttons-4.1/Buttons-4.1';
import Cards from './Components/Cards-4.2/card'
import Increment from './Components/Increment-7.1/Button'

import Hide from './Components/Hide_And_Seek-7.2/HideAndSeek' 
import Color from './Components/LifeCycle-8.1/Color'
import ChangeBox from './Components/LifeCycle-8.2/ChangingBox'
import faker from 'faker'


function App() {
  return (
    <div className="App" >
      {/* <Button1 newbtn="Important" stylebtn='bold'/>
      <Button1 newbtn="Not Important"/> */}

      {/* <Cards linktext1="SHARE" linktext2="EXPLORE"/>
      <Cards linktext1="SHARE" linktext2="EXPLORE"/>
      <Cards linktext1="SHARE" linktext2="EXPLORE"/> */}

      {/* <Increment/>
      <Increment/> */}

      {/* <Hide/> */}
      {/* <Color/> */}
      <ChangeBox size="50px" top="10px"/>
        <ChangeBox size="100px" top="70px"/>
        <ChangeBox size="30px" top="150px"/>

      
    </div>
  );
}

export default App;
