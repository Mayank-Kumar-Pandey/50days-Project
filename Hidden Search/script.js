const Search = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


btn.addEventListener('click', () => {
    Search.classList.toggle('active')
    input.focus()
})