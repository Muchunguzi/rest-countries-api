import React from "react";
import "./Country.css";

const Country = ({item}) => {
    return (
        <div className="Country">
        <img src={item.flag} width="100%" />
        <h3>{item.name}</h3>
        <p><strong>Population : </strong>{item.population}</p>
        <p><strong>Region : </strong>{item.region}</p>
        <p><strong>Capital : </strong>{item.capital}</p>
        </div>
    )
}

export default Country;