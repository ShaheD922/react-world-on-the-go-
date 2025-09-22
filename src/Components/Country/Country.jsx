import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

    const [Visited, setVisited] = useState(false)

    const handleVisited = ()=>{
        
        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        setVisited(!Visited)


    }

    return (
        <div className={`country ${Visited && 'country-visited'}`} >
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population} </p>
            <p>Area : {country.area.area} {country.area.area >30000 ? 'Big country' : 'Small country'}</p>

        <button onClick={handleVisited}>
            {
                Visited ? 'Visited' : 'Not Visited'
            }
        </button>
 
        </div>
    );
};

export default Country;