class Category {

    static all = []

    constructor({id, name}) {
        this.id = id 
        this.name  = name 
        this.sorted = false 


        this.element = document.createElement("li")
        this.element.id = `category-${id}`
        this.categoriesList = document.getElementById('category-list')
    
        

        Category.all.push(this)
    }

    
    static find(id) {
        Category.all.find(cat => cat.id == id)
    }


    sortedItems() {
        return this.items().sort(function(a,b){
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
          })
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

        currentCategory = this 
        const itemList = document.getElementById("item-list")
        itemList.innerHTML = ``

        
        let items = this.sorted ? this.sortedItems() : this.items()
            items.forEach((i) => {
            i.attachToDom()
        })


        const sortBtn = document.createElement("button")
        sortBtn.id = `sort-${this.id}`
        sortBtn.textContent = "Sort"
        itemList.append(sortBtn)
        sortBtn.addEventListener("click", (e) =>{
            // debugger;
            this.sorted = !this.sorted
            this.displayItems()
        })

    




    }








}


