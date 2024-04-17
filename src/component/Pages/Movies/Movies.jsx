import React, { useState, useEffect } from "react";
import SinglePageContent from "../../SinglePage/SinglePageContent";
import CustomPagination from "../../../Pagination/CustomPagination";
import { REACT_APP_KEY } from "../../../config/config";
import Genre from "../../Genre/Genre";
import UseGenre from "../../Hooks/UseGenre";

function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPage, setNumOfPage] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectElem, setSelectElem] = useState([]);
  const filterUrl = UseGenre(selectElem);


  const apiMovie = async() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI",
      },
    };

    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_KEY}&language
      =en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${filterUrl}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setContent(data.results);
        setNumOfPage(data.total_pages);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {

apiMovie();
//eslint-disable-next-line
  }, [filterUrl,page]);

  return (
    <div>
      <span className="trendingTitle">Movies</span>
      <Genre
        type="movie"
       
        setPage={setPage}
        selectElem={selectElem}
        setSelectElem={setSelectElem}
        genre={genre}
        setGenre={setGenre}
      />
      <div className="trending">
        {content &&
          content.map((movi) => (
            <SinglePageContent
              key={movi.id} id={movi.id}
              media_type='movie'
              release_date={movi.release_date}
              title={movi.title}
              rating={movi.vote_average}
              poster={movi.poster_path}
            />
          ))}
      </div>
      {numOfPage > 1 && (
        <CustomPagination setPage={setPage} numOfPage={numOfPage} />
      )}
    </div>
  );
}

export default Movies;
