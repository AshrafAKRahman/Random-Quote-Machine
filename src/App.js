import React, { useEffect, useState } from "react";
import "./App.scss";
import COLORS_ARRAY from "./colorsArray"

let quoteDb =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quote, setQuote] = useState("click to generate a random quote");
  const [author, setAuthor] = useState("Ashraf Rahman");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);
const [accentColor, setAccentColor] = useState("#F8BBD0")
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
    setAccentColor(COLORS_ARRAY[randomInteger])
    setRandomNumber(randomInteger);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  };

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:accentColor}}>
      <div id="quote-box" style={{color:accentColor}}>
        <h1>Random Quote No {randomNumber}</h1>
        <div id="text">
        <p>"{quote}"</p>
        </div>
        <div id="author">
        <p>- {author}</p>
        </div>
        <div className="button">
      <a href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)} id="tweet-quote" target="blank" style={{backgroundColor:accentColor}}>Tweet</a>   
        </div>

        <button  id="new-quote" style={{backgroundColor:accentColor}} onClick={() => getRandomQuote()}>Generate Random quote</button>
      </div>
      </header>
    </div>
  );
}

export default App;

