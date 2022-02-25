const foodContainer = document.getElementById('food-container');
const spinner = document.getElementById('spinner');
spinner.style.display ='none';
const errorMessage = document.getElementById('error-message');

const loadData =async () =>{
    
spinner.style.display ='block';
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    try{
        const res = await fetch(url);
        const data = await res.json();

        displayCatagory(data.categories);

    }catch(e){

    }

}

const loadFood = async (category) =>{
    
    
spinner.style.display ='block';
    foodContainer.textContent = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`;
    
    try{
        const res = await fetch(url);
        const data = await res.json();

        displayFoods(data.meals);

    }catch(e){

    }

}

const displayFoods = (foods) =>{
    
    
spinner.style.display ='none';
    
    foods.forEach(food => {
        
        console.log(food)
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML= `
        <div onclick="loadFood('${food.strMeal}')" class="card">
                    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${food.strMeal}</h5>
                      
                    </div>
                  </div>
                </div>
        `
        foodContainer.appendChild(div);
    });
    
spinner.style.display ='none';
}

const displayCatagory = (categories) =>{
    document.getElementById('title').innerText="Categories"
    errorMessage.classList.add('d-none');
    categories.forEach(category => {
        console.log(category)
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML= `
        <div onclick="loadFood('${category.strCategory}')" class="card">
                    <img src="${category.strCategoryThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${category.strCategory}</h5>
                      
                    </div>
                  </div>
                </div>
        `
        foodContainer.appendChild(div);
    });
    
spinner.style.display ='none';
}

const searchFood = () => {
    const inputField = document.getElementById('search-input');
    const inputValue = inputField.value;
    if(inputValue != ""){
        loadFood(inputValue);
    }else{
        errorMessage.classList.remove('d-none')
    }
}
loadData();