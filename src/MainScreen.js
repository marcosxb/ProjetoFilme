import React, { Component } from 'react';
import MovieDetails from './MovieDetails';
import MovieTable from './MovieTable';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovieId: null,
    };
  }

  handleDetailsClick = (movieId) => {
    this.setState({ selectedMovieId: movieId });
  };

  render() {
    const { selectedMovieId } = this.state;

    return (
      <div>
        {/* Renderiza a tabela com os filmes */}
        <MovieTable onDetailsClick={this.handleDetailsClick} />

        {/* Renderiza o componente MovieDetails quando um filme é selecionado */}
        {selectedMovieId && <MovieDetails movieId={selectedMovieId} />}
      </div>
    );
  }
}

export default MainScreen;
