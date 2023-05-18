//car construction function 
function car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//car prototype
car.prototype.getDescription = function() {
    return `make: ${this.make}, model: ${this.model}, year: ${this.year}`;
}

//electric car subclass
function electricCar(make,model,year,range){
    car.call(this,make,model,year);
    this.range = range;
}

electricCar.prototype = Object.create(car.prototype);

electricCar.prototype.getDescription = function() {
    return `${car.prototype.getDescription.call(this)}, range: ${this.range} miles`;
}

const myElectricCar = new electricCar ("Tesla","Model s",2019,300);

console.log(myElectricCar.getDescription());