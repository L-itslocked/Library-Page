function displaySearchResults(response) {
  let displayBook = document.querySelector("#display-book");
  displayBook.innerHTML = response;
}

function getData(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchinput").value;
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;
  axios.get(apiUrl).then(displaySearchResults);
}

let submitEvent = document.querySelector("#submit");
submitEvent.addEventListener("click", getData);

//work on this script
//example to check out: https://codepen.io/karenhenwood/pen/ybQYxO
