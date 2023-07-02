import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://imdb-api.com/br/API/Title/k_6bwiytxd/${movieId}`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

   return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={movieDetails.image}
        alt={movieDetails.title}
        style={{ maxWidth: '400px', maxHeight: '400px', margin: '0 auto', marginTop: '20px' }}
      />
      <div style={{ margin: '20px auto' }}>
        <div>
          <strong>ID:</strong> {movieDetails.id}
        </div>
        <div>
          <strong>Tipo:</strong> {movieDetails.type}
        </div>
        <div>
          <strong>Titulo:</strong> {movieDetails.title}
        </div>
        <div>
          <strong>Titulo Completo:</strong> {movieDetails.fullTitle}
        </div>
        <div>
          <strong>Ano:</strong> {movieDetails.year}
        </div>
        <div>
          <strong>Enredo:</strong> {movieDetails.plot}
        </div>
        <div>
          <strong>Nota IMDb:</strong> {movieDetails.imDbRating}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
