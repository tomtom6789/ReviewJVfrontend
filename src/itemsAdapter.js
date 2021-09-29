class ItemsAdapter {
    constructor(){
        this.baseURl = "http://localhost:3000/items"
    }


    // GET
    fetchItems() {
        fetch(this.baseURl)
        .then(resp => resp.json()) 
        .then(resp => {
            resp.data.forEach((el) => {
                 new Item(el.attributes)
                //   item.addItemToDom()
                // Category.displayItems()
            })
        })
    }



    // UPDATE
    sendPatchRequest(itemId){
        const price = document.getElementById(`update-price-${itemId}`).value
        const description = document.getElementById(`update-description-${itemId}`).value
        const name = document.getElementById(`update-name-${itemId}`).value


        let itemObj = {
            name,
            description,
            price
        }

        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(itemObj)
        }

        fetch(this.baseURl + `/${itemId}`, configObj)
        .then(res => res.json())
        .then(response => {
            let item = Item.all.find((i) => i.id === response.data.attributes.id )
            item.updateItemOnDom(response.data.attributes)
            // debugger;
            
        })
        // remove form

        let form = document.getElementById(`update-form-${itemId}`)
        form.remove()
    }



    // CREATE 
    handleForm(e) {
        const name = document.getElementById('item-name').value
        const description = document.getElementById('item-description').value 
        const price = document.getElementById('item-price').value
        const category_name = document.getElementById('item-category').value


    let newObject = {
        item:  {name,  
                description, 
                price, 
                category_name
        }
    }


    // debugger;

    e.preventDefault()

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
          // find the matching category
       let category =  Category.find(resp.data.attributes.category_id)


       // add and attach category if it is exist
       if(!category) {
         let category = new Category({
            id: resp.data.attributes.category_id,
            name: resp.data.attributes.category_name
         })
         category.attachToDom()
    
       }

       //add to dom if category is displayed
       let item = new Item(resp.data.attributes)
        if(!!currentCategory && currentCategory.id == item.category_id){
          item.attachToDom()
        }
    })

    itemForm.reset()
    let newForm = document.getElementById(`new-form-container`)
    newForm.hidden = true;
    let formButton = document.getElementById(`new-form-btn`)
    formButton.hidden = false;

   
}




    // DELETE 
    deleteItem(id) {
    // remove from db
    let configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }

    fetch(`http://localhost:3000/items/${id}`, configObj)
    .then(res => res.json())
    .then(json => {
        // debugger;
        alert(json.message)
    })




    // Delete from Dom 
    let item = document.getElementById(`item-${id}`)
    item.remove()
    // debugger
}
        




}




   