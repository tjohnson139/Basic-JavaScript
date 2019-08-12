function jstrings() {
    var str1 = "This ";
    var str2 = "is ";
    var str3 = "a ";
    var str4 = "joined ";
    var str5 = "string.";
    var con = str1.concat(str2, str3, str4, str5);
    document.getElementById("join").innerHTML = con
}

function slice_string() {
    var sentence = '"People say nothing is impossible, but I do nothing every day."';
    var sent_slice = sentence.slice(11, 20);
    document.getElementById("slice").innerHTML = sent_slice
}

function upcase() {
    var sentence = "Click Here";
    var uppercase = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = uppercase
}

function search_str() {
    var string = "The only mystery in life is why the kamikaze pilots wore helmets";
    var new_string = string.search("pilots");
    document.getElementById("search").innerHTML = new_string
}

function tostring() {
    var number = 3546;
    var num_to_string = number.toString();
    document.getElementById("to_string").innerHTML = num_to_string
}

function num_pre() {
    var number = 34.22435987348957398457
    var num_precision = number.toPrecision(5);
    document.getElementById("precision").innerHTML = num_precision
}

function fixed () {
    var number = 45343.0183479826598347598347;
    var num_fixed = number.toFixed(5);
    document.getElementById("tofixed").innerHTML = num_fixed
}

function value() {
    var number = 345.6;
    var value_num = number.valueOf();
    document.getElementById("valueof").innerHTML = value_num
}