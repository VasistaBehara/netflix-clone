import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav"

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner/>
      <Row title = "Netflix originals"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title = "Trending Now"       fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated"          fetchUrl={requests.fetchTopRated}/>
      <Row title = "Popular"            fetchUrl={requests.fetchPopular}/>
      <Row title = "Action Movies"      fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies"      fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies"      fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies"     fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentaries"      fetchUrl={requests.fetchDocumentaries}/>
      <Row title = "Crime"              fetchUrl={requests.fetchCrime}/>
      <Row title = "Drama"              fetchUrl={requests.fetchDrama}/>
      <Row title = "Fantasy"            fetchUrl={requests.fetchFantasy}/>
      <Row title = "Science Fiction"    fetchUrl={requests.fetchScifi}/>
      <Row title = "Thriller"           fetchUrl={requests.fetchThriller}/>
      <Row title = "Music"              fetchUrl={requests.fetchMusic}/>
    </div>
  );
}

export default App;
