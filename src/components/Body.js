import React from "react";
import { FaSearch } from "react-icons/fa";

const Body = () => {
    return (
        <div>
          <section className="filterSection">
           <label for="search"> 
           <FaSearch style={{position: 'start'}}/>
            <input id="search" type="search" name="search" placeholder="search for a country..." />
           </label>
           <select>
            <option selected>Filter by region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Oceania</option>
           </select>
          </section>
          <section className="indexSection">

          </section>
        </div>
    )
}

export {Body};