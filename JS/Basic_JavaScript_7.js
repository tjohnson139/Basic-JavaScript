var test = 1;

function test_non_error() {
    var test_1 = 10 + test;
    document.getElementById("non_err_ftn").innerHTML = test_1
}

function test_error() {
    var test_2 = 10 + test_1;
    document.getElementById("err_ftn").innerHTML = test_2
    console.log()
}

function time_test() {
    if (new Date().getHours < 12) {
        var greeting = "Good Morning!"
    } else {
        var greeting = "Good... Not Morning!"
    }
    document.getElementById("time_now").innerHTML = greeting
}

function check_name() {
    submitted_name = document.getElementById("name").value;
    if (submitted_name == "tyler") {
        var rtn = "Wow. What an amazing name"
    } else {
        var rtn = "Your name isn't as cool as my name"
    }
    document.getElementById("answer").innerHTML = rtn
}

function Time_function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        reply = "It's morning time!";
    }
    else if (Time > 12 == Time < 18) {
        reply = "It is the afternoon.";
    }
    else {
        reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = reply
}