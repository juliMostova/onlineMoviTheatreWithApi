import React from "react";
import Pagination from "@mui/material/Pagination";

function CustomPagination({ setPage, numOfPage = 10 }) {
  function hundleChange(page) {
    setPage(page);
    window.scroll(0, 0);
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Pagination
        count={numOfPage}
        color="primary"
        onChange={(e) => hundleChange(e.target.textContent)}
      />
    </div>
  );
}

export default CustomPagination;
