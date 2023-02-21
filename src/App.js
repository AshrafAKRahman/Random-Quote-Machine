import "./App.scss";

function App() {
  let quote = "If the wind will not serve, take to the oars.";
  let author = "Latin Proverb";
  return (
    <div className="App">
      <p>"{quote}"</p>
      <p>- {author}</p>
    </div>
  );
}

export default App;
