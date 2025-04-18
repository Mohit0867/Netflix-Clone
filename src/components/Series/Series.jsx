import React, { useEffect, useState } from "react";
import "./Series.css";
import { Link } from "react-router";

const Series = () => {
 const [series, setSeries] = useState([]);
  const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "086cfe05dd16828e37291d2f37293a38",
    originalImage: (imgPath) =>
      `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  };

  const getPopularTVShows = async () => {
    try {
      const response = await fetch(
        ` ${apiConfig.baseUrl}tv/popular?api_key=${apiConfig.apiKey}`
      );
      const data = await response.json();
      console.log(data.results);

      //setSeries(data.results);
      const shuffledData = data.results.sort(() => 0.5 - Math.random());
      setSeries(shuffledData);
    } catch (error) {
      console.error("Error fetching popular TV shows:", error);
    }
  };

  useEffect(() => {
    getPopularTVShows();
  }, []);
  return (
    <div
      className=" bg-black text-white row w-100  parent-card-container"
      style={{ height: "auto" }}
    >
      {series && series.length > 0 ? (
        series.slice(0, 20).map((series) => (
          <div className="col-3 child-card-container  " key={series.id}>
            <Link
              className="d-flex flex-column text-decoration-none align-items-center"
              to={`/tv-details/${series.id}`}
            >
              <img
                style={{ width: "150px" }}
                src={apiConfig.w500Image(series.poster_path)}
                alt="error"
              />
              <div style={{ marginTop: "10px" }}>
                <b
                  style={{
                    fontSize: "1.3rem ",
                    color: " #fff",
                    textWrap: "wrap",
                    lineHeight: "5px",
                  }}
                >
                  {series.name.slice(0, 20) + "..."}
                </b>
                {series && series.overview.length > 0 ? (
                  <p
                    style={{
                      fontSize: "0.8rem ",
                      color: " white",
                    }}
                  >
                    {series.overview.slice(0, 35) + "..."}
                  </p>
                ) : (
                  <p style={{ fontSize: "0.7rem ", color: " #80afb3" }}>
                    Doesn't have description
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p
          className="d-flex justify-content-center align-items-center"
          style={{ color: " #80afb3", backgroundColor: "black" }}
        >
          Loading or no data found...   <div class="loader "></div>
        </p>
      )}
    </div>
  );
};

export default Series;
