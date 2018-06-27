var colorboxes=document.querySelectorAll('.boxcolor')
var rightcolor="RGB(0,0,0)"
var colorcode=document.querySelector('#colorcode')
var easymode=document.querySelector("#easymode")
var hardmode=document.querySelector("#hardmode")
var brand=document.querySelector(".navbar-brand")
var table=document.querySelector('table')
var noofboxes=9
var temp=table.innerHTML
function newgame()
{
  for(var i=0;i<noofboxes;i++)
  {
    colorboxes[i].addEventListener("click",function(){
      var choice=this.style.background
      if(choice.toUpperCase()!=rightcolor)
      this.style.background="white"
      else {
        alert('You won the game!');
        newgame()
      }
    })
  }

  var randomwincolor=Math.floor(Math.random() * noofboxes);
  for(var i=0;i<noofboxes;i++)
  {
    var randomcolor="RGB("+String(Math.floor((Math.random() * 255) + 1))+", "+String(Math.floor((Math.random() * 255) + 1))+", "+String(Math.floor((Math.random() * 255) + 1))+")";
    colorboxes[i].style.background=randomcolor
    if (i==randomwincolor)
    {
      rightcolor=randomcolor;
      colorcode.textContent=rightcolor
    }
  }
}

easymode.addEventListener("click",function easymodegame()
{ var t=table.innerHTML;
  t=t.split("</tr>")
  teasy=t[0]+"</tr>"+t[1]+"</tr>"+t[3]
  console.log(teasy);
  table.innerHTML=teasy
  colorboxes=document.querySelectorAll('.boxcolor')
  rightcolor="RGB(0,0,0)"
  colorcode=document.querySelector('#colorcode')
  easymode=document.querySelector("#easymode")
  table=document.querySelector('table')
  noofboxes=6
  newgame()
})

function hardmodegame()
{ table.innerHTML=temp
  colorboxes=document.querySelectorAll('.boxcolor')
  rightcolor="RGB(0,0,0)"
  colorcode=document.querySelector('#colorcode')
  hardmode=document.querySelector("#hardmode")
  table=document.querySelector('table')
  noofboxes=9
  newgame()
}

hardmode.addEventListener("click",hardmodegame);



brand.addEventListener("click",function() {
  hardmodegame()
} )
newgame()
