const toggleBtn =document.querySelector('.toggle-button')
const dropdown=document.querySelector(".dropdown-menu")
let s=0

window.addEventListener('scroll', function(){

s = dropdown.scrollTop
console.log(s)

})


toggleBtn.addEventListener('click',() =>
{
  
 dropdown.classList.toggle('top-[4.1rem]')


})



let imgSlider =document.querySelector('#parent')
let dot =document.querySelectorAll(".dot")
// let a_img=['./img/bg/02.jpg', './img/bg/03.jpg','./img/bg/04.jpg','./img/bg/05.jpg','./img/bg/06.jpg']
let index = 0;

setInterval(() => changeSlider(-1) ,10000);


const changeSlider = (step,inx=null) => 
{
    
    if(inx != null){
      index=inx
     }

    index = (index + step + a_img.length) % a_img.length;
    imgSlider.style.backgroundImage = `url(${a_img[index]})`; 
  

}

window.changeSlider = changeSlider;


const dots = document.getElementsByClassName('dot');

window.otherClear = (index) => {

    for (let i = 0; i < dots.length; i++) 
    {
        dots[i].style.background = "#C2FFF1";
    }
    dots[index].style.background = "#00c293";
}


