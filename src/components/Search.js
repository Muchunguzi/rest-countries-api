import React , {useState} from "react";
import { FaSearch} from "react-icons/fa";
import Country from "./Country";
import CountryDetails from "./CountryDetails";

import "./Search.css";

const Search = ({data}) => {


    const [searchTerm , setSearchTerm] = useState("");
    const [filteredSearchTerm , setFilteredSearchTerm] = useState([]); 
    
    const [selectCountry, setSelectedCountry] = useState(null);
    const [view, setView] = useState("search");
    const [countryDetails, setCountryDetails] = useState([]);

    




    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        //Filtering the searched terms based on our json data
        if(value.length > 0){
            const results = data.filter((country) => 
                country.name?.toLowerCase().includes(value.toLowerCase())
                
            )
            setFilteredSearchTerm(results);
        } else {
            setFilteredSearchTerm([]);
        }
    }

    const toggleCountryDetails = (country) => {
        console.log("I was clicked!");
        setSelectedCountry(country.name);
        setView("details");
        setCountryDetails(country);
       
    }



    return (
        <div className="Search" > 
            <div>
            < FaSearch/> 
            <input
            
            type="text"
            placeholder = "Search for a country..."
            value={searchTerm}
            onChange = {handleChange}
            
            />
            </div>
            
            <div>
            { view === "search" && 
               
               <ul  style={{maxHeight:"20", overflowY:"auto" , display: "grid" , gridTemplateColumns: "1fr 1fr 1fr" , width: "100%" , margin: "5% auto" ,  marginLeft: "5%"}}>
               {filteredSearchTerm.length > 0 ? filteredSearchTerm.map((country, index) => (
                       <li 
                       style={{
                           listStyleType: "none",
                            display: "grid" ,
                            grid:"1f 1f 1f"
                             }} 
                             key={index}
                           >
                       <Country country={country} toggleCountryDetails={toggleCountryDetails} />
                       </li>
                   )) : <li style={{listStyleType: "none"}}></li>
               }
               </ul>
            }


            { view === "details" && 
               
               < CountryDetails countryDetails={countryDetails} />

            }
            
               </div>
            
            
           
         
       
        </div>
    )

}

export default Search;