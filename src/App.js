import logo from "./logo.svg";
import "./App.css";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";
import LikedButton from "./components/LikedButton";
import CounterLong from "./components/CounterLong";
import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Title content="THIS IS THE TITLE OF THE LIKE COUNTER:" />
      <LikeCounter />
      <CounterLong />
      <LikedButton />
      <AwesomeAnimals />
      <ArticleList />
    </div>
  );
}

export default App;
