function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function dog(breed, color, age) {
    this.dog_breed = breed;
    this.dog_color = color;
    this.dog_age = age;
}
var Steve = new dog("French Bulldog", "blue", 5);
var Mike = new dog("Boston Terrier", "black and white", 12);
var Allen = new dog("Lab", "yellow", 2);

function my_function() {
    document.getElementById("New_and_This").innerHTML =
    "Steve owns a " + Steve.dog_color + " " + Steve.dog_breed + ". It is " + Steve.dog_age + " years old."
}

function function_nested() {
    document.getElementById("Nested_Function").innerHTML = addition();
    function addition() {
        var two_numbers = 10 + 10;
        return two_numbers
    }
}