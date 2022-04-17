import { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import './App.css'

function App() {

  const [query, setQuery] = useState('')

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeather(query)
      console.log(data);
    }
  }

  return (
    <div className="main-container">
      <input 
      type="text"
      className="search"
      placeholder="Search Location"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyPress={search}
      />
    </div>
  );
}

export default App;
