
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
var numbers3=["o","t","thr","fo","fi","s","sev","","ni","t","elev","twel",];
var numbers4=["onee","twoo","threee","fourr","fivee","sixx","sevenn","","ninee","tenn","elevenn","twelvee",];
var clear =document.querySelectorAll(".clearBtn");
var save =document.querySelectorAll(".saveBtn");
var hour = moment().hours();
hour=parseInt(hour);

setInterval(function () {
 currentDay.innerHTML = moment().format(
    "dddd, MMM Do, h:mm:ss a"
  );
},1000);

clear.forEach(item => {
    item.addEventListener("click", event => {
        if($( event.target ).is( "i" )){
            for(var i=0; i< numbers4.length; i++)
            {
            if(event.target.id===numbers4[i]){
                localStorage.setItem((i+1), "");
                $("#"+(i+1)).val("");
            }
            }
            console.log("button clicked");
          }
        else{
            for(var i=0; i< numbers.length; i++)
            {
            if(event.target.id===numbers[i]){
                localStorage.setItem((i+1), "");
                $("#"+(i+1)).val("");
            }
            }
        }
    })
});

save.forEach(item => {item.addEventListener("click", event => {

    if($( event.target ).is( "i" )){
        for(var i=0; i< numbers3.length; i++)
        {
        if(event.target.id===numbers3[i]){
            var e = $("#"+(i+1)).val().trim();
            localStorage.setItem((i+1),e);
        }
        }
        console.log("button clicked");
      }
    else{
    for(var i=0; i< numbers2.length; i++)
    {
        if(event.target.id===numbers2[i]){
            var e = $("#"+(i+1)).val().trim();
            localStorage.setItem((i+1),e);
        }
    }
    }

})
});

$(window).on('load',function(){
    for(var i=0; i< numbers.length; i++){

        if(localStorage.getItem((i+1))!==""){
            $("#"+(i+1)).text(localStorage.getItem((i+1)));
        }  
    }
});


function colors(){

    if(hour<=7 && hour>=1)
    {
        for(var i=1; i<13; i++){
            if(i!==8)
            {
                var time=parseInt($("#"+(i)).attr('id'));   
            }
            else if(i===8){
                i=9;
                time=9;
            }
            if(time>8){
                hour=hour+12;
            }
    
            if (hour > time) {
                    document.getElementById(i).style.backgroundColor="#d3d3d3";
            } else if (hour < time) {
                    document.getElementById(i).style.backgroundColor="#77dd77";
            } else {
                    document.getElementById(i).style.backgroundColor="#ff6961";
            }
        }
    }
    else{

        for(var i=1; i<13; i++){
            if(i!==8)
            {
                var time=parseInt($("#"+(i)).attr('id'));   
            }
            else if(i===8){
                i=9;
                time=9;
            }
            if(time<8){
                time=time+12;
            }
    
            if (hour > time) {
                    document.getElementById(i).style.backgroundColor="#d3d3d3";
            } else if (hour < time) {
                    document.getElementById(i).style.backgroundColor="#77dd77";
            } else {
                    document.getElementById(i).style.backgroundColor="#ff6961";
            }
        }
    }

    
};

colors();