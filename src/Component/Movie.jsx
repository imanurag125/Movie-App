import React from "react";

function Movie(props) {
  console.log(props.ele.Poster);
  return (
    <div className="movie">
      <img className="poster" src={props.ele.Poster} alt="img" />
      <h2 className="title">{props.ele.Title}</h2>
      <h3 className="year">{props.ele.Year}</h3>
    </div>
  );
}

export default Movie;
