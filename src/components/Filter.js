import React from "react";

const Filter = () => {


    return (
        <div>
          
          <select id="region" name="region">
            <option value="">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
    )
}

export default Filter; 