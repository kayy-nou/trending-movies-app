import React, { useEffect, useRef, useState } from 'react';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
import { getTrendingMovies, updateSearchCount } from './appwrite';
import MoviecardShimmer from './components/MoviecardShimmer';
import TrendingMoviesShimmer from './components/TrendingMoviesShimmer';
import NotFoundAnimation from './components/NotFoundAnimation';
import Modal from './components/Modal';
import ModalShimmer from './components/ModalShimmer';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerms, setDebounceSearchTerms] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isTrendingLoading, setIsTrendingLoading] = useState(true);
  const scrollRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [notFoundMovie, setNotFoundMovie] = useState(false);
  const isFirstRender = useRef(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [videos, setVideos] = useState([]);


  useDebounce(() => setDebounceSearchTerms(searchTerm), 800, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();

      if (data.Response === 'false') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }

      if (data.results.length === 0) {
        setNotFoundMovie(true);
        setErrorMessage('Movie not found. Please try another movie.');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    setIsTrendingLoading(true);
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies || []);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    } finally {
      setIsTrendingLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debounceSearchTerms);
  }, [debounceSearchTerms]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!isLoading && debounceSearchTerms) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isLoading, debounceSearchTerms]);

  const openModal = async (movie) => {
    setIsLoading(true); 
    setIsModalOpen(true); 
    setSelectedMovie(null); 
    setVideos([]);

    try {
      const endpoint = movie
        ? `${API_BASE_URL}/movie/${movie.id}?api_key=${API_KEY}`
        : null

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      console.log(data);

      const videosEndpoint = movie
        ? `${API_BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`
        : null
      
      const videosResponse = await fetch(videosEndpoint, API_OPTIONS);
      if (!videosResponse.ok) {
        throw new Error('Failed to fetch videos');
      }

      const videosData = await videosResponse.json();
      console.log(videosData);

      setTimeout(() => {
        setSelectedMovie(data); 
        setVideos(videosData.results);
        setIsLoading(false); 
        }, 800); 
      
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <main className='relative'>
      <div className="pattern" />

      <div className="wrapper">

        <header>
          <img src="../src/assets/hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy Without a Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
        <section className="trending">
          <h2>Trending Movies</h2>
          <ul>
            {isTrendingLoading ? (
              trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <TrendingMoviesShimmer />
                </li>
              ))
            ) : (
              trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))
            )}
          </ul>
        </section>
        )}

        <div ref={scrollRef} className="scroll-anchor" />

        <section className="all-movies">
          {searchTerm ? <h2>Results</h2> : <h2>All Movies</h2>}
          {isLoading ? (
            <ul>
              {Array.from({ length: 8 }).map((_, i) => (
                <MoviecardShimmer key={i} />
              ))}
            </ul>
          ) : errorMessage ? (
            <>
              <div ref={scrollRef} className="scroll-anchor" />
              <NotFoundAnimation />
              <p className="text-gradient text-center text-2xl">{errorMessage}</p>
            </>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard 
                key={movie.id} 
                movie={movie} 
                onClick={() => openModal(movie)} />
              ))}
            </ul>
          )}            
        </section>
        
        {isModalOpen && (
          <div
            className='fixed left-0 right-0 top-0 z-[1055] max-w-12/12 h-full modal-overlay overflow-auto'
            onClick={closeModal}
          >
            {isLoading ? (
              <ModalShimmer />
            ) : selectedMovie ? (
              <Modal movie={selectedMovie} closeModal={closeModal} videos={videos} />
            ) : null}
          </div>
        )}
      </div>
     
    </main>
  );
};

export default App;
