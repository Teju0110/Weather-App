import React, { useEffect } from "react"
import { useState } from "react";
import "./Style.css"


const WeatherApp =()=>{
    const[city,setCity]=useState(null);
    const[search, setSearch]=useState("Mumbai");

    useEffect( ()=>{

        const fetchApi = async ()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=`
            const response = await fetch(url);
            const resJson=await response.json();

            console.log(resJson)

            setCity(resJson.main)

        };

        fetchApi();

    },[search])


    return(

        <div className="box">
            <div>
            <input type="search" className="inputField" value={search} onChange={
                (event)=>{
                    setSearch(event.target.value)
                }
            } />

        </div>

        {!city ?(
            <p>No Data found</p>
        ):
        (
            <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"></i> {search}
                </h2>
                <h1 className="temp">{city.temp}</h1>

                <h3 className="tempmin_max">Min: {city.temp_min}:  °cel  | Max : {city.temp_max}  °cel</h3>

            </div>
        )}

            

        </div>

    )

}

export default WeatherApp;
