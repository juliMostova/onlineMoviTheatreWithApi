import "./Search.css";
import React, { useEffect, useState } from "react";
import { REACT_APP_KEY } from "../../../config/config";
import { TextField, ThemeProvider, Button } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from "@mui/material/styles";
import SinglePageContent from "../../SinglePage/SinglePageContent";
import CustomPagination from "../../../Pagination/CustomPagination";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Search() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPage, setNumOfPage] = useState();
  const [serchText, setSearchText] = useState("");
  const [type, setType] = useState(0);


  const handleChange = (event, newValue) => {
    setType(newValue);
    setPage(1);
  };


  const apiSerch = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI",
      },
    };

    await fetch(
      `https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${REACT_APP_KEY}&language=en-US&query=${serchText}&page=${page}&include_adult=false`,
      options
    
    )
      .then((response) => response.json())
      .then((data) => {
        setContent(data.results);
        setNumOfPage(data.total_pages);
      })
      .catch((err) => console.error(err));
  };
useEffect(()=>{
apiSerch();
},[page,type])

  const changeTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
     
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={changeTheme}>
        <div style={{ display: "flex", margin: "18px 15px 5px 15px", }}>
          <TextField
            className="serchInput"
            id="filled-basic"
            label="Serching...."
            variant="filled"
            style={{ flex: 1 }}
            onChange={(e) =>setSearchText(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={apiSerch}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
      
      <Tabs
         value={type}
         onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab style={{width:'50%'}}  label="Movie" />
        <Tab style={{width:'50%'}} label="TV Series" />
    
      </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((movi) => (
            <SinglePageContent
            key={movi.id} id={movi.id}
            media_type={type?"tv":"movie"}
            release_date={movi.release_date || movi.first_air_date}
            title={movi.title || movi.original_name}
            rating={movi.vote_average}
            poster={movi.poster_path}
            />
          ))}
          {
            serchText && !content && (type?<h2>Oooops, series not found try again</h2>:<h2>Oooops, movies not found try again</h2>)
          }
      </div>
      {numOfPage > 1 && (
        <CustomPagination setPage={setPage} numOfPage={numOfPage} />
      )}
    </div>
  );
}

export default Search;
