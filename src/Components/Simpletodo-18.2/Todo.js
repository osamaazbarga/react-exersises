import React, { useState } from 'react'
const mylist=[
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
    ]
const Todo=()=>{
    
    const [mynewlist ,setMynewlist]=useState(mylist)
    const clickfunc=(list)=>{
        let arr=[...mynewlist]
        arr.map(arrs=>{
            if(arrs.name===list.name){
                return arrs.completed=!arrs.completed
            }
            else return arrs
        })
        setMynewlist(arr)
    }

    const rendertodo=mynewlist.map((list,index)=>{
        console.log(mynewlist)
        const mytodo=list.completed===true?"line-through":'none';
        const checkcom=list.completed===true?'V':'X';
        
        const mystyle={
            
        }
        return (
            
            <div key={index}>
                <div>
                    <div style={{textDecorationLine:mytodo}}>
                        {
                            list.name
                        }
                    </div>
                    <div>
                        {
                            <button onClick={()=>clickfunc(list)}>{checkcom}</button>
                        }
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div>
            {
                rendertodo
            }
        </div>
    )




}

export default Todo;