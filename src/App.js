
import './App.css';
import Button1 from './Components/Buttons-4.1/Buttons-4.1';
import Cards from './Components/Cards-4.2/card'
import Increment from './Components/Increment-7.1/Button'

import Hide from './Components/Hide_And_Seek-7.2/HideAndSeek' 
import Color from './Components/LifeCycle-8.1/Color'
import ChangeBox from './Components/LifeCycle-8.2/ChangingBox'
import BoxToCircle from './Components/LifeCycle-8.3/BoxToCircle'
import Spinner from './Components/Spinner-9.1/Spinner'
import Parent from './Components/ChildToParent-11.1/Parent'
import ChunkNorris from './Components/ChunkNorris-12.1/Chuck_norris'


import faker, { lorem } from 'faker'
import Data_massiaging from './Components/Data_massaging-13.1/Data_massiaging';
import Avatar from './Components/Avatar-13.1/Avatar';
import Form from './Components/Form-13.3/Form';
import Focus from './Components/Focus-14.1/Focus';
import Copy from './Components/Copy-14.2/Copy';
import Home from './Components/Products-16.1/Home';
import Hooks from './Components/Hooks/Hooks';
import Search from './Components/Hooks/Search';
import Text from './Components/Text-18.1/Text';
import Todo from './Components/Simpletodo-18.2/Todo';
import Whatthetime from './Components/WhatTheTime-18.3/Whatthetime';
import Marking from './Components/Marking_And_Deleting-18.4/Markinganddeleting';
import Footballfetch from './Components/Test1/Footballfetch';
import Countries from './Components/Countries-19.2/Countries';
import SimpleFetch from './Components/Simple_fetch/SimpleFetch';

const items=[{
  title:'fdgdfgdgd',
  content:'gdggdgd'
},
{
  title:'osama',
  content:'gdggdgd'
},
{
  title:'fdgdfgrrrrdgd',
  content:'gdggfdfddgd'
},]

const mytext=[{
  text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  maximum:10
},

]


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

      {/* <ChangeBox size="50px" top="10px"/>
        <ChangeBox size="100px" top="70px"/>
        <ChangeBox size="30px" top="150px"/> */}

      {/* <BoxToCircle/> */}

      {/* <Spinner/> */}

      {/* <Parent/> */}
      {/* <ChunkNorris/> */}
      {/* <Data_massiaging/> */}
      {/* <Avatar/> */}

      {/* <Form/> */}
      {/* <Focus/> */}
      {/* <Copy/> */}
      {/* <Home/> */}
      {/* <Hooks items={items}/> */}
      {/* <Search /> */}


      {/* <Text text={mytext}/> */}
      {/* <Todo/> */}
      {/* <Whatthetime/> */}

      {/* <Marking/> */}
      {/* <Footballfetch/> */}
      {/* <Countries/> */}
      <SimpleFetch/>
    </div>
  );
}

export default App;
