function calculate() {
    var add = 20 + 25;
    document.getElementById("Math").innerHTML = add
}

function subtract() {
    var sub = 100 - 35;
    document.getElementById("Subtraction").innerHTML = sub
}

function multipy() {
    var mul = 30 * 350;
    document.getElementById("Multiplication").innerHTML = mul
}

function divide() {
    var div = 100 / 10;
    document.getElementById("Division").innerHTML = div
}

function multiple() {
    var mult = (30*50) + 200 / 23 - 2;
    document.getElementById("equations").innerHTML = mult
}

function remainder() {
    var remain = 10 % 3;
    document.getElementById("modulus").innerHTML = remain
}

function negative() {
    var neg = 100;
    document.getElementById("negation").innerHTML = -neg
}

function up() {
    var inc = 30;
    inc++;
    document.getElementById("increment").innerHTML = inc
}

function down() {
    var dec = 30;
    dec--;
    document.getElementById("decrement").innerHTML = dec
}

function ran_num() {
    var rand = Math.floor(Math.random() * 10) + 1;
    document.getElementById("random").innerHTML = "Did you guess: " + rand + "?"
}