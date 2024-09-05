const toggleMenu = document.querySelector('#menu')
const dropdown = document.querySelector('#daropdown-menu')

toggleMenu.addEventListener('click',() =>
    {
        console.log('')
        dropdown.classList.toggle('top-[0.1rem]')
   })