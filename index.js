const itemList = document.getElementById('item-list')


function fetchItems() {
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(addItemsToDom)
}


function addItemsToDom(resp) {
  

    resp.included.forEach( item => {
    itemList.innerHTML += `<li id="item-${item.id}">${item.attributes.name}</li>`
    // debugger;
})




}




fetchItems()