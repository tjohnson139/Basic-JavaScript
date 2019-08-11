function type() {
    document.write(typeof "Word")
}

function click_nan() {
    var nan_click = 0 / 0
    document.getElementById("nan").innerHTML = nan_click
}

function is_nan_false() {
    var isnan_false = isNaN(185)
    document.getElementById("false_nan").innerHTML = isnan_false
}

function is_nan_true() {
    var isnan_true = isNaN("word")
    document.getElementById("true_nan").innerHTML = isnan_true
}

function infinity() {
    var inf = 35E987384
    document.getElementById("inf_pos").innerHTML = inf
}

function neg_infinity() {
    var neg_inf = -35E987384
    document.getElementById("inf_neg").innerHTML = neg_inf
}

function boolean_true() {
    var true_bool = 100 > 90
    document.getElementById("bool_true").innerHTML = true_bool
}

function boolean_false() {
    var false_bool = 100 < 90
    document.getElementById("bool_false").innerHTML = false_bool
}

console.log(50 + 200)

function coercion_example() {
    var coerc = ("10" / 10)
    document.getElementById("coercion").innerHTML = coerc
}

console.log(100 > 200)

function equals_true() {
    var compare_true = (10 == 10)
    document.getElementById("equals").innerHTML = compare_true
}

function equals_false() {
    var compare_false = (10 == 11)
    document.getElementById("equals_nev").innerHTML = compare_false
}

function equals_false() {
    var compare_false = (10 == 11)
    document.getElementById("equals_nev").innerHTML = compare_false
}

function true_compare() {
    var comp_true = ("compare" === "compare")
    document.getElementById("true_data").innerHTML = comp_true
}

function false_compare() {
    var comp_false = ("compare" === 2)
    document.getElementById("false_data").innerHTML = comp_false
}

function false_compare_type() {
    var data_false = ("2" === 2)
    document.getElementById("false_data_type").innerHTML = data_false
}

function false_kind() {
    var data_kind_false = ("23" === "2")
    document.getElementById("false_data_kind").innerHTML = data_kind_false
}

function and_true() {
    var true_and = (1 == 1 && 10 > 2)
    document.getElementById("and").innerHTML = true_and
}

function and_f() {
    var false_and = (2 == 1 && 10 > 2)
    document.getElementById("and_false").innerHTML = false_and
}

function or_true() {
    var true_or = (1 == 1 || 10 > 2)
    document.getElementById("or").innerHTML = true_or
}

function or_f() {
    var false_or = (2 == 1 || 10 < 2)
    document.getElementById("or_false").innerHTML = false_or
}

function not_true() {
    var true_not = !(1 > 1)
    document.getElementById("not").innerHTML = true_not
}

function not_f() {
    var false_not = !(1 == 1)
    document.getElementById("not_false").innerHTML = false_not
}