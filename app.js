// const toggleBtn =document.querySelector('.toggle-button')
// const dropdown=document.querySelector(".dropdown-menu")

// toggleBtn.addEventListener('click',() =>
// {
//     console.log('hi')
//  dropdown.classList.toggle('top-16')
// })

// let imgSlider =document.querySelector('#parent')
// let childElem=document.querySelector('#childfrist')
// let btnNext=document.querySelector('#next')
// let btnPrev=document.querySelector('#prev')
// let dots =document.querySelectorAll('.dot')

// let a_img=['./img/bg/03.jpg','./img/bg/04.jpg','./img/bg/02.jpg','./img/bg/05.jpg',]
// let index = 0;

// setInterval(() => changeSlider(-1) ,100000);



// const changeSlider = (step) => 
// {
//     index = (index + step + a_img.length) % a_img.length;
//     imgSlider.style.backgroundImage = `url(${a_img[index]})`;
//     //  dots[index - 1].style.background='green'



// }


// function changeSlide(){
// index += n
// changeSlider(index)

// }

const toggleBtn =document.querySelector('.toggle-button')
const dropdown=document.querySelector(".dropdown-menu")

toggleBtn.addEventListener('click',() =>
{
    console.log('hi')
 dropdown.classList.toggle('top-16')
})

let imgSlider =document.querySelector('#parent')
let childElem=document.querySelector('#childfrist')
let btnNext=document.querySelector('#next')
let btnPrev=document.querySelector('#prev')
let dot =document.querySelectorAll(".dot")
let a_img=['./img/bg/03.jpg','./img/bg/04.jpg','./img/bg/02.jpg','./img/bg/05.jpg',]
let index = 0;

setInterval(() => changeSlider(-1) ,10000);



const changeSlider = (step) => 
{
    
    index = (index + step + a_img.length) % a_img.length;
    imgSlider.style.backgroundImage = `url(${a_img[index]})`;   
}








