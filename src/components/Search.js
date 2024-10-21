import Reach, {useState} from 'react';

const Search = ({data}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults , setFilteredResults] = useState([]);



    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filter the data base on the search term
        if(value.length > 0) { 
            const results = data.filter((item) =>
                item.name.toLowerCase().includes(value.toLowerCase())// Assuming `name` is the property to search in JSON 
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    return (
        <div>
            <input 
             type="text"
             placeholder="Search..."
             value={searchTerm}
             onChange={handleSearch}
            />
            <ul>
                {filteredResults.length > 0 ? (
                    filteredResults.map((item , index) => (
                        <li key={index}>{item.name}</li> // Assuming the JSON data has a `name` property
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );



};

export default  Search ; 