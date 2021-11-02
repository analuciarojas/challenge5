
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
var clear =document.querySelectorAll("button.clearBtn");
var save =document.querySelectorAll("button.saveBtn");
var form =document.querySelectorAll("textarea.form");
var hour = moment().hours();


setInterval(function () {
 currentDay.innerHTML = moment().format(
    "dddd, MMM Do, h:mm:ss a"
  );
},1000);

function saveBtn(){
    let dataHour = $(this).attr("data-hour");
    let inputField = $("#" + dataHour).val();

    localStorage.setItem(dataHour, inputField);
    console.log(inputField);
}


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

form.forEach(item => {
    var time=parseInt($(item).attr('id'));
    item.addEventListener("click", item => {

    hour=parseInt(hour);
    console.log(time);
    console.log(hour);

    
    if (hour > time) {
        $(item).addClass("past");
    } else if (hour < time) {
        $(item).addClass("future");
    } else {
        $(item).addClass("present");
    }
    });
});

save.forEach(item => {item.addEventListener("click", event => {

})
});
    
