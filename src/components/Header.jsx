import { string } from 'astro:schema';
import React, { useState } from 'react';


const weather = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Philadelphia?unitGroup=metric&include=current&key=R75ZL8UTXNSKG8GBYRH82DJE4&contentType=json", {
    method: "GET"
  })
    .then(response => response.json())  // Parse the JSON from the response

const Header = () => {
    const dateVariable = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    

    const weatherVariable = parseInt(weather.currentConditions.temp * (9/5) + 32);

    return (
    <>
      <div className="flex justify-around text-left"> 
        {/* Left of image */}
        <div className='basis-4/16'>
          <div className='flex-col justify-between'>
              Philadelphia, PA: {weatherVariable} {'\u00b0'}F
          </div>
          <div>
              Today's Paper
          </div>
        </div>

        <img className="basis-8/16 h-auto w-[50%]" src="/images/triangle-header-logo.svg" alt="Triangle Logo"/>

        {/* Right of image */}
        <div className='basis-4/16'>
          <div>
              {dateVariable.toLocaleDateString('en-GB', options)}
          </div>
          <div>
            Support Local News
          </div>
        </div>
      </div>
      <hr/>
    </>)
}
export default Header