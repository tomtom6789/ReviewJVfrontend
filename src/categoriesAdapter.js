class CategoriesAdapter {

    constructor() {
        this.baseUrl = "http://localhost:3000/categories"
    }



    fetchCategories() {
        fetch(this.baseUrl)
        .then(resp => resp.json()) 
        .then(resp => {
            resp.data.forEach((el) => {
                this.sanitizeAndInitilizeCategory(el)
            
             
            })
        })

    }

    sanitizeAndInitilizeCategory(resp) {
        let cat = new Category({id: resp.id, ...resp.attributes})
        cat.attachToDom()
        // debugger


    }
    

}











