let quotediv = document.querySelector("#quote");
let author = document.querySelector("#author");
let buttonQuote = document.querySelector("#btn-quote");

const url = "https://api.quotable.io/random";

function getQuote(){
    fetch(url)
    .then((data) => data.json())
    .then((quote)=>{
        quotediv.innerText = quote.content;
        author.innerText = quote.author;
    })
}

buttonQuote.addEventListener("click",getQuote);