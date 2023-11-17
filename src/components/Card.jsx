import Axios from "axios";
import Search from "./Search"
import React, { useEffect, useState } from "react";

function Card() {

    const [api, setApi] = useState([]);
    const [filterApi, setFilterApi] = useState([]);
    const [apiSearch, setApiSearch] = useState("");

    useEffect(() =>{
        Axios.get("https://restcountries.com/v3.1/all")
        .then((res) =>{
            setApi(res.data);
        });
    }, [])
    
    const handleSearch = (event) =>{
        setApiSearch(event.target.value);
    }

    useEffect(() =>{    
        const filterCountry = api.filter(({name}) =>{
            return name.common.toLowerCase().includes(apiSearch);
        });

        setFilterApi(filterCountry); 
    }, [api, apiSearch])

  return (
    <div>
        <Search handleSearch={handleSearch}/>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {filterApi.map((mapping) =>{
            const {numericCode, flags, name, population, region, capital} = mapping;
            return (
            <div key={numericCode} className="card overflow-hidden w-64 rounded-lg shadow-lg hover:shadow-xl mb-10 cursor-pointer m-auto">
                <img src={flags.png} className="w-64 h-36" alt="DruxAMB png" />
                <div className="p-3 mt-2 mb-5">
                    <div className="font-black text-md my-2 text-start">{name.common}</div>
                    <div className="flex text-sm font-semibold">Population: <p className="font-extralight ml-1">{population
}</p></div>
                    <div className="flex text-sm font-semibold">Region: <p className="font-extralight ml-1">{region}</p></div>
                    <div className="flex text-sm font-semibold">Capital: <p className="font-extralight ml-1">{capital}</p></div>
                </div>
            </div>);
    })}
        </div>

    </div>
  );
}

export default Card;
