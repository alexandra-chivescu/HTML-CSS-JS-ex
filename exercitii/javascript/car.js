var car = {
    make: "Fiat",
    model: 500,
    year: 1960,
    color: "red",
    mileage: 2000,
    drive: function(distance) {
        this.mileage += distance; 
    }
}

car.drive(100); 