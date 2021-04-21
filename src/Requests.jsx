const API_KEY = "6e71548abbb8b5d8478a3709eedd69e7";

const Requests = {
  fetchingTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchingNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchToRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMoives: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default Requests;
