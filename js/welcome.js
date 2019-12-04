const wrapper = document.querySelector('.welcome__button--desktop');
const cellsArr = document.querySelectorAll('.welcome__text--number');


cellsArr.forEach(cell => {
    cell.addEventListener('mouseover', ()=>{
        wrapper.innerHTML = `<span class="welcome__bordered">0${cell.dataset.number}. </span>
        ${cell.dataset.text}`
    })
})