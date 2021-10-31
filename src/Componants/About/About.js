import React from 'react';
import { useHistory, useParams } from 'react-router';
import './About.css'
const About = (props) => {

    const history=useHistory();
    const handle2=()=>{
        history.push(`/about/${name}`)
    }

    
    console.log(props.about)
    
    const {name,population,region,flag,capital}=props.about;

    const handle=props.handle;
    return (
        <div className="country-div">
            <img src={flag} alt="" />
            <h2>Name : {name}</h2>
            <button onClick={()=>handle2()}>learn More</button>
            <button onClick={()=>handle(props.about)}>Add Country</button>
          
        </div>
    );
};

export default About;