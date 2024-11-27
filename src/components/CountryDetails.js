import React from "react";

const CountryDetails = ({item}) => {

    return (
        <div className="countryDetails">
          <div>
            <table>
              <tr>
                <img src={item.flag} />
              </tr>
              <tr>

              </tr>
            </table>
          </div>
          <div>

          </div>
        </div>
    )
}

export default CountryDetails;