const api_url = "https://dummyjson.com/quotes/random";

const quotes = document.querySelector("#quoteDisplay");
const authorName = document.querySelector("#author");

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quotes.innerHTML = data.quote;
    authorName.innerHTML = data.author;
}

getquote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + " ~ " + authorName.innerHTML, "Tweet Window","width=650, height=400" )
}

