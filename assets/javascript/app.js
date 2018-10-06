

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'good <br>evening!';
}

else if (hourNow > 12) {
    greeting = 'good <br>afternoon!';
}

else if (hourNow > 0) {
    greeting = 'good <br>morning!';
}

else {
    greeting = 'Welcome!';
}


$(document).ready(function () {
    $(".aboutMe").hide();
    $(".portfolio").hide();
    $(".contact").hide();
    $(".greetings").append(greeting);
});

$("#aboutBtn").click(function(){
    $(".aboutMe").show();
    $(".greetings").hide();
    $(".portfolio").hide();
    $(".contact").hide();
});

$("#portfolioBtn").click(function(){
    $(".aboutMe").hide();
    $(".greetings").hide();
    $(".portfolio").show();
    $(".contact").hide();
});

$("#contactBtn").click(function(){
    $(".aboutMe").hide();
    $(".greetings").hide();
    $(".portfolio").hide();
    $(".contact").show();
});
