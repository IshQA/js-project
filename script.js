document.addEventListener("DOMContentLoaded", function() {

    const carDetails = {
        // imageSrc: "car-image.jpg",
        brand: "Toyota",
        power: "200 HP",
        year: "2020",
        mileage: "30,000 km",
        color: "Red",
        price: "$25,000"
    };

    // document.getElementById("car-image").src = carDetails.imageSrc;
    document.getElementById("car-brand").textContent = `Brand: ${carDetails.brand}`;
    document.getElementById("car-power").textContent = `Engine Power: ${carDetails.power}`;
    document.getElementById("car-year").textContent = `Production Year: ${carDetails.year}`;
    document.getElementById("car-mileage").textContent = `Car Mileage: ${carDetails.mileage}`;
    document.getElementById("car-color").textContent = `Color: ${carDetails.color}`;
    document.getElementById("car-price").textContent = `Price: ${carDetails.price}`;
});
