import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Dp from "./dp2.jpg";

function Home() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const url =
    "https://pixabay.com/api/?key=25712475-02b52df7ce5853cae0dbd2d4b/_limit=5";

  const fetchData = async () => {
    await axios
      .get(url)
      .then((res) => {
        setImages(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="header">
        <div className="search text-center">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search for photo"
              value={search}
              onChange={handleChange}
            />
            <button class="btn" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/*The main content */}
      <div className="main row text-center">
        {images &&
          images
            .filter((im) => im.tags.includes(search))
            .map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0 items"
                key={item.id}
              >
                <Link to={`/details/${item.id}`}>
                  <img src={item.largeImageURL} alt="" />
                  <h3 className="text">{item.user}</h3>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Home;
