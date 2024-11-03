import React , {useState , useEffect} from "react";
import Search from  "./components/Search";
import {FaMoon} from   "react-icons/fa";
import "./App.css";

function App(){
    
  const [data , setData] = useState([]); //Store JSON data

  useEffect(() => {
    //Fetch the local JSON file
    fetch("http://localhost:3000/rest-countries-api/data.json")
    .then((response) => response.json())
    .then((jsonData => {
      setData(jsonData);
    }))
    .catch((error) => console.error("Fetch encountered an error", error));
  }, []); // Empty dependency array to fetch only once when the component mounts
   
   return (
    <div className = "App">
      <header>
        <h1>Where are you from ? </h1>
        <h2><FaMoon /> Dark Mode</h2>
      </header>
      <Search data={data}  /> {/*  Pass the fetched data to the search component*/}
    </div>
   )


}

export default App;
