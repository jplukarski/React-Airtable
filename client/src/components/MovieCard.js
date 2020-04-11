import React from 'react';


const MovieCard = ({ title, year, description, imageURL }) => (
    <div className="card">
      <img className="card-img-top" src={imageURL[0].url} alt="Movie poster" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{year}</small>
        </p>
      </div>
    </div>
  );

export default MovieCard