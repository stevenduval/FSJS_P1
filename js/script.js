// global var to initialize timer
let timer;

// global var for array to store index which quotes have been seen
let quotesGiven = [];

// quote array of objects
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
const getRandomQuote = () => {
  let quotesLength = quotes.length;
  let quotesGivenLength = quotesGiven.length;
  let quotesGivenLastItem = quotesGiven[quotesGivenLength - 1];
  let randNum = getRandNum(quotes.length);
  // clear quotesGiven array when all items have been cycled through and new quote isnt the same as last quote shown
  if ( quotesGivenLength === quotesLength && quotesGivenLastItem !== randNum ) { quotesGiven = []; } 
  // when current quote hasnt been displayed, push index of quote displayed and then return quote to display
  if ( quotesGiven.indexOf(randNum) === -1 ) { 
    quotesGiven.push(randNum);
    return quotes[randNum]; 
  }
  // recursive call to getRandomQuote() when above conditions dont return anything
  return getRandomQuote();
};

// function to return random rgb value
const getRGB = () => `rgb(${getRandNum(255)}, ${getRandNum(255)}, ${getRandNum(255)})`;

const printQuote = () => {
  // clear interval
  clearInterval(timer);
  // get element to insert quotes into and get random quote
  const quoteBox = document.querySelector('#quote-box');
  let quote = getRandomQuote();
  console.log(quote);
  // string to insert into quote box
  let string = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
      ${ ((quote.citation) ? `<span class="citation">${quote.citation}</span>`: '') }
      ${ ((quote.year) ? `<span class="year">${quote.year} </span>`: '') }
    </p>
  `;
  // change backgroundColor
  document.body.style.backgroundColor = getRGB();
  // insert quote into quotebox
  quoteBox.innerHTML = string;
  // run printQuote after 4 seconds
  timer = setInterval(printQuote, 4000);
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);