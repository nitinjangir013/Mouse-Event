let ulElement = document.getElementsByTagName("ul")[0];
let mainElement = document.getElementsByClassName("main_container")[0];
function moveRight()
{
  ulElement.style.width = "80%";
  setTimeout(function(){
    ulElement.style.width = "50%";
  },500);
  ulElement.style.marginLeft = "50%";
  mainElement.style.background = "rgb(186, 186, 186)";
}

function moveLeft()
{
  ulElement.style.width = "80%";
  setTimeout(function(){
    ulElement.style.width = "50%";
  },500);
  ulElement.style.marginLeft = "0%";
  mainElement.style.background = "rgb(102, 255, 51)";
}