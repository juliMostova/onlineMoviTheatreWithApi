import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  REACT_APP_KEY,
  img_500,
  img_300,
  unavailable,
} from "../../config/config";
import Carousel from "../Carousel/Carousel";
import "./ContentModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  height: "85%",
  bgcolor: "#39445a",
  border: "2px solid #fff",
  borderRadius: 8,
  boxShadow: 14,
  p: 4,
};

export default function ContentModal({ id, children, media_type }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const apiMovieModal = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI",
      },
    };

    await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${REACT_APP_KEY}&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setContent(data);
      })
      .catch((err) => console.error(err));
  };

  const apiVideo = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI",
      },
    };

    await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${REACT_APP_KEY}&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.results[0]?.key);
        setVideo(data.results[0]?.key);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    apiMovieModal();
    apiVideo();

    return () => {
      setContent([]);
      setVideo([]);
    };
  }, []);

  return (
    <div>
      <div className="media" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {content && (
            <div className="ContentModal">
              <img 
                src={
                  content.poster_path
                    ? `${img_500}/${content.poster_path}`
                    : unavailable
                }
                className="ContentModal_poster"
              ></img>

              <img
                src={
                  content.backdrop_path
                    ? `${img_300}/${content.backdrop_path}`
                    : unavailable
                }
                className="ContentModal_PosterHorizontal"
              ></img>
              <div className="Content_about">
                <div className="content_Title">
                  {content.name || content.title}(
                  {(
                    content.release_date ||
                    content.last_air_date ||
                    "---"
                  ).substring(0, 4)}
                  )
                </div>
                <div className="tagline">
                  <i>{content.tagline}</i>
                </div>
                <div className="contentDescription">{content.overview}</div>
                <Carousel id={id} media_type={media_type} />
                <Button
                  className="btnClass"
                  target="_blank"
                  href={`https://www.youtube.com/watch?v=${video}`}
                  variant="contained"
                  startIcon={<YouTubeIcon />}
                >
                  {" "}
                  Watch the trailer
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

