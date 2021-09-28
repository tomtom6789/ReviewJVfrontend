class Item{

    static all = []

    constructor({name, description, price, id, category_id}){
        this.name = name 
        this.description = description 
        this.price = price 
        this.id = id
        this.category_id = category_id
        
        this.element = document.createElement('div')
        this.element.id = `item-${this.id}`
        // this.itemList = document.getElementById('item-list')
        // this.element.addEventListener("click", this.handlerClick)

        Item.all.push(this)

       

    }

    get itemList() {
        return document.getElementById('item-list')
    }


    get category() {
        return Category.all.find((cat) => cat.id == this.category_id)
    }


    addEventListener() {
        this.element.addEventListener("click", this.handlerClick)
    }



    attachToDom() {
        this.itemList.append(this.fullRender())
        this.addEventListener()
    }

    
     handlerClick = (e) => {
        if(e.target.className === "delete") {
            let id = e.target.dataset.id
            itemsAdapter.deleteItem(id)
        } else if (e.target.className === "update") {
            let itemId = e.target.dataset.id
            e.target.className = "save"
            e.target.innerText = "Save"
            addUpdatedItemField(itemId)
        } else if (e.target.className === "save") {
            let id = e.target.dataset.id 
            e.target.className = "update"
            e.target.innerText = "Update"
            itemsAdapter.sendPatchRequest(id)
        }
     
    }


    fullRender() {
        this.element.innerHTML = `
        <li>
        $<span class = "price">${this.price}</span>
        <strong class = "name">${this.name}</strong>:
        <span class = "description">${this.description}</span>
        </li>   
        <button class = "delete" data-id = "${this.id}">Delete</button>
        <button class = "update" data-id = "${this.id}">Update</button>`
        return this.element
  
     }
    

    updateItemOnDom({price, name, description}) {
            this.name = name
            this.description = description
            this.price = price
            this.fullRender()
        
    }



    


    
  
}


