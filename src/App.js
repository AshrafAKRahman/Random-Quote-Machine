import React, { useEffect, useState } from "react";
import "./App.scss";

let quoteDb =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
function App() {
  const [quote, setQuote] = useState("click to generate a random quote");
  const [author, setAuthor] = useState("Ashraf Rahman");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setQuotesArray(parsedJSON.quotes);
    console.log(parsedJSON);
  };

  useEffect(() => {
    fetchQuotes(quoteDb);
  }, [quoteDb]);

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random());
    setRandomNumber(randomInteger);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote No {randomNumber}</h1>
        <button onClick={() => getRandomQuote()}>Generate Random quote</button>
        <p>"{quote}"</p>
        <p>- {author}</p>
      </header>
    </div>
  );
}

export default App;
