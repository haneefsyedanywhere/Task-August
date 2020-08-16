const header = document.querySelector('header');
const header_nav = document.querySelector('#header__nav');
function mobileNav(){
  header_nav.classList.toggle("mobile__nav");
}

window.onscroll=()=>{
    if(window.scrollY>200){
      header.style.backgroundColor="#0093ff";
    }
    else{
      header.style.backgroundColor="transparent";
    }

}




const container=document.querySelector(".testimonial__slider__container");
const allBox=container.children;
const containerWidth=container.offsetWidth;
const margin=30;
 var items=0;
 var totalItems=0;
 var jumpSlideWidth=0;
 var totalItemsWidth=0;

// item setup per slide

responsive=[
{breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
{breakPoint:{width:600,item:2}}, //if width greater than 600 (2  item will show) 
{breakPoint:{width:1000,item:3}} //if width greater than 1000 (4 item will show) 
];

function load(){
   for(let i=0; i<responsive.length;i++){
       if(window.innerWidth>responsive[i].breakPoint.width){
           items=responsive[i].breakPoint.item
       }
   }
   start();
}

function start(){
   for(let i=0;i<allBox.length;i++){
        // width and margin setup of items
       allBox[i].style.width=(containerWidth/items)-margin + "px";
       allBox[i].style.margin=(margin/2)+ "px";
      totalItemsWidth+=containerWidth/items;
      totalItems++;
   }

   // thumbnail-container width set up
   container.style.width=totalItemsWidth + "px";
  }


const prev_icon=document.querySelector(".prev_icon");
const next_icon=document.querySelector(".next_icon"); 

  // when click on numbers slide to next slide
function controlSlides(ele){
  const maxSlide =totalItemsWidth-containerWidth;
    if(ele==="next" && (jumpSlideWidth<(totalItemsWidth-containerWidth))){
        jumpSlideWidth=jumpSlideWidth+containerWidth;
      }
      else if(ele==="prev" && (jumpSlideWidth>0)){
        jumpSlideWidth=jumpSlideWidth-containerWidth;
      }


      if(jumpSlideWidth>0 && jumpSlideWidth<(totalItemsWidth-containerWidth)){
        prev_icon.classList.remove('disabled');
        next_icon.classList.remove('disabled');
      }
      container.style.marginLeft=-jumpSlideWidth + "px";
      if(jumpSlideWidth==0){
        prev_icon.classList.add('disabled');
      }
      if(jumpSlideWidth==maxSlide){
        next_icon.classList.add('disabled');
      }
     
}

window.onload=load();
window.onresize=()=>{
  location.reload();
};


//Dropdown
const dropdownOptions = document.querySelectorAll('.dropdown__options');
const inputs = document.querySelectorAll('.hero__form input');


inputs[0].onclick = ()=>{
  dropdownOptions[0].style.display="block";
  var inpId = 0;
  toggleOptions(inpId);
}
inputs[1].onclick = ()=>{
  dropdownOptions[1].style.display="block";
  var inpId = 1;
  toggleOptions(inpId);
}

inputs[2].onclick = ()=>{
  dropdownOptions[2].style.display="block";
  var inpId = 2;
  toggleOptions(inpId);
}


function selectOption(inputId,optionId){
  var options = dropdownOptions[inputId].children;
  inputs[inputId].value = options[optionId].innerHTML;
  dropdownOptions[inputId].style.display="none";
}

function toggleOptions(inpId){
  document.addEventListener('click',(event)=>{
    const targetele = event.target;
    if(targetele !== inputs[inpId]){
      dropdownOptions[inpId].style.display="none";
    }
  })
}
