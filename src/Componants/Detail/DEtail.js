import React, { useState } from 'react';

const DEtail = (props) => {
    console.log(props.detail)
    const country=props.detail;
    let totalPopulation=0; 
    let countryName="";
    let region="";
    let capital="";
    let area ="";
    for (let i = 0; i < country.length; i++) {
        const element = country[i];
        totalPopulation=element.population;
        countryName=element.name
        region=element.region;
        capital=element.capital;
        area=element.area;
    }
   let million=totalPopulation/1000000;
   const population= million.toFixed(2);
    return (
        <div>
            <h1>country Name : {countryName}</h1>
            <h2>Capital : {capital}</h2>
            <h2>Region : {region}</h2>
            <h2>Area : {area} square K.M</h2>
            <h5>total Population : {population}M</h5>
        </div>
    );
};

export default DEtail;