
const itemsAdapter = new ItemsAdapter
const categoriesAdapter = new CategoriesAdapter
let currentCategory 





// // function fetchItems() {
// //     fetch('http://localhost:3000/items')
// //     .then(res => res.json())
// //     .then(addItems)
// // }


// // function addItems(resp) {
// //     resp.data.forEach(item => {
// //         addItemsToDom(item)
// //     })
// // }


// // function addItemsToDom(item) {

// //     itemList.innerHTML +=  `
// //     <div id="item-${item.id}">
//     // <li>
//     //         $<span class = "price">${item.attributes.price}</span>
//     //         <strong class = "name">${item.attributes.name}</strong>:
//     //         <span class = "description">${item.attributes.description}</span>
//     // </li>   
//     //         <button class = "delete" data-id = "${item.id}">Delete</button>
//     //         <button class = "update" data-id = "${item.id}">Update</button>
// //     </div>
// //     `
// // }



// // function handleForm(e) {
 
// //     e.preventDefault()


// //     let newObject = {
// //         name: itemName.value, 
// //         description: itemDescription.value,
// //         price: itemPrice.value
// //     }

// //     let configObj = {
// //         method: 'POST',
// //         headers: {
// //             "Content-Type": "application/json",
// //             Accept: "application/json"
// //         },
// //         body: JSON.stringify(newObject)
// //     }


// //     fetch('http://localhost:3000/items', configObj)
// //     .then(resp => resp.json())
// //     .then(resp => {
// //         addItemsToDom(resp.data)
// //     })
// //     // debugger
// //     // itemForm.reset()
   
// // }


// // function deleteItem(id) {

// //     // remove from db 


// //     let configObj = {
// //         method: 'DELETE',
// //         headers: {
// //             "Content-Type": "application/json",
// //             Accept: "application/json"
// //         }
// //     }

// //     fetch(`http://localhost:3000/items/${id}`, configObj)
// //     .then(res => res.json())
// //     .then(json => {
// //         alert(json.message)
// //     })




// //     // Delete from Dom 
// //     let item = document.getElementById(`item-${id}`)
// //     item.remove()
// //     // debugger
// // }


function addUpdatedItemField(id){

    let item = document.querySelector(`#item-${id} li`)
    let name = item.querySelector('.name').innerText
    let description = item.querySelector('.description').innerText
    let price = item.querySelector('.price').innerText



    let updateForm = `
    <input type="number" value="${price}" name="price" id="update-price-${id}">
    <input type="text" name="name" value="${name}" id="update-name-${id}">
    <input type="text" name="description" value="${description}" id="update-description-${id}">
    `


    let formDiv = document.createElement('div')
        formDiv.id = `update-form-${id}`
        formDiv.innerHTML = updateForm
        item.append(formDiv)    
        // debugger

}


// // function sendPatchRequest(id) {

// //     let updatedPrice = document.getElementById(`update-price-${id}`)
// //     let updatedName = document.getElementById(`update-name-${id}`)
// //     let updatedDescription = document.getElementById(`update-description-${id}`) 
    
// //     let newItemObject = {
// //         name: updatedName.value,
// //         price: updatedPrice.value,
// //         description: updatedDescription.value
// //     }

// //     let configObj = {
// //         method: "PATCH", 
// //         headers: {
// //             "Content-Type": "application/json",
// //             "Accepts": "application/json"
// //         },
// //         body: JSON.stringify(newItemObject)
// //     }


// //     fetch(`http://localhost:3000/items/${id}`, configObj) 
// //         .then(resp => resp.json())
// //         .then(resp => updateItemOnDom(resp.data))



// //      // Remove form   
// //     let form = document.getElementById(`update-form-${id}`)
// //     form.remove()

// // }


// // function updateItemOnDom(item) {
// //     let liItem  = document.querySelector(`#item-${item.id} li`)
// //     liItem.querySelector('.price').innerText = item.attributes.price
// //     liItem.querySelector('.name').innerText = item.attributes.name 
// //     liItem.querySelector('.description').innerText = item.attributes.description

// //     // debugger;

// // }

// // function handlerClick(e) {
// //     if(e.target.className === "delete") {
// //         let id = e.target.dataset.id
// //         deleteItem(id)
// //     } else if (e.target.className === "update") {
// //         let itemId = e.target.dataset.id
// //         e.target.className = "save"
// //         e.target.innerText = "Save"
// //         addUpdatedItemField(itemId)
// //     } else if (e.target.className === "save") {
// //         let id = e.target.dataset.id 
// //         e.target.className = "update"
// //         e.target.innerText = "Update"
// //         itemsAdapter.sendPatchRequest(id)
// //     }
 
// // }



function hideBtnLoadForm(e) {
    // debugger;
    e.target.hidden = true
    const newForm = document.getElementById('new-form-container')
    newForm.hidden = false 

}


document.addEventListener("DOMContentLoaded", function() {
    categoriesAdapter.fetchCategories()
    itemsAdapter.fetchItems()

    const itemForm = document.getElementById('item-form')
    itemForm.addEventListener("submit", itemsAdapter.handleForm)

    const newFormBtn = document.getElementById('new-form-btn')
    newFormBtn.addEventListener('click', hideBtnLoadForm)

 
})




