const itemList = document.getElementById('item-list')
const itemName = document.getElementById('item-name')
const itemDescription = document.getElementById('item-description')
const itemPrice = document.getElementById('item-price')
const itemForm = document.getElementById('item-form')


function fetchItems() {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(addItems)
}


function addItems(resp) {
  
    resp.data.forEach(item => {
        addItemsToDom(item)
    })
}
function addItemsToDom(item) {

    itemList.innerHTML +=  `
    <div id="item-${item.id}">
    <li>
            $<span class = "price">${item.attributes.price}</span>
            <strong class = "name">${item.attributes.name}</strong>:
            <span class = "description">${item.attributes.description}</span>
    </li>
    </div>
    `
}



function handleForm(e) {
 
    e.preventDefault()
    let newObject = {
        name: itemName.value, 
        description: itemDescription.value,
        price: itemPrice.value
    }

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newObject)
    }


    fetch('http://localhost:3000/items', configObj)
    .then(resp => resp.json())
    .then(resp => {
        addItemsToDom(resp.data)
    })
    debugger
    // itemForm.reset()
   
}





document.addEventListener("DOMContentLoaded", function() {
    fetchItems()
    itemForm.addEventListener("submit", handleForm)
    
})




