function Call_Loop() {
    var final = "";
    var X = 1;

    while (X < 21) {
        final += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = final;
}


var cars = ["Ford", "Dodge", "Toyota", "Mazda", "Nissan", "Jeep"];
var content = "";
var x;

function for_loop() {
    for (x = 0; x < cars.length; x++) {
    content += cars[x] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content
}

function array_function() {
    var car_actions = []
    car_actions[0] = "driving";
    car_actions[1] = "parking";
    car_actions[2] = "on fire";
    document.getElementById("array").innerHTML = "The car is " + car_actions[2] + "."
}

function constant_function() {
    const x = {breakfast:"eggs", lunch:"sandwich", dinner:"meatloaf", snack:"Reeses"}
    x.breakfast = ("toast");
    document.getElementById("Constant").innerHTML = "For breakfast I had " + x.breakfast + " and for a snack I had " + x.snack + "."
}

a = 254
document.write("<br>" + a + "<br>");
{
    let a = 100;
    document.write(a + "<br>");
}
document.write(a + "<br><br>")


let house = {
    year_built: 1969,
    bedroom_number: 4,
    bath_number: 2,
    sq_foot: 990,
    street_name: "Butternut Street",
    descrtipiton: function() {
        return "This " + this.sq_foot + " square foot home was built in " + this.year_built + ". It has " + this.bedroom_number + " bedrooms and " + this.bath_number + " baths. The home sits on " + this.street_name + "."
        }
    }
document.getElementById("elements").innerHTML = house.descrtipiton();


var output = ""
var i = 1
for (i = 0; i < 20; i++) {
    if (i == 5) { break; }
    output += i;
}
document.getElementById("brk_statement").innerHTML = output

var num = ""
var i = 1
for (i = 0; i < 6; i++) {
    if (i == 4) {continue;}
    num += i + "<br>"
}
document.getElementById("cont_statement").innerHTML = num