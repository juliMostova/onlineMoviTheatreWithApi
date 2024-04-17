import { Routes, Route } from "react-router-dom";
import SimpleBottomNavigation from "./component/Navigation";
import "./App.css";

import Header from "./component/Header/Header";
import Movies from "./component/Pages/Movies/Movies";
import Search from "./component/Pages/Search/Search";
import Series from "./component/Pages/Series/Series";
import Trending from "./component/Pages/Trending/Trending";

function App() {
  return (
    <>
  
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <SimpleBottomNavigation />
  
    </>
  );
}

export default App;
