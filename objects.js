var Animal = function(species, legs, color, mammal) {
    this.species = species;
    this.legs = legs;
    this.color = color;
    this.mammal = mammal;
};


Animal.prototype.displayAnimal = function() {
    document.write("<h1>" + this.species + "</h1><br> <p> Number of Legs: " + this.legs +
        "<br> Color: "+ this.color +"<br>Is it a mammal?: "+ this.mammal +"</p>");
    this.launchAnimal();
};

Animal.prototype.launchAnimal = function () {
    document.write("<h3>Fun fact</h3><br><p>blah blah blah</p>");

};



function Dog(species, legs, color, mammal, weight) {

    Animal.call(this, species, legs, color, mammal);

    this.weight = weight;
}


Dog.prototype = Object.create(Animal.prototype);


Dog.prototype.constructor = Dog;


Dog.prototype.displayAnimal = function() {
    document.write("<h1>" + this.species + "</h1><br> <p> Number of Legs: " + this.legs +
        "<br> Color: "+ this.color +"<br>Is it a mammal?: "+ this.mammal + "Weight: " + this.weight +"</p>");
    this.launchAnimal();
};


Dog.prototype.launchAnimal = function () {
    document.write("<h3>Fun fact</h3><br><p>blah blah blah</p>");

};


function Octopus(species, legs, color, mammal, habitat) {

    Animal.call(this, species, legs, color, mammal);

    this.habitat = habitat;
}


Octopus.prototype = Object.create(Animal.prototype);


Octopus.prototype.constructor = Octopus;


Octopus.prototype.displayAnimal = function() {
    document.write("<h1>" + this.species + "</h1><br> <p> Number of Legs: " + this.legs +
        "<br> Color: "+ this.color +"<br>Is it a mammal?: "+ this.mammal + "Habitat: " + this.habitat +"</p>");

};



function Kangaroo(species, legs, color, mammal, sex) {

    Animal.call(this, species, legs, color, mammal);

    this.sex = sex;
}


Kangaroo.prototype = Object.create(Animal.prototype);


Kangaroo.prototype.constructor = Kangaroo;


Kangaroo.prototype.displayAnimal = function() {
    document.write("<h1>" + this.species + "</h1><br> <p> Number of Legs: " + this.legs +
        "<br> Color: "+ this.color +"<br>Is it a mammal?: "+ this.mammal + "Gender: " + this.sex +"</p>");
};



function main() {

    var animalArray =[];

    animalArray[0] =  new Animal("");

    animalArray[1] = new Dog("Dog", 4, "Variety", true, 40);

    animalArray[2] = new Octopus("Octopus", 8, "Changes", false, "Ocean");

    animalArray[3] = new Kangaroo("Kangaroo", 3, "Brown", true, "Female");

    for (var i = 0; i < animalArray.length; i++){
        animalArray[i].displayAnimal();
    }


}


