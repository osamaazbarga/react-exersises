import axios from 'axios'
import react ,{useState,useEffect} from 'react'
const Info=()=>{


    const [term , setTerm]=useState('');

    const [results,setResults]=useState('');
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    useEffect(() => {
        const getapi=async()=>{

            const data=await axios.get('https://swapi.dev/api/films/1/', {
            cancelToken: source.token
            })
            setResults(data.data.opening_crawl)
            console.log(data.data.opening_crawl)
        }
        getapi()
        console.log(source.token)
        return ()=>{console.log(`cleanup`)}
        
    })

    return (
        <div>
            {
                results
            }
        </div>
    )
}

export default Info;