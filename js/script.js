const quotes = [
  {
    quote: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Goblet of Fire',
    year: 2000
  },
  {
    quote: 'I have had all the disadvantages required for success.',
    source: 'Larry Ellison'
  },
  {
    quote: 'Most people overestimate what they can do in one year and underestimate what they can do in ten years.',
    source: 'Bill Gates',
    tags: 'inspirational, life'
  },
  {
    quote: 'DNA is like a computer program but far, far more advanced than any software ever created.',
    source: 'Bill Gates',
    citation: 'The Road Ahead',
    year: 1995,
    tags: 'DNA, software, science'
  },
  {
    quote: 'Never trust a computer you can\'t throw out a window',
    source: 'Steve Wozniak'
  },
];

// function to get random Number 
const getRandNum = (max) => Math.floor(Math.random() * max);

// function to get random quote
const getRandomQuote = () => quotes[getRandNum(quotes.length)];

// function to return random rgb value
const getRGB = () => `rgb(${getRandNum(255)}, ${getRandNum(255)}, ${getRandNum(255)})`;


const printQuote = () => {
  // get element to insert quotes into and get random quote
  const quoteBox = document.querySelector('#quote-box');
  let quote = getRandomQuote();
  // string to insert into quote box
  let string = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
      ${ ((quote.citation) ? `<span class="citation">${quote.citation}</span>`: '' ) }
      ${ ((quote.year) ? `<span class="year">${quote.year} </span>`: '') }
    </p>
  `;
  // change backgroundColor
  document.body.style.backgroundColor = getRGB();
  // insert quote into quotebox
  quoteBox.innerHTML = string;
  // run printQuote after 4 seconds
  setTimeout(printQuote, 4000)
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);