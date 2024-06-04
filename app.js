let content = document.querySelector(".main-content");
let authors = document.querySelector(".main-author");
let btn = document.querySelector(".btn-quote");

const quotes = [
  {
    quote: "The purpose of our life is to be happy",
    author: "Dalai Lama",
  },
  {
    quote: "Get busy living or get die busying",
    author: "Stephen King",
  },
  {
    quote:
      "Many of life's failures are people who did not realise how close they were to success when they gave up.",
    author: "Thomas A.Edison",
  },
  {
    quote:
      "If you want to live a happy life,tie to a goal not to people or things",
    author: "Albert Einstein",
  },
  {
    quote: "In order to write about life first you must live it",
    author: "Hernest Hemingway",
  },
  {
    quote: "Not how long, but how will you have lived is the main thing",
    author: "seneca",
  },
  {
    quote:
      "The big lesson in life,baby,is never be a scared of anyone or anything",
    author: "Frank Sinatra",
  },
  {
    quote:
      "The whole secret of a successful life is to find out what is once's destiny to do,and then do it",
    author: "Henry Ford",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  content.innerText = quotes[random].quote;
  authors.innerText = quotes[random].author;
});
