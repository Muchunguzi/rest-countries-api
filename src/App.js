import React , {useState, useEffect} from 'react';
import Search from './components/Search';
import {FaMoon } from 'react-icons/fa';
import './App.css';

function App() {
const [data , setData] = useState([]) //Store JSON data

useEffect(() => {
  // Fetch the local JSON file
  fetch("http://localhost:3000/rest-countries-api/data.json") 
  .then((response) => 
  {
    console.log(response);
    return response.json();
  }
    
    )
  .then((jsonData) => {
    
    console.log(jsonData) // checking the structure of my data
    setData(jsonData)})
  .catch((error) => console.error('Error fetching data: ', error));
}, []); // Empty dependency array to fetch only once when the component mounts


  return (
    <div className="App">
      < header>
       <h2>Where in the world ?</h2>
       <p><FaMoon /> Dark Mode</p>
      </header>
      <Search data={data} />{/* Pass the fetched data to search component */}
    </div>
  );
}

export default App;
