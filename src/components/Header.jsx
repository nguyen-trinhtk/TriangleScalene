import { string } from 'astro:schema';
import React, { useState } from 'react';

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

    const weatherVariable = parseInt(weather.currentConditions.temp * (9/5) + 32);

    return (
    <div className="bg-red-300">
      <meta charset="utf-8"/>    
        <div className='basis-1/3'>
            Philadelphia, PA: {weatherVariable} {'\u00b0'}F
        </div>
        {/* <img className="basis-1/3" src="/images/triangle-header-logo.svg" alt="Triangle Logo"/> */}
        <div className='basis-1/3'>
            {outputDate}
        </div>
        <hr/>
    </div>)
}
export default Header