document.addEventListener('DOMContentLoaded', () => {
    renderAllSmoothies()
})

function renderAllSmoothies(){
    fetch('http://localhost:3000/smoothies')
    .then(resp => resp.json())
    .then(data => data.forEach(smoothie => renderSmoothie(smoothie)))
}

function renderSmoothie(smoothie){
    const menu = document.getElementById("smoothie-menu")
    const card = document.createElement('card')
    card.setAttribute('class', 'card')
    const h4 = document.createElement('h4')
    h4.textContent = smoothie.name
    menu.appendChild(card)
    card.appendChild(h4)
}