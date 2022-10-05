import Header from "./Component/Header";
import Movie from "./Component/Movie";
import movie from "./Component/movie.json";
import "./App.css";

function App() {
  // console.log(movie);
  const ele = movie.map((ele, id) => <Movie key={id} ele={ele} />);
  // console.log(ele);
  return (
    <div className="App">
      <Header />
      <div className="main">{ele}</div>
    </div>
  );
}

export default App;
