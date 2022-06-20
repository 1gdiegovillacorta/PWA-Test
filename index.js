//JavaScript

let DescriptionBox = document.getElementById("Description-Box");
let BookTitle = document.getElementById("Book-Title");
let BookCover = document.getElementById("Book-Cover");

function OpenPic2() {
    DescriptionBox.style.height = "100%"
    BookTitle.innerHTML = "The Invisible Man";
    //BookTitle.setAttribute("class", "Book-Title animate__bounceIn");
    BookCover.setAttribute("class", "Book-Cover animate__bounceIn");
    BookCover.setAttribute("src", "./Images/The-Invisible-Man-Book-Cover.jpg");
    document.getElementById("Read-Button").setAttribute("class", "Read-Button animate__bounceIn");
}

function CloseDescriptionBox() {
    DescriptionBox.style.height = "0%";
    //BookTitle.setAttribute("class", "");
    BookCover.setAttribute("src", "");
    BookCover.setAttribute("class", "");
    document.getElementById("Read-Button").setAttribute("class", "Read-Button");
}
