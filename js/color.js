var message=document.querySelector("#message")
var headerelements=document.querySelectorAll("header")
var navbarelements=document.querySelectorAll('.navbarelements a')
var colorboxes=document.querySelectorAll('.boxcolor')
var rightcolor="RGB(-1,-1,-1)"
var colorcode=document.querySelector('#colorcode')
var easymode=document.querySelector("#easymode")
var hardmode=document.querySelector("#hardmode")
var brand=document.querySelector(".navbar-brand")
var table=document.querySelector('table')
var noofboxes=9
var temp=table.innerHTML
console.log(navbarelements);
for(var i=0;i<navbarelements.length;i++)
{
  navbarelements[i].addEventListener("mouseover",function () {
    this.classList.add("navhover")
  } )
  navbarelements[i].addEventListener("click",function () {
    for (var j = 0; j < navbarelements.length; j++) {
      navbarelements[j].classList.remove("navclick")
    }
    this.classList.add("navclick")
  } )
  navbarelements[i].addEventListener("mouseout",function () {
    this.classList.remove("navhover")
  } )
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function colornum(rgb)
{
  rgb = Array.prototype.join.call(arguments).match(/(-?[0-9\.]+)/g);
  for (var i = 0; i < headerelements.length; i++) {
    headerelements[i].style.background=rightcolor
    if((Number(rgb[0])+Number(rgb[1])+Number(rgb[2]))/3<128)
      {
        headerelements[i].style.color="white";
      }
    else
     {
       headerelements[i].style.color="black"
      }

    }
}

function init()
{
  for (var i = 0; i < noofboxes; i++)
  {if (noofboxes==6){
    colorboxes[i].classList.add("six")
    }
    else {
      colorboxes[i].classList.remove("six")
      }
  }
  for (var i = 0; i < noofboxes; i++)
  {
    colorboxes[i].addEventListener("click",function()
      {
        choice=this.style.background
        if(choice.toUpperCase()==rightcolor.toUpperCase())
        {
          colornum(rightcolor)
          message.textContent="You won!!!"
          console.log(message.textContent);
          // alert('You won the game!');
          newgame()
          sleep(100)
        }
        else
        {
          this.style.background="white"
          message.textContent="Try again!!!"
          console.log(message.textContent);
        }
      }
    )
  newgame()
  }
}

function newgame()
{
  var choice="rgb(-1,-1,-1)"
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
{ t=temp.split("</tr>")
  teasy=t[0]+"</tr>"+t[1]+"</tr>"+t[3]
  console.log(teasy);
  table.innerHTML=teasy
  rightcolor="RGB(-1,-1,-1)"
  colorboxes=document.querySelectorAll('.boxcolor')
  colorcode=document.querySelector('#colorcode')
  easymode=document.querySelector("#easymode")
  table=document.querySelector('table')
  noofboxes=6
  init()
})

function hardmodegame()
{ table.innerHTML=temp
  colorboxes=document.querySelectorAll('.boxcolor')
  rightcolor="RGB(-1,-1,-1)"
  colorcode=document.querySelector('#colorcode')
  hardmode=document.querySelector("#hardmode")
  table=document.querySelector('table')
  noofboxes=9
  init()
}

hardmode.addEventListener("click",hardmodegame);
brand.addEventListener("click",function() {
  hardmodegame()
} )

init()
