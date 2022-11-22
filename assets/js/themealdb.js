const ingredient = document.getElementById('meal');
const mealBtn = document.getElementById('searchBtnMeal');
const cardText = document.querySelector('content');
const recipeCloseBtn = document.getElementById('recipeCloseBtn');

mealBtn.addEventListener('click', getDinnerIdea);
ingredient.addEventListener('click', getMealIns);
recipeCloseBtn.addEventListener('click', () => {
    content.parentElement.classList.remove('show recipe');
});

function getDinnerIdea(){
    let searchInputTxt = document.getElementById
    ('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data.meals){
            data.meals.forEach(meal => {    
            html += `
            <div class="card col-9 mt-4" data-id ="${meal.idMeal}">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${meal.strMealThumb}" class="img-fluid rounded-start" id="mealImg" alt="meal recipe image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5${mealstrMeal}</h5>
                            <p class="card-text" id="mealIng">Recipe ingredients</p>
                            <p class="card-text"><small class="text-muted" id="mealIns">Instructions</small></p>
                         </div>
                     </div>
                    `;
        });
        mealList.classList.remove('not found')
    } else{
        html = "No Matches"
        mealList.classList.add('not found');
    }

    ingredient.innerHTML = html;
    })
}
function getMealIns(e){
    e.preventDefault();
    if(e.target.classList.contains('searchBtnMeal')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`);
        .then(response => response.json())
        .then(data => mealModal(data.meals));
    }
}

function mealModal(meal){
    console.log(meal);
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

