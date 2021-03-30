import axios from 'axios';
import React, { useState,useEffect } from 'react';

const Search=()=>{
    const [term , setTerm]=useState('')
    const [results,setResults]=useState([]);
    console.log(results)

    useEffect(async()=>{
        const search = async () =>{
            const data=await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term,
                }
            });
            setResults(data.data.query.search);
        };
        if(term){
            search();
        }
        
    },[term])

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