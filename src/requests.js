const API_KEY = "0d378b104a9512ba1583a7c8d265770b";

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,    
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
    fetchScifi: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
    fetchThriller: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
    fetchMusic: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10402`,
    
};
export default requests;