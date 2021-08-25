// toggle the class on click


const toggleCollapse = document.querySelector('.toggle-icons span')
const nav = document.querySelector('.nav')
const cross = document.querySelector('.cross')

toggleCollapse.onclick = ()=>{
    nav.classList.toggle('collapse')
    cross.classList.toggle('active')
   
}















