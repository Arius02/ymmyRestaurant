var meals = ["pizza", "pasta", "beef", "salad", "chicken", "duck", "cake"];
var discDish = ["A great meal you will eat your fingers after it ","Believe me, your mother-in-law loves you, yalla taste my handicrafts","The sweetest meal for the sweetest customer deserves your mouth wallahy", "Come on, ask for a thousand bliss and healing, wherever it goes, it will satisfy you" ] ;
var price = [11,32,3.5,22.5 ,10,5 ,5,55.99,60,12.5,5,5,3.5 ,5.99, 15]
var great = `
            <i class="filled golden fas fa-star"></i>
            <i class="filled golden fas fa-star"></i>
            <i class="filled golden fas fa-star"></i>
            <i class="filled golden fas fa-star"></i>
            <i class="fas filled golden fa-star"></i>
          `;
var veryGood = `
            <i class="filled golden fas fa-star"></i>
            <i class="filled golden fas fa-star"></i>
            <i class="filled golden fas fa-star"></i>
            <i class="fas filled golden fa-star"></i>
            <i class="fa-regular golden fa-star-half-stroke"></i>
          `;
var userSignInfoBag =[]
if(JSON.parse(localStorage.getItem("log info")) != null){
  userSignInfoBag = JSON.parse(localStorage.getItem("log info"))
}
var inger =document.getElementById("ingredients");
var passingVar ="";
document.getElementById("getRandom").addEventListener("click", function(){
  getRandom()
})
document.getElementById("btn-rand").addEventListener("click", function(){
  getRandom()
})
      setTimeout(() => {
        alert(` Welcome to DFC ${userSignInfoBag[0].name} "it's finger lickin good"` )
      }, 1000);
async function getRandom(){
  var randomMeal = meals.length
  var todayMeal = Math.floor(Math.random()*randomMeal);
  var req = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meals[todayMeal]}`)
  var mealRes = await req.json()
  console.log(mealRes.recipes)
  var dish = mealRes.recipes
  var randomDish = dish.length
  var todayDish = Math.floor(Math.random()*randomDish);
 document.getElementById("todayDish").innerHTML = `
        <div class="col-lg-6">
          <div>
            <img src="${dish[todayDish].image_url}" class="w-100 rounded-1" alt="">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mt-md-4">
            <h2 class="fs-1 fw-bold">${dish[todayDish].title}</h2>
          <div class="fs-5 mt-2">
            ${dish[todayDish].social_rank==100 ? great :  veryGood }
          </div>
          <p class="fs-5 mt-4 text-muted">${discDish[Math.floor(Math.random()*discDish.length)]}</p>
          <p class="fw-bold mcmc">Fast, Clean, Save</p>
          <div class=" text-lg-start text-center">
            <button class="bg-danger  btn border-0 text-white px-3 fs-5 mt-4  rounded-pill" href="#">Order Now</button>
            <button class="bg-info ms-3 btn border-0 text-white px-4 fs-5 mt-4 rounded-pill" id="recipes" href="#">Recipes</button>
            </div>
          </div>
        </div>`;
        passingVar = dish[todayDish].recipe_id
        var getRecipes= document.getElementById("recipes")
        getRecipes.addEventListener("click", function(){
        inger.classList.remove("d-none")
        getRandomRecipe()
        })

}

inger.addEventListener("click", function(e){
  
  if(e.target ==inger){
    inger.classList.add("d-none")
  }
})

document.getElementById("getCopy").addEventListener("click", function(){
  document.getElementById("getCopy").innerHTML= "Coming Soon.."
    setTimeout(() => {
      document.getElementById("getCopy").innerHTML= `<i class="fa-regular fa-clipboard fs-4">`
  }, 2000);
})

async function getRandomRecipe(){
        var reqR = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${passingVar}`)
        var resR = await reqR.json()
        var ingredients=  resR.recipe.ingredients
        var html= ``
        for(i=0 ; i<ingredients.length ; i++){
          html +=  `<li>${ingredients[i]}</li>`
          document.getElementById("ingredientsUl").innerHTML = html
        }
}


document.getElementById("Pizza").addEventListener("click", function(){
  getMenu("pizza")
})
document.getElementById("beef").addEventListener("click", function(){
  getMenu("beef")
})
document.getElementById("pasta").addEventListener("click", function(){
  getMenu("pasta")
})
document.getElementById("Chicken").addEventListener("click", function(){
  getMenu("Chicken")
})
document.getElementById("salad").addEventListener("click", function(){
  getMenu("salad")
})
document.getElementById("cakes").addEventListener("click", function(){
  getMenu("cake")
})
var passRecipe = "";
async function getMenu(item){
  var req = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${item}` );
  var res = await req.json();
  var dish = res.recipes
  var randomDish = dish.length
  var todayDish = Math.floor(Math.random()*randomDish);
  console.log(dish)
  html = ``
  for(i=0 ; i < dish.length ; i++){
    html += `<div class="col-lg-4 col-md-6">
            <div>
              <div class="card position-relative">
                <img src="${dish[i].image_url}" class="card-img-top w-100 fixedHieght"  alt="">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title">${dish[i].title}</h5>
                      <p class="fs-4 fw-semibold danger">${price[Math.floor(Math.random()*price.length)]}$</p>
                    </div>
                  <div>${dish[todayDish].social_rank==100 ? great :  veryGood }</div>
                  <p class="card-text">
                  ${discDish[Math.floor(Math.random()*discDish.length)]}</p>
                  <div class="d-flex justify-content-evenly align-items-end">
                  <button  class="btn myDanger py-1  rounded-pill position-absolute">Order Now</button>
                  <button  class="btn btn-info rounded-pill px-4 position-absolute text-white recipesMenu" onclick="recipe_Id('${dish[i].recipe_id}')"  >Recipes</button></div>
                </div>
              </div>
            </div>
          </div>`
    document.getElementById("menu").innerHTML = html
  }
}

var ingerMenu = document.getElementById("ingredientsOfMenu");

ingerMenu.addEventListener("click", function(e){
  if(e.target ==ingerMenu){
      ingerMenu.classList.add("d-none") }
})
function recipe_Id(item){
  ingerMenu.classList.remove("d-none")
   async function getRecipes(){
        var reqR = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${item}`)
        var resR = await reqR.json()
        var ingredients=  resR.recipe.ingredients
        console.log(ingredients)
        var html= ``
        for(i=0 ; i<ingredients.length ; i++){
          html +=  `<li>${ingredients[i]}</li>`
          document.getElementById("ingredientsUlMenu").innerHTML = html
        }
}
getRecipes()
}
