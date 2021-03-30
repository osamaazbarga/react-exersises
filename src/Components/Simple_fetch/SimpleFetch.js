import axios from "axios";
import React, {useState, useEffect } from "react";

const SimpleFetch=()=>{
    const [results,setResults]=useState({});

    useEffect(async()=>{
        const data=await axios.get('https://swapi.dev/api/films/1/');
        
        setResults(data.data)
        console.log(data.data);
        console.log(results);
        
    },[])
    

//     const rendersimple=()=>{
//     //     console.log(results)
//     //     return results.map(results=>{
//     //         console.log(results)
//     //         return(
//     //             <div key={results.episode_id}>
//     //                 {
//     //                     results.data.title
//     //                 }
//     //             </div>
//     //         )
//     // })
//     return()
// }

    return (
        <div>
            {results?<div>{results.title}  <br/>{results.director}</div>:<div></div>}
        </div>
    )
}

export default SimpleFetch