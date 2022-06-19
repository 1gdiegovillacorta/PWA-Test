//JavaScript

let DescriptionBox = document.getElementById("Description-Box");
let BookTitle = document.getElementById("Book-Title");
let BookCover = document.getElementById("Book-Cover");

function OpenPic2() {
    DescriptionBox.style.height = "95%";
    BookTitle.innerHTML = "The Invisible Man";
    BookCover.setAttribute("src", "./Images/The-Invisible-Man-Book-Cover.jpg");
}

function CloseDescriptionBox() {
    DescriptionBox.style.height = "0%";
    BookCover.setAttribute("src", "#");
}
