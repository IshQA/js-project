document.addEventListener("DOMContentLoaded", function() {

const cars = [
    {
        imageSrc: "assets/car1.jpg",
        brand: "Toyota",
        power: "200 HP",
        year: "2020",
        mileage: "30,000 km",
        color: "Red",
        price: "$25,000"
    },
    {
        imageSrc: "assets/car2.png",
        brand: "Honda",
        power: "180 HP",
        year: "2019",
        mileage: "20,000 km",
        color: "Blue",
        price: "$22,000"
    },
    {
        imageSrc: "assets/car3.png",
        brand: "Ford",
        power: "250 HP",
        year: "2021",
        mileage: "10,000 km",
        color: "Black",
        price: "$30,000"
    },
    {
        imageSrc: "assets/car4.jpg",
        brand: "Chevrolet",
        power: "220 HP",
        year: "2018",
        mileage: "50,000 km",
        color: "White",
        price: "$20,000"
    },
    {
        imageSrc: "assets/car5.jpg",
        brand: "BMW",
        power: "300 HP",
        year: "2022",
        mileage: "5,000 km",
        color: "Silver",
        price: "$35,000"
    },
    {
        imageSrc: "assets/car6.jpg",
        brand: "Maluch",
        power: "300 HP",
        year: "722",
        mileage: "305,000 km",
        color: "Red",
        price: "$235,000"
    }
];

const cardContainer = document.getElementById("card-container");

cars.forEach(car => {
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
    price.textContent = `Price: ${car.price}`;
    cardBody.appendChild(price);

    const buyButton = document.createElement("button");
    buyButton.className = "buy-button";
    buyButton.textContent = "Click to buy";
    cardBody.appendChild(buyButton);

    card.appendChild(cardBody);

    cardContainer.appendChild(card);
});
});