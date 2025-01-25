import { string } from 'astro:schema';
import React, { useState } from 'react';
import svgImage from '../assets/triangle-header-logo.svg';

const weather = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Philadelphia?unitGroup=metric&include=current&key=R75ZL8UTXNSKG8GBYRH82DJE4&contentType=json", {
    method: "GET"
  })
    .then(response => response.json())  // Parse the JSON from the response

const Header = () => {
    const dateVariable = new Date();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = dateVariable.getDate();
    const year = dateVariable.getFullYear();

    const outputDate = `${dayOfWeek[dateVariable.getDay()]}, ${month[dateVariable.getMonth()]} ${date}, ${year}`;

    const weatherVariable = "Philadelphia, PA: " + parseInt(JSON.stringify(weather.currentConditions.temp * 9 / 5 + 32)) + "°F"

    return (<div>
        
        <div>
            {weatherVariable}
        </div>
        <img src = {svgImage}/>
        <div>
            {outputDate}
        </div>
        <hr/>
    </div>)
}
export default Header