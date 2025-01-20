import React , {useState} from "react";
import "./Country.css";
import CountryDetails from "./CountryDetails";

const Country = ({country , toggleCountryDetails}) => {
   
    
    return (
     
        <div className="Country" onClick={() => toggleCountryDetails(country)}>
         <img src={country.flag} width="100%" alt="country_flag_pic/image_missing"/>
         <h3>{country.name}</h3>
         <p><strong>Population : </strong>{country.population}</p>
         <p><strong>Region : </strong>{country.region}</p>
         <p><strong>Capital : </strong>{country.capital}</p>
        </div>
    )
}

export default Country;