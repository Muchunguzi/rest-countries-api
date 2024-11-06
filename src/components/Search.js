import React , {useState} from "react";
import { FaSearch} from "react-icons/fa";
import Country from "./Country";
import "./Search.css";

const Search = ({data}) => {


    const [searchTerm , setSearchTerm] = useState("");
    const [filteredSearchTerm , setFilteredSearchTerm] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        //Filtering the searched terms based on our json data
        if(value.length > 0){
            const results = data.filter((item) => 
                item.name?.toLowerCase().includes(value.toLowerCase())
                
            )
            setFilteredSearchTerm(results);
        } else {
            setFilteredSearchTerm([]);
        }
    }


    return (
        <div className="Search">
            < FaSearch/> 
            <input
            
            type="text"
            placeholder = "Search for a country..."
            value={searchTerm}
            onChange = {handleChange}
            
            />
            <ul  style={{maxHeight:"20", overflowY:"auto" , display: "grid" , gridTemplateColumns: "1fr 1fr 1fr" , width: "100%" , margin: "5% auto" , border: "1px solid black", marginLeft: "5%"}}>
            {filteredSearchTerm.length > 0 ? filteredSearchTerm.map((item, index) => (
                    <li 
                    style={{
                        listStyleType: "none",
                         display: "grid" ,
                         grid:"1f 1f 1f"
                          }} 
                          key={index}
                        >
                    <img src={item.flag} width="80%" />
                    {item.name}
                    <Country />
                    </li>
                )) : <li style={{listStyleType: "none"}}></li>
            }
            </ul>
        </div>
    )

}

export default Search;