import React from "react";

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
                        
                        <label>Native-Name: {countryDetails.nativeName}</label><br/>
                        <label>Population: {countryDetails.population}</label><br />
                        <label>Region: {countryDetails.region}</label><br />
                        <label>Sub-Region: {countryDetails.subregion}</label><br />
                        <label>Capital: {countryDetails.capital}</label><br />
                      </td>

                      <td>
                        <label>Top-Level-Domain: {countryDetails.topLevelDomain}</label><br/>
                        <label>Currencies: {countryDetails.currencies.name}</label><br />
                        <label>Languages: {}</label><br />
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