var countDownDate = new Date("Jan 15, 2023 15:37:25").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(days<10){
        document.querySelector('.day_text').innerHTML = '0' + days
    } else{
        document.querySelector('.day_text').innerHTML = days
    }
    if(hours<10){
        document.querySelector('.hours_text').innerHTML = '0' + hours
    } else{
        document.querySelector('.hours_text').innerHTML = hours   
    }
    if(minutes<10){
        document.querySelector('.minutes_text').innerHTML = '0' + minutes
    } else{
        document.querySelector('.minutes_text').innerHTML = minutes
    }
    if(seconds<10){
        document.querySelector('.seconds_text').innerHTML = '0' + seconds
    }else{
        document.querySelector('.seconds_text').innerHTML = seconds
    }
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);