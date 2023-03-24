import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "./api";
import Navbar from "./components/Navbar";
import "./App.css";
import RenderCards from "./components/RenderCards";

function App() {
  const [images, setImages] = useState([]);
  const [searchInputValue, setsearchInputValue] = useState("");
  const [searchedResults, setsearchedResults] = useState([]);

  const handleSearch = (e) => setsearchInputValue(e.target.value);

  const fetchImages = () => {
    axios
      .get(`${baseURL}/popular`, {
        method: "GET",
        headers: {
          Authorization:
            "9CwiJeuPJUoaAmMSUZy3dwAT0d9OBO7Ab0SbnbkRM7gNfubbcnwZCCWe",
        },
      })
      .then((data) => setImages(data.data.photos))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <Navbar value={searchInputValue} handleSearch={handleSearch} />

      {searchInputValue ? (
        <RenderCards data={searchedResults} />
      ) : (
        <RenderCards data={images} />
      )}
    </div>
  );
}

export default App;
