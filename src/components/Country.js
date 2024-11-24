import React , {useState} from "react";
import "./Country.css";
import CountryDetails from "./CountryDetails";

const Country = ({item , toggleCountryDetails}) => {
   
    
    return (
     
        <div className="Country" onClick={toggleCountryDetails}>
         <img src={item.flag} width="100%" alt="country_flag_pic/image_missing"/>
         <h3>{item.name}</h3>
         <p><strong>Population : </strong>{item.population}</p>
         <p><strong>Region : </strong>{item.region}</p>
         <p><strong>Capital : </strong>{item.capital}</p>
        </div>
    )
}

export default Country;