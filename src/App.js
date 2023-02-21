import React, { useState } from "react";
import "./App.scss";

function App() {
  const [quote, setQuote] = useState(
    "If the wind will not serve, take to the oars."
  );
  const [author, setAuthor] = useState("Latin Proverb");
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    let randomInteger = Math.floor(3 * Math.random());
    setRandomNumber(randomInteger);
    if (randomInteger === 0) {
      setQuote(quotesArr[0].quote);
      setAuthor(quotesArr[0].author);
    }
    if (randomInteger === 1) {
      setQuote(quotesArr[1].quote);
      setAuthor(quotesArr[1].author);
    }
    if (randomInteger === 2) {
      setQuote(quotesArr[2].quote);
      setAuthor(quotesArr[2].author);
    }
  };

  const quotesArr = [
    {
      quote: `If the wind will not serve, take to the oars.`,
      author: "Latin Proverb",
    },
    {
      quote: `Believe you can and you’re halfway there`,
      author: "Theodore Roosevelt",
    },
    {
      quote: `Dreaming, after all, is a form of planning.`,
      author: "Gloria Steinem",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={() => generateRandomNumber()}>
          Generate Random Number
        </button>
        <p>"{quote}"</p>
        <p>- {author}</p>
      </header>
    </div>
  );
}

export default App;
