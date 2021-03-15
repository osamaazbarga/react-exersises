
import './App.css';
import Button1 from './Components/Buttons-4.1/Buttons-4.1';
import Cards from './Components/Cards-4.2/card'
import faker from 'faker'


function App() {
  return (
    <div className="App" >
      {/* <Button1 newbtn="Important" stylebtn='bold'/>
      <Button1 newbtn="Not Important"/> */}
      <Cards linktext1="SHARE" linktext2="EXPLORE"/>
      <Cards linktext1="SHARE" linktext2="EXPLORE"/>
      <Cards linktext1="SHARE" linktext2="EXPLORE"/>

      
    </div>
  );
}

export default App;
