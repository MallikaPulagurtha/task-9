//Random Number Generator
var heading = document.createElement("span");
heading.innerHTML = "Random Number Generator";
var button = document.createElement("button");
button.setAttribute("class","btn btn-light");
button.innerHTML = "Generate Number ❯";
var h2 = document.createElement("h2");
document.body.append(heading,button,h2);
button.addEventListener("click", function(e){
    e.preventDefault();
    random();
    arr = [];

});

//using recursive function
var arr = [];
function random(){
    var num = Math.floor(Math.random() * 9 + 1);
        if(arr.length===8){
        console.log(arr.join(""));
    }
    else{
        if(arr.indexOf(num) === -1)
        arr.push(num);
        random();
    } 
}

//Date Manipulation
var input = prompt("Enter your Date of birth in mm/dd/yyyy format");
alert("Please look at console for output!");
var head = document.createElement("span");
head.innerHTML = "Date Manipulation";
var button2 = document.createElement("button");
button2.setAttribute("class","btn btn-light");
button2.innerHTML = "Generate Time ❯";
button2.setAttribute("onclick", "date()");
var head2 = document.createElement("h2");
document.body.append(head,button2,head2);

//daycount, year, month, mins, secs, millisecs difference
function date(){
    var date1 = new Date(input);
    var date2 = new Date();
    console.log("Your DOB is : " + date1);
    console.log("Current date is : " + date2);
    console.log("The difference is as follows,")
    //daycount
    var timediff = date2.getTime()-date1.getTime();
    var daycount = Math.floor(timediff/(1000 * 60 * 60 * 24));
    console.log("daycount : " + daycount);
    //year diff
    var yeardiff = (date2.getFullYear() - date1.getFullYear());
    console.log("yeardiff : " + (yeardiff-1));
    //month diff
    var monthdiff = (yeardiff)*12 + (date2.getMonth() - 1 - date1.getMonth());
    console.log("monthdiff : " + monthdiff);
    //minutes diff
    var minsdiff = (daycount * 24 * 60);
    console.log("minutes diff : " + minsdiff);
    //secnds diff
    var secdiff = (minsdiff * 60);
    console.log("seconds diff : " + secdiff);
    //milliseconds diff
    var msecdiff = (timediff);
    console.log("milli seconds diff : " + msecdiff);
}


