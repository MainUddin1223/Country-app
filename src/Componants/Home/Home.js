import React, { useEffect, useState } from 'react';
import About from '../About/About';
import DEtail from '../Detail/DEtail';

const Home = () => {
    const [total,setTotal]=useState([]);

    const[country,setCountry]=useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(data=>setCountry(data))
        
    }, 
    [])
    const handle= (country) =>{
        const newTotal=[...total,country];
        console.log(country)
        setTotal(newTotal)
    }
    

    return (
        <div>
             <h1>Added Country: {total.length}</h1>
             <DEtail detail={total}  coun={country}></DEtail>
            <h1>
               
               
                {
                    country.map(data=> <About about={data} handle={handle}></About>)
                }
   
            </h1>
        </div>
    );
};

export default Home;