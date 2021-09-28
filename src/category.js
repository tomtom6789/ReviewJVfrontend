class Category {

    static all = []

    constructor({id, name}) {
        this.id = id 
        this.name  = name 


        this.element = document.createElement("li")
        this.element.id = `category-${id}`
        this.categoriesList = document.getElementById('category-list')
    
        

        Category.all.push(this)
    }


    static find(id) {
        return Category.all.find(cat => cat.id == id)
    }

    items(){
        return Item.all.filter((item) => item.category_id == this.id)

    }

    attachToDom() {
        this.categoriesList.append(this.fullRender())
        this.addEventListener()
    }


    addEventListener() {
        this.element.addEventListener("click", this.displayItems)
    
    }
    

    fullRender() {
        this.element.innerHTML = `
            <h1>${this.name}</h1>
        `
        return this.element
    }


    displayItems = () => {

        document.getElementById("item-list").innerHTML = ``

        this.items().forEach((i) => {
            i.attachToDom()
        })
    }








}


