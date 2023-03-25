import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import c from "./style.module.css";
import axios from "axios";
import { baseURL } from "../../api";
import RenderCards from "../../components/RenderCards";
import Loader from "../../components/Loader";

const Home = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [searchInputValue, setsearchInputValue] = useState("");
  const [searchedResults, setsearchedResults] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(`${baseURL}popular`, {
        method: "GET",
        headers: {
          Authorization:
            "9CwiJeuPJUoaAmMSUZy3dwAT0d9OBO7Ab0SbnbkRM7gNfubbcnwZCCWe",
        },
        params: {
          page: currentPage,
          per_page: perPage,
        },
      });

      setImages(response.data.photos);
    };
    fetchImages();
  }, [currentPage, perPage]);

  const handleSearchBtn = async (e) => {
    e?.preventDefault();
    if (searchInputValue) {
      const response = await axios.get(`${baseURL}search`, {
        method: "GET",
        headers: {
          Authorization:
            "9CwiJeuPJUoaAmMSUZy3dwAT0d9OBO7Ab0SbnbkRM7gNfubbcnwZCCWe",
        },
        params: {
          query: searchInputValue.toLowerCase(),
          page: currentPage,
          per_page: perPage,
        },
      });
      setsearchedResults(response.data.photos);
    }
  };

  useEffect(() => {
    handleSearchBtn();
  }, [currentPage, perPage]);

  const handlePrevPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);

  if (!images.length) {
    return <Loader />;
  }

  return (
    <div className={c.home}>
      <form
        className={`${c.search__input__wrapper} flex`}
        onSubmit={handleSearchBtn}
      >
        <input
          className={c.search__input}
          type="text"
          placeholder="Search for images..."
          value={searchInputValue}
          onChange={(e) => setsearchInputValue(e.target.value)}
        />
        <button
          className={c.search__btn}
          type="submit"
          disabled={!searchInputValue.trim()}
        >
          <BsSearch />
        </button>
      </form>

      {searchInputValue.trim() ? (
        <RenderCards data={searchedResults} />
      ) : (
        <RenderCards data={images} />
      )}

      {images.length && (
        <div className={`${c.pagination} flex`}>
          <button
            className={c.btn}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            previous
          </button>
          <button className={c.btn} onClick={handleNextPage}>
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
