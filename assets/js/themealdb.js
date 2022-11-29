const ingredient = document.getElementById('meal');
const mealBtn = document.getElementById('searchBtnMeal');
// const cardText = document.querySelector('content');
// const recipeCloseBtn = document.getElementById('recipeCloseBtn');


function getDinnerIdea(e){
    e.preventDefault();
    const mealData = {

    }
    let searchInputTxt = document.getElementById('meal').value.trim();
    searchInputTxt = searchInputTxt.replace(" ", "_")
    console.log(searchInputTxt);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => {
        let res = response.json()
        console.log(res)
    return res
    })
    .then(data => {
        console.log(data)
        let html = "";
        console.log(data.meals)
        let randomIndex = Math.floor(Math.random() * data.meals.length)
        let selectedMeal = data.meals[randomIndex]
        // let mealData = getMealById(selectedMeal.idMeal)
        // console.log(mealData)
        let mealTitle = selectedMeal.strMeal;
        let mealSource = selectedMeal.strMealThumb;
        let mealIns = selectedMeal.idMeal;
        let mealIng = selectedMeal.strIngredient;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal.idMeal}`)
        .then((response) => response.json())
        .then(data => {
            document.getElementById("mealTitle").innerHTML = `Meal : ${mealTitle}`
            document.getElementById("mealImg").setAttribute("src", mealSource)
            document.getElementById("mealIns").innerHTML = `Instructions : ${mealIns}`
            document.getElementById("mealIng").innerHTML = `Recipe ingredients : ${mealIng}`
            console.log(data)            
        })
    })           
   
}
function getMeal(e){
    e.preventDefault();
    if(e.target.classList.contains('searchBtnMeal')){
        let mealItem = e.target.parentElement.parentElement
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealModal(data.meals))
    }
}

function getMealById(idMeal) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
}
function mealModal(meal){
    // console.log(meal);
    meal = meal[0];
    let html = `
    <div class="card col-9 mt-4">${meal.mealstrMeal}
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${meal.strMealThumb}" alt="meal recipe image">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title" id="mealTitle">Meal</h5>
                <p>${meal.strInstructions}</p>
                <p class="card-text"><small class="text-muted" id="mealIns">Instructions</small></p>
            </div>
        </div>
    </div>
</div>
    `;
ingredient.innerHTML = html;
ingredient.parentElement.classList.add('Show Recipe')

}


mealBtn.addEventListener('click', getDinnerIdea);
// ingredient.addEventListener('click', getMealByID);
// recipeCloseBtn.addEventListener('click', () => {
//     content.parentElement.classList.remove('show recipe');
// });