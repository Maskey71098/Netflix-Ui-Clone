import './App.css';
import requests from './requests';
import Row from './Row.js';

//3d78b4595430d1139de9e2c81172036d  -- api key
function App() {
  return (
    <div className="App">
      <h1>Netflix Ui clone</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
