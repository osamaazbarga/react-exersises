import axios from "axios";
import react,{useState,useEffect} from "react";

const Algolia=()=>{

    const [term , setTerm]=useState('hooks');
    const [searchvalue,setSerachvalue]=useState('')
    const [results,setResults]=useState([]);

    useEffect(async()=>{
        const search=async()=>{
            const data=await axios.get('https://hn.algolia.com/api/v1/search',{
                params:{
                    query:term,
                }
            });
            setResults(data.data.hits)
            console.log(data.data.hits)
        };
        
        if(term){
            search();
        }
        
    },[term])

    const Renderalgo=()=>{
        console.log(results);
        return results.map(results=>{
        return (
            <div>
                <div><a href={results.url}>{results.title}</a></div>
            </div>
        )
    })
}


    const searchalgo=()=>{
        setTerm(searchvalue);
    }
    const getSearchValue=(e)=>{
        setSerachvalue(e.target.value)
    }
    return(
        <div>
            <div>
                <input type="text" onChange={(e=>getSearchValue(e))}/>
                <button onClick={searchalgo}>Search</button>
            </div>
            <div><Renderalgo/></div>
            
        </div>
    )
}

export default Algolia
