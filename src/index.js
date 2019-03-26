

const orderList = document.getElementById("order-list")

const customForm = document.getElementById("custom-smoothie") 
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
    const image = document.createElement('img')
    image.src = smoothie.image
    const p = document.createElement('p')
    p.textContent = smoothie.ingredients
    const likes = document.createElement('p')
    likes.textContent = `Likes: ${smoothie.likes}`
    const category = document.createElement('p')
    category.textContent = `- ${smoothie.category}`
    const creator = document.createElement('p')
    creator.textContent = smoothie.created_by
    const likeButton = document.createElement('button')
    likeButton.textContent = "Like <3"
    likeButton.dataset.id = smoothie.id
    likeButton.addEventListener('click', handleLikeButton)

    const addOrderButton = document.createElement('button')
    addOrderButton.textContent = "Order"
    addOrderButton.dataset.id = smoothie.id
    addOrderButton.addEventListener('click', addSmoothieOrder)

    menu.appendChild(card)
    card.appendChild(h4)
    card.appendChild(p)
    card.appendChild(likes)
    card.appendChild(creator)
    card.appendChild(category)
    card.appendChild(likeButton)
    card.appendChild(addOrderButton)
}

function handleLikeButton(e) {
  console.log(e.target)
}

function addSmoothieOrder(smoothie) {
    console.log(event)
    const smoothieName = event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText
    
    const h3 = document.createElement('h3')
    h3.textContent = smoothieName
    h3.setAttribute('class', 'smoothie_title')

    orderList.appendChild(h3)
}


function handleNewSmoothie(event) {
  event.preventDefault()
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

