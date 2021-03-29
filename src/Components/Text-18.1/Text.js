
import React, { useState } from 'react'

const Text = ({text})=>{
    const [mytext,setMytext]=useState(text[0].text)
    const [mylength,setMylength]=useState(text[0].maximum)
    
    const [show,setShow]=useState('Show more');

    const [lesstext,setLesstext]=useState(mytext.split(" ").slice(0,mylength).join(" "))
    const [test,setTest]=useState(lesstext);
    const onTitleClick=()=>{
        if(test===mytext){
            setTest(lesstext)
            setShow('show more')
        }
        else {
            setTest(mytext)
            setShow('show less')
        }
    }
    // const textrender=text.map((txt,index)=>{
        return (<div>
            <div>{test}<button onClick={()=>onTitleClick()}>{show}</button></div>
        </div>
            
        )
    // })
    // return (
    //     <div>
    //         {
    //             textrender
    //         }
    //     </div>
    // )
}

export default Text