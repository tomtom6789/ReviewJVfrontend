class ItemsAdapter {
    constructor(){
        this.baseURl = "http://localhost:3000/items"
    }


    // Get 
    fetchItems() {
        fetch(this.baseURl)
        .then(resp => resp.json()) 
        .then(resp => {
            resp.data.forEach((el) => {
                let item = new Item(el.attributes)
                  item.addItemToDom()
            })
        })
    }



    // Update
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



        




}

