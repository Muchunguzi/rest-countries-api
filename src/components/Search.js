import React , {useState} from "react";

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
        <div>
            <input
            
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange = {handleChange}
            
            />
            <ul>
            {filteredSearchTerm.length > 0 ? filteredSearchTerm.map((item, index) => (
                    <li key={index}>
                    <img src={item.flag} alt="flag for this country" width="30%" /> <br />
                    {item.name}
                    </li>
                )) : <li>Search is inValid!</li>
            }
            </ul>
        </div>
    )

}

export default Search;