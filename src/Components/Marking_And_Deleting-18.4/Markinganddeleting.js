import React,{ useState } from 'react'
const list=["one", "two", "three", "four", "five"];
const Marking = ()=>{
    const [data,setData]=useState([{num:list[0],checked:false},
        {num:list[1],checked:false},
        {num:list[2],checked:false},
        {num:list[3],checked:false},
        {num:list[4],checked:false}])
    
    const deepClone = [...data];
    console.log(deepClone)
    const [mylist , setMylist]=useState(deepClone);
    const checkfunc=(e)=>{
        let arr=[...mylist]
        arr.map(d=>{
            if(d.num==e.target.name){
                return d.checked=!d.checked;
            }
            else return d;
        })
        setData(arr)
    }

    const deleteline=()=>{
        const newstr=mylist.map((dat,index)=>{
            if(dat.checked==true){
                deletebyindex(index)
            }
            else return dat
        })
        var filtered = newstr.filter(function (el) {
            return el != null;
          });
        console.log(filtered);
        setMylist([...filtered])
    }

    const deletebyindex=(i)=>{
        mylist.splice(i,1)
    }

    const reset=()=>{
        setMylist([...data])
    }


    console.log(mylist);
    
    const renderlist=mylist.map(lst=>{
        
        return (
            <div>
                <td><input type="checkbox" id="myCheck" onChange={checkfunc} name={lst.num} checked={lst.checked}/>{lst.num}</td>
            </div>
        );
    })

    return (
        <div>
            <button onClick={deleteline}>delete</button><button onClick={reset}>reset</button>
            <tr>
            {
                renderlist
            }
            </tr>
        </div>
    )

}

export default Marking;