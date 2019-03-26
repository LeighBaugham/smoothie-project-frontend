const customForm = document.getElementById("custom-smoothie")

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


customForm.addEventListener('submit', handleNewSmoothie)

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

