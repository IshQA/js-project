document.addEventListener("DOMContentLoaded", function() {

const cars = [
    {
        imageSrc: "assets/car1.jpg",
        brand: "Toyota",
        power: "200 HP",
        year: "2020",
        mileage: "30,000 km",
        color: "Red",
        price: 25000
    },
    {
        imageSrc: "assets/car2.png",
        brand: "Honda",
        power: "180 HP",
        year: "2019",
        mileage: "20,000 km",
        color: "Blue",
        price: 22000
    },
    {
        imageSrc: "assets/car3.png",
        brand: "Ford",
        power: "250 HP",
        year: "2021",
        mileage: "10,000 km",
        color: "Black",
        price: 30000
    },
    {
        imageSrc: "assets/car4.jpg",
        brand: "Chevrolet",
        power: "220 HP",
        year: "2018",
        mileage: "50,000 km",
        color: "White",
        price: 20000
    },
    {
        imageSrc: "assets/car5.jpg",
        brand: "BMW",
        power: "300 HP",
        year: "2022",
        mileage: "5,000 km",
        color: "Silver",
        price: 35000
    },
    {
        imageSrc: "assets/car6.jpg",
        brand: "Maluch",
        power: "300 HP",
        year: "722",
        mileage: "305,000 km",
        color: "Red",
        price: 235000
    }
];

const cardContainer = document.getElementById("card-container");

cars.forEach((car, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = car.imageSrc;
    img.alt = "Car Image";
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const brand = document.createElement("h2");
    brand.textContent = car.brand;
    cardBody.appendChild(brand);

    const power = document.createElement("p");
    power.textContent = `Engine Power: ${car.power}`;
    cardBody.appendChild(power);

    const year = document.createElement("p");
    year.textContent = `Production Year: ${car.year}`;
    cardBody.appendChild(year);

    const mileage = document.createElement("p");
    mileage.textContent = `Car Mileage: ${car.mileage}`;
    cardBody.appendChild(mileage);

    const color = document.createElement("p");
    color.textContent = `Color: ${car.color}`;
    cardBody.appendChild(color);

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `Price: $${car.price}`;
    cardBody.appendChild(price);

    const buyButton = document.createElement("button");
    buyButton.className = "buy-button";
    buyButton.textContent = "Click to buy";
    buyButton.id = `buy-button-${index}`;
    buyButton.addEventListener("click", function() {
        const carPrice = Number(car.price);
        totalPrice = carPrice;
        selectedCarImage = car.imageSrc;
        updateTotal();
        showPurchase();
    });
    
    cardBody.appendChild(buyButton);

    card.appendChild(cardBody);

    cardContainer.appendChild(card);
});
});

const totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;
function updateTotal() {
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}
const summaryCar = document.getElementById("summary-car");

const firstAdditionalOption = document.getElementById('first-option');
const secondAdditionalOption = document.getElementById('second-option');
const thirdAdditionalOption = document.getElementById('third-option');
const summaryAdditionalOptions = document.getElementById('summary-additional-options-list');

function addListItems(option) {
    const li = document.createElement('li');
    li.textContent = option;
    summaryAdditionalOptions.appendChild(li);
}

firstAdditionalOption.addEventListener('change', function(){
    const firstOptionPrice = 500;
    if (this.checked) {
        totalPrice += firstOptionPrice;
        addListItems('Electric Mirrors');
    } else {
        totalPrice -= firstOptionPrice;
    }
    updateTotal();
})

secondAdditionalOption.addEventListener('change', function(){
    const secondOptionPrice = 130;
    if (this.checked) {
        totalPrice += secondOptionPrice;
        addListItems('GPS');
    } else {
        totalPrice -= secondOptionPrice;
    }
    updateTotal();
})

thirdAdditionalOption.addEventListener('change', function(){
    const thirdOptionPrice = 240;
    if (this.checked) {
        totalPrice += thirdOptionPrice;
        addListItems('Heated Seats');
    } else {
        totalPrice -= thirdOptionPrice;
    }
    updateTotal();
})
const checkboxes = document.querySelectorAll('input[name="options"]');
function uncheckAllCheckboxes() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
const goBackButton = document.getElementById("back-button");
goBackButton.addEventListener('click', function(){
    uncheckAllCheckboxes();
    totalPrice = 0
    updateTotal();
});

const form = document.getElementById('form');
const cars = document.getElementById('main');
const summary = document.getElementById('summary')

function showCars(){
    cars.classList.remove('not-display');
    form.classList.add('not-display');
    summary.classList.add('not-display');
};

function showPurchase(){
    cars.classList.add('not-display');
    form.classList.remove('not-display');
    summary.classList.add('not-display');
};

function showSummary(){
    summary.classList.remove('not-display');
    cars.classList.add('not-display');
    form.classList.add('not-display');
    summaryCar.src = selectedCarImage;
}

const summaryPriceElement = document.getElementById("summary-price");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    showSummary();
    updateTotal();
    let summaryPrice = totalPrice;
    summaryPriceElement.textContent = `Total: $${summaryPrice}`;
});


