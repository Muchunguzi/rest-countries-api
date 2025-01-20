import React from "react";
import "./CountryDetails.css";

const CountryDetails = ({countryDetails}) => {

    return (
        <div className="countryDetails">
          <div className="mainContainer"  style={{display: "flex"}}>
          
              <div className="flagContainer">
              <img src={countryDetails.flag} width="100%"/>
              </div>
              <div className="detailsContainer" style={{display: "flex"}}>
              
                  
                  <div className="left" style={{textAlign:"start"}}>
                  <h2>{countryDetails.name}</h2>
                  <ul style={{listStyleType: "none"}}>
                    <p>
                    <li><strong>Native-Name: </strong>{countryDetails.nativeName}</li>
                    </p> 
                    <p>
                    <li><strong>Population: </strong>{countryDetails.population}</li>
                    </p>
                    <p>
                    <li><strong>Region: </strong>{countryDetails.region}</li>
                    </p>
                    <p>
                    <li><strong>Sub-Region: </strong>{countryDetails.subregion}</li>
                    </p>
                    <p>
                    <li><strong>Capital: </strong>{countryDetails.capital}</li>
                    </p>
                    
                  </ul>
                 

                  </div>
                  <div className="right" style={{textAlign:"start"}}>
                  <ul style={{listStyleType: "none"}}>
                    <li><strong>Top-Level-Domain: </strong>{countryDetails.topLevelDomain}</li>
                    <li><strong>Currencies: </strong>{countryDetails.currencies[0].name}</li>
                    <li><strong>Languages: </strong>{countryDetails.languages[0].name}</li>
                  </ul>
                  </div>
             
                
                 
                
              </div>  
              
          </div>
          <div>

          </div>
        </div>
    )
}

export default CountryDetails;