import React, { useState } from "react";
import Quote from "../Quote/Quote";
import data from "../../data/data";
import Button from "../Button/Button";
import randomNumber from "../../utils/utils";
import TweetQuote from "../TweetQuote/TweetQuote";

export default function QuoteWrapper() {
  const [randomQuote, setRandomQuote] = useState(randomNumber(data.length));
  const [previousQuote, setPreviousQuote] = useState([]);

  const handleClick = () => {
    setPreviousQuote((prev) => [...prev, randomQuote]);
    setRandomQuote(randomNumber(data.length));
  };

  const handlePrevious = () => {
    setRandomQuote(previousQuote[previousQuote.length - 1]);
    setPreviousQuote((prev) => prev.slice(0, -1));
  };

  return (
    <div id="quote-box">
      <Quote
        quote={data[randomQuote].quote}
        author={data[randomQuote].author}
      />
      <div id="clickables">
        <Button onClick={handleClick} message="New quote" id="new-quote" />
        {previousQuote.length ? (
          <Button
            onClick={handlePrevious}
            message="Previous quote"
            id="previous"
          />
        ) : null}
        <TweetQuote />
      </div>
    </div>
  );
}
