function button_press() {
    var color = document.getElementById("btn");
    var bck_color = color.style.backgroundColor = "black";
    color.style.color = "red";
}

function join_text() {
    var sentence = "Hello ";
    sentence += "World!";
    document.getElementById("concatinate").innerHTML = sentence;
}