
var currentDay=document.querySelector("#currentDay");
var nineclearB=document.querySelector("#nine");
var tenclearB=document.querySelector("#ten");
var elevenclearB=document.querySelector("#eleven");
var tweleveclearB=document.querySelector("#twelve");
var oneclearB=document.querySelector("#one");
var twoclearB=document.querySelector("#two");
var threeclearB=document.querySelector("#three");
var fourclearB=document.querySelector("#four");
var fiveclearB=document.querySelector("#five");
var sixclearB=document.querySelector("#six");
var sevenclearB=document.querySelector("#seven");
var numbers=["one","two","three","four","five","six","seven","","nine","ten","eleven","twelve",];
var numbers2=["on","tw","thre","fou","fiv","si","seve","","nin","te","eleve","twelv",];
var clear =document.querySelectorAll("button.clearBtn");
var save =document.querySelectorAll("button.saveBtn");
var form =document.querySelectorAll("textarea.form");
var hour = moment().hours();
var row = document.getElementsByClassName("row")

hour=parseInt(hour);

setInterval(function () {
 currentDay.innerHTML = moment().format(
    "dddd, MMM Do, h:mm:ss a"
  );
},1000);

clear.forEach(item => {
    item.addEventListener("click", event => {
        for(var i=0; i< numbers.length; i++)
        {
            if(event.target.id===numbers[i]){
                localStorage.setItem((i+1), "");
                if(i+1===9){
                    $("#9").val("");
                }
                if(i+1===10){
                    $("#10").val("");
                }
                if(i+1===11){
                    $("#11").val("");
                }
                if(i+1===12){
                    $("#12").val("");
                }
                if(i+1===1){
                    $("#1").val("");
                }
                if(i+1===2){
                    $("#2").val("");
                }
                if(i+1===3){
                    $("#3").val("");
                }
                if(i+1===4){
                    $("#4").val("");
                }
                if(i+1===5){
                    $("#5").val("");
                }
                if(i+1===6){
                    $("#6").val("");
                }
                if(i+1===7){
                    $("#7").val("");
                }
            }
        }
    })
})
function setColors(a,color){
    a.style.background = color;
}

function colors(){
    var time=parseInt($("#9").attr('id'));

    if (time < 8) {
        time += 12;
    }
    
    if (hour > time) {
        setColors(row, "black");
    } else if (hour < time) {
        setColors(row, "blue");
    } else {
        setColors(row, "green");
    }

    var time=parseInt($("#10").attr('id'));
    
    if (hour > time) {
        $("#10").addClass("past");
    } else if (hour < time) {
        $("#10").addClass("future");
    } else {
        $("#10").addClass("present");
    }

    var time=parseInt($("#11").attr('id'));
    
    if (hour > time) {
        $("#11").addClass("past");
    } else if (hour < time) {
        $("#11").addClass("future");
    } else {
        $("#11").addClass("present");
    }

    var time=parseInt($("#12").attr('id'));
    
    if (hour > time) {
        $("#12").addClass("past");
    } else if (hour < time) {
        $("#12").addClass("future");
    } else {
        $("#12").addClass("present");
    }

    var time=parseInt($("#1").attr('id'));
    
    if (hour > time) {
        $("#1").addClass("past");
    } else if (hour < time) {
        $("#1").addClass("future");
    } else {
        $("#1").addClass("present");
    }

    var time=parseInt($("#2").attr('id'));
    
    if (hour > time) {
        $("#2").addClass("past");
    } else if (hour < time) {
        $("#2").addClass("future");
    } else {
        setColors(row, "green");
    }

    var time=parseInt($("#3").attr('id'));
    
    if (hour > time) {
        $("#3").addClass("past");
    } else if (hour < time) {
        $("#3").addClass("future");
    } else {
        $("#3").addClass("present");
    }

    var time=parseInt($("#4").attr('id'));
    
    if (hour > time) {
        $("#4").addClass("past");
    } else if (hour < time) {
        $("#4").addClass("future");
    } else {
        $("#4").addClass("present");
    }

    var time=parseInt($("#6").attr('id'));
    
    if (hour > time) {
        $("#6").addClass("past");
    } else if (hour < time) {
        $("#6").addClass("future");
    } else {
        $("#6").addClass("present");
    }

    var time=parseInt($("#7").attr('id'));
    
    if (hour > time) {
        $("#7").addClass("past");
    } else if (hour < time) {
        $("#7").addClass("future");
    } else {
        $("#7").addClass("present");
    }
}

save.forEach(item => {item.addEventListener("click", event => {
    for(var i=0; i< numbers2.length; i++)
    {
        if(event.target.id===numbers2[i]){
            if(i+1===9){
                var e = $("#9").val().trim();
            }
            if(i+1===10){
                var e = $("#10").val().trim();
            }
            if(i+1===11){
                var e = $("#11").val().trim();
            }
            if(i+1===12){
                var e = $("#12").val().trim();
            }
            if(i+1===1){
                var e = $("#1").val().trim();
            }
            if(i+1===2){
                var e = $("#2").val().trim();
            }
            if(i+1===3){
                var e = $("#3").val().trim();
            }
            if(i+1===4){
                var e = $("#4").val().trim();
            }
            if(i+1===5){
                var e = $("#5").val().trim();
            }
            if(i+1===6){
                var e = $("#6").val().trim();
            }
            if(i+1===7){
                var e = $("#7").val().trim();
            }
            localStorage.setItem((i+1),JSON.stringify(e));
        }
    }

})
});

$(window).on('load',function(){

    if(localStorage.getItem((9))!==""){
    $("#9").text(localStorage.getItem((9)));
    }  

    if(localStorage.getItem((10))!==""){
    $("#10").text(localStorage.getItem((10)));
    } 
 
    if(localStorage.getItem((11))!==""){
        $("#11").text(localStorage.getItem((11)));
     }

     if(localStorage.getItem((12))!==""){
        $("#12").text(localStorage.getItem((12)));
    } 

    if(localStorage.getItem((1))!==""){
        $("#1").text(localStorage.getItem((1)));
    }
    
    if(localStorage.getItem((2))!==""){
        $("#2").text(localStorage.getItem((2)));
    }

    if(localStorage.getItem((3))!==""){
        $("#3").text(localStorage.getItem((3)));
    }

    if(localStorage.getItem((4))!==""){
        $("#4").text(localStorage.getItem((4)));
    }

    if(localStorage.getItem((5))!==""){
        $("#5").text(localStorage.getItem((5)));
    }

    if(localStorage.getItem((6))!==""){
        $("#6").text(localStorage.getItem((6)));
    }

    if(localStorage.getItem((7))!==""){
        $("#7").text(localStorage.getItem((7)));
    }
})


colors();