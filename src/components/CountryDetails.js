import React from "react";
import "./CountryDetails.css";

const CountryDetails = ({countryDetails}) => {

    return (
        <div className="countryDetails">
          <div>
            <table>
              <tr>
                <td>
                <img src={countryDetails.flag} width="100%"/>
                </td>
                <td>
                      
                   <table>
                   <h2>{countryDetails.name}</h2>
                    <tr>
                      <td>
                        
                        <label><strong>Native-Name: </strong>{countryDetails.nativeName}</label><br/>
                        <label><strong>Population: </strong>{countryDetails.population}</label><br />
                        <label><strong>Region: </strong>{countryDetails.region}</label><br />
                        <label><strong>Sub-Region: </strong>{countryDetails.subregion}</label><br />
                        <label><strong>Capital: </strong>{countryDetails.capital}</label><br />
                      </td>

                      <td>
                        <label><strong>Top-Level-Domain: </strong>{countryDetails.topLevelDomain}</label><br/>
                        <label><strong>Currencies: </strong>{countryDetails.currencies[0].name}</label><br />
                        <label><strong>Languages: </strong>{countryDetails.languages[0].name}</label><br />
                      </td>
                    </tr>
                   </table>
                 
                </td>
              </tr>
            </table>
          </div>
          <div>

          </div>
        </div>
    )
}

export default CountryDetails;