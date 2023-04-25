// var bookImage = "book" + (i + 1);
// var imageRow = document.createElement("div");
// imageRow.classname = "row imageRow";

// document.createElement("img");
// img.src = data.item[i].volumeInfo.imageLinks.smallThumbnail;
// document.getElementsByClassName("imageRow")[i].appendChild(img);

function displaySearchResults(response) {
  let displayBook = document.querySelector("#display-book");
  let searchInput = document.querySelector("#searchinput").value;
  displayBook.innerHTML = `${searchInput}`;
}

function getData(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchinput").value;
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;
  axios.get(apiUrl).then(displaySearchResults);
}

let submitEvent = document.querySelector("#submit");
submitEvent.addEventListener("click", getData);

//work on this script - figure out how to display book cover photo & info
//example to check out: https://codepen.io/karenhenwood/pen/ybQYxO
