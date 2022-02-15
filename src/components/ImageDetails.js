import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function ImageDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const url =
    "https://pixabay.com/api/?key=25712475-02b52df7ce5853cae0dbd2d4b/_limit=5";

  const fetchData = async () => {
    await axios
      .get(url)
      .then((res) => {
        setData(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>This is the image details page and the id is {id}</div>;
}

export default ImageDetails;
