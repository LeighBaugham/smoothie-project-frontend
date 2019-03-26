document.addEventListener('DOMContentLoaded', function(event) {


const customForm = document.getElementById("custom-smoothie")


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
})