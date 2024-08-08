let imgSlider =document.querySelector('#parent')
let childElem=document.querySelector('#childfrist')
let btnNext=document.querySelector('#next')
let btnPrev=document.querySelector('#prev')

let a_img=['/img/e.avif','/img/d.jpg','/img/c.jpg','/img/b.avif','/img/a.jpg',]
let index = 0;

setInterval(() => changeSlider(-1) ,100000);



const changeSlider = (step) => 
{
    index = (index + step + a_img.length) % a_img.length;
    imgSlider.style.backgroundImage = `url(${a_img[index]})`;
}



// // for go right
// changeSlider(1);

// //for go left 
// changeSlider(-1);