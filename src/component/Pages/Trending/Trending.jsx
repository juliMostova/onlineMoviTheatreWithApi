import "./TrendingCss.css";
import React, { useState, useEffect } from "react";
import { REACT_APP_KEY } from "../../../config/config";
import SinglePageContent from "../../SinglePage/SinglePageContent";
import CustomPagination from '../../../Pagination/CustomPagination';


function Trending() {
  const [content, setContent] = useState([]);
  const [page,setPage] = useState(1);


  function apiTrending() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI",
      },
    };
  
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_KEY}&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setContent(data.results);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    apiTrending();
    //react-hooks/exhaustive-deps
// eslint-disable-line react-hooks/exhaustive-deps
  },[page]);

  return (
    <div>
      <span className="trendingTitle">Trending movi</span>
      <div className="trending">
        {content &&
          content.map((movi) => (
            <SinglePageContent
              key={movi.id} id={movi.id}
              media_type={movi.media_type || movi.original_name}
              release_date={movi.release_date || movi.first_air_date}
              title={movi.title || movi.original_name}
              rating={movi.vote_average}
              poster={movi.poster_path}
            />
          ))}
          
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  );
}

export default Trending;
