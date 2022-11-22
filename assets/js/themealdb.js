const ingredient = document.getElementById('meal');
const mealBtn = document.getElementById('searchBtnMeal');
const cardText = document.querySelector
// const
// const
// ingredient search input returns json info.
// const staticResponse = {"meals":[{"strMeal":"Chick-Fil-A Sandwich","strMealThumb"
// :"https:\/\/www.themealdb.com\/images\/media\/meals\/sbx7n71587673021.jpg","idMeal":"53016"},
// {"strMeal":"Chicken Couscous","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qxytrx1511304021.jpg",
// "idMeal":"52850"},{"strMeal":"Chicken Fajita Mac and Cheese","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qrqywr1503066605.jpg",
// "idMeal":"52818"},{"strMeal":"Chicken Ham and Leek Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xrrtss1511555269.jpg",
// "idMeal":"52875"},{"strMeal":"Chicken Quinoa Greek Salad","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/k29viq1585565980.jpg",
// "idMeal":"53011"},{"strMeal":"General Tso's Chicken","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1529444113.jpg",
// "idMeal":"52951"},{"strMeal":"Honey Balsamic Chicken with Crispy Broccoli & Potatoes","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/kvbotn1581012881.jpg",
// "idMeal":"52993"},{"strMeal":"Katsu Chicken curry","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/vwrpps1503068729.jpg",
// "idMeal":"52820"},{"strMeal":"Rappie Pie","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/ruwpww1511817242.jpg","idMeal":"52933"}]}
// // to return the instructions on how to meal prep.
// const mealinstructions ={"meals":[{"idMeal":"52772","strMeal":"Teriyaki Chicken Casserole","strDrinkAlternate":null,"strCategory":"Chicken","strArea":"Japanese","strInstructions":
// "Preheat oven to 350\u00b0 F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, \u00bd cup water, brown sugar, ginger and garlic in a small saucepan and cover. 
// Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. 
// Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. 
// Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile,
//  steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving.
//   Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
//   "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wvpsxx1468256321.jpg","strTags":"Meat,Casserole","strYoutube":"https:\/\/www.youtube.com\/watch?v=4aZr5hZXP_s","strIngredient1":"soy sauce","strIngredient2":"water",
//   "strIngredient3":"brown sugar","strIngredient4":"ground ginger","strIngredient5":"minced garlic","strIngredient6":"cornstarch","strIngredient7":"chicken breasts","strIngredient8":"stir-fry vegetables","strIngredient9":"brown rice",
//   "strIngredient10":"","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":null,"strIngredient17":null,"strIngredient18":null,"strIngredient19":null,
//   "strIngredient20":null,"strMeasure1":"3\/4 cup","strMeasure2":"1\/2 cup","strMeasure3":"1\/4 cup","strMeasure4":"1\/2 teaspoon","strMeasure5":"1\/2 teaspoon","strMeasure6":"4 Tablespoons","strMeasure7":"2","strMeasure8":"1 (12 oz.)","strMeasure9":"3 cups",
//   "strMeasure10":"","strMeasure11":"","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":null,"strMeasure17":null,"strMeasure18":null,"strMeasure19":null,"strMeasure20":null,"strSource":null,"strImageSource":null,
//   "strCreativeCommonsConfirmed":null,"dateModified":null}]}

searchBtn.addEventListener('click', getDinnerIdea);
mealList.addEventListener('click', getMealIns);

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

    function getMealIns(e){
        e.preventDefault();
        if(e.target.classList.contains('searchBtnMeal')){
            let mealItem = e.target.parentElement.parentElement;
        }
    }
    
    mealList.innerHTML = html;
    })
}
function getDinnerIdea(e){
    e.preventDefault();
    if(e.target.classList.contains('searchBtnMeal')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`);
        .then(response => response.json())
        .then(data => mealModal(data.meals));
    }
}

function mealModal(meal){
    
}

