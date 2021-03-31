import axios from 'axios';
import React, { useState,useEffect } from 'react';
const delay = 5;
const Search=()=>{
    const [term , setTerm]=useState('program');
    const [debouncedTerm,setDebouncedTerm]=useState(term);
    const [results,setResults]=useState([]);
    console.log(results)

    useEffect(() => {
        const timerId=setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);
        return()=>{
            clearTimeout(timerId)
        };
        
    }, [term])

    useEffect(() => {
        const search = async () =>{
            const data=await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:debouncedTerm,
                }
            });
            setResults(data.data.query.search);
        };
        search();
    }, [debouncedTerm])

    // useEffect(async()=>{
        

    //     if(term&&results.length){
    //         search();
    //     }
    //     else{
    //         const timeoutId=setTimeout(() => {
    //             if(term){
    //                 search();
    //             }
    //         }, 1000*delay);
    //         return()=>{
    //             clearTimeout(timeoutId)
    //         };

    //     }

        
    // },[term,results.length])

    

    const renderResults=results.map(results=>{
        return (
            <div key={results.pageid} className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${results.pageid}`}
                    >Click Me</a>
                </div>
                <div className="content">
                    <div className="header">
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:results.snippet}}></span>
                   
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    value={term}
                    onChange={e=>setTerm(e.target.value)}
                    className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    )
}

export default Search