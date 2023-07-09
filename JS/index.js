let Price = document.getElementById("price");
let Table = document.getElementById("table");

Table.style.display = 'none';

Price.addEventListener("click", function () {
    Table.style.display = 'block';
    Price.style.display = 'none';
})