import Genre from "../../Genre/Genre";
import SinglePageContent from '../../SinglePage/SinglePageContent';
import React,{useEffect,useState} from "react";
import { REACT_APP_KEY } from "../../../config/config";
import UseGenre from "../../Hooks/UseGenre";
import CustomPagination from "../../../Pagination/CustomPagination";

function Series (){
    
    const [content,setContent] = useState([]);
    const[page,setPage] = useState(1);
    const [genre,setGenre] = useState([]);
    const [selectElem,setSelectElem] = useState([]);
    const [numOfPage,setNumOfPage] = useState([]);
    const filterUrl = UseGenre(selectElem);
  


useEffect(()=>{

  const apiSeriesMovie = async () =>{

    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI",
        },
      };
  
      await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=
        ${page}&with_genres=${filterUrl}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setContent(data.results);
          setNumOfPage(data.total_pages);
        })
        .catch((err) => console.error(err));
}

apiSeriesMovie();
},[page,filterUrl]);

    return(
        <div>
        <span className="trendingTitle">TV Series</span>
        <Genre
        type="tv"
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
              media_type="tv"
              release_date={movi.first_air_date}
              title={movi.original_name}
              rating={movi.vote_average}
              poster={movi.poster_path}
            />
          ))}
      </div>
      {
        numOfPage > 1 && (
<CustomPagination setPage={setPage} numOfPage={numOfPage} />
        )
      }
        </div>
    );
    }
    
    export default Series;