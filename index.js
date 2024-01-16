var noDrum = document.querySelectorAll(".drum").length;

for(var i = 0 ; i< noDrum ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        this.style.color="white"
        var  audio = new Audio("./sounds/tom-2.mp3")
        audio.play();
    });
}
