import React from "react";
import "./App.css";
import Row from "./Row";
import Requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchingNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchingTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchToRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMoives} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={Requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
