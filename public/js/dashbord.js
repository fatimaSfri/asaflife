const toggleMenu = document.querySelector('#menu')
const dropdown = document.querySelector('#daropdown-menu')

toggleMenu.addEventListener('click',() =>
    {
        console.log('')
        dropdown.classList.toggle('top-[0.1rem]')
   })

const toggleMenuLeft = document.querySelector('#menuLeft')
const dropdownLeft = document.querySelector('#daropdown-menu-Left')

toggleMenuLeft.addEventListener('click',() =>
    {
        console.log('')
        dropdownLeft.classList.toggle('top-[0.1rem]')
   })