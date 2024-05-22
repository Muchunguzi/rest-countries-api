import React from "react";
import { FaSearch } from "react-icons/fa";

const Body = () => {
    return (
        <div>
          <section className="filterSection">
           <lable for="search"> 
           <FaSearch />
            <input id="search" type="search" name="search" placeholder="search for a country..." />
           </lable>
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