import axios from 'axios';
import react, { useEffect, useState } from 'react'

const Countries =()=>{
    const [countries,setCountries]=useState([]);
    // const [filtercountries,setfilterCountries]=useState("");

    const [search,setSearch]=useState('');
    const getCountries=async()=>{
        const req= await axios.get('https://restcountries.eu/rest/v2/all');
        console.log(req.data);
        setCountries(req.data)
        // setfilterCountries(req.data)
    }

    useEffect(()=>{
        getCountries();
    },[])

    const textHandler=(e)=>{
        setSearch(e.target.value);
        // setCountries(countries.filter((c)=>{
        //     return c.name.toLowerCase().startsWith(e.target.value)
        // }))
    }

    const Getc=()=>{
        
            return countries.filter((c)=>{
                return c.name.toLowerCase().startsWith(search)
            }).map((c)=>{
                return <div>{c.name}</div>
            })
    }


    return (<div>
        <input type="text" value={search} onChange={textHandler}/>
        <Getc/>
    </div>)
}

export default Countries

