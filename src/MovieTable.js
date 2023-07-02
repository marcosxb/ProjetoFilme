import React, { Component } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';

class MovieTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 0,
      rowsPerPage: 10,
    };
  }

  componentDidMount() {
    axios.get('https://imdb-api.com/en/API/Top250Movies/k_6bwiytxd')
      .then(response => {
        this.setState({ movies: response.data.items });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10), page: 0 });
  };

  handleDetailsClick = (movieId) => {
    if (this.props.onDetailsClick) {
      this.props.onDetailsClick(movieId);
    }
  };

  render() {
    const { movies, page, rowsPerPage } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, movies.length - page * rowsPerPage);

    return (
      <div style={{ marginBottom: '80px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Posição</TableCell>
                <TableCell>Título Original</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((movie, index) => (
                  <TableRow key={movie.id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                    <TableCell style={{ borderRight: '1px solid black' }}>{movie.rank}</TableCell>
                    <TableCell style={{ borderRight: '1px solid black' }}>{movie.title}</TableCell>
                    <TableCell style={{ borderRight: '1px solid black' }}>
                      <Link to={`/details/${movie.id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                          Detalhes
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={3} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[0, 10]}
          component="div"
          count={movies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={this.handleChangePage}
          onRowsPerPageChange={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

export default MovieTable;
