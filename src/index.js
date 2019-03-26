const customForm = document.getElementById("custom-smoothie")
const orderList = document.getElementById("order-list")

document.addEventListener('DOMContentLoaded', () => {
    customForm.addEventListener('submit', handleNewSmoothie)             
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

function addSmoothieOrder(burger) {
    console.log(event)
    const smoothieDescript = event.target.previousElementSibling.innerText
    const smoothieName = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    const smoothieImage = event.target.previousElementSibling.previousElementSibling.currentSrc
    
    const h3 = document.createElement('h3')
    h3.textContent = burgerName
    h3.setAttribute('class', 'burger_title')

    orderList.appendChild(h3)
}


function handleNewSmoothie(event) {
  event.preventDefault()
    console.log(event)
    // debugger;
      let fetchBody = {
          
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          method: 'POST', 
          body: JSON.stringify({
            name: event.target.elements[0].value,
            ingredients: event.target.elements[1].value,
            image_url: event.target.elements[2].value,
            created_by: event.target.elements[3].value,
            category: event.target.elements[4].value


          })
          }             
      
      console.log(fetchBody)
       fetch('http://localhost:3000/smoothies', fetchBody)
       .then(res => res.json())
       .then(smoothie => renderSmoothie(smoothie))
       event.target.reset()
  }

