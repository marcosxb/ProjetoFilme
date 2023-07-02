  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import MainScreen from './MainScreen';
  import MovieDetails from './MovieDetails';
  import Footer from './Footer';
  import Cabecalho from './Cabecalho';

  function App() {
    return (
      <Router>
        <div className="App">
         <Cabecalho />
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/details/:movieId" element={<MovieDetails />} />
          </Routes>
           <Footer />
        </div>
      </Router>
    );
  }

  export default App;
