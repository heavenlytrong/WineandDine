const ingredient = document.getElementById('meal');
const g
const
const
const

searchBtn.addEventListener('click', getDinnerIdea);

function getDinnerIdea(){
    let searchData = document.getElementById
    ('search-data').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })