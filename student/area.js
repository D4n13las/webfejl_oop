class Area{
    /**
     * @type  {HTMLDivElement} element kontainer
     */
    #div
    /**
     * @returns {HTMLDivElement} kontainer vissza tér
     */
    get div(){
        return this.#div
    }
    /**
     * 
     * @param {string} className a css class name amt a konténerhez adunk
     */
    constructor(className){
        const container = this.#getcontainer()
        this.#div = document.createElement("div")
        this.#div.className = className
        container.appendChild(this.#div)
    }
    /**
     * a konténer classba teszuk bele
     * @returns {HTMLDivElement} kontainer class vissza
     */
    #getcontainer(){
        let container = document.querySelector(".container")
        console.log(container)
        if (!container){
            container = document.createElement("div")
            container.className = "container"
            document.body.appendChild(container)
        }
        return container
    }
}
/**
 * létrehoz egy details teruletet a megadott css osztályal
 */
class DetailsArea extends Area{
    /**
     * 
     * @param {string} className a css osztaly 
     */
    constructor(className){
        super(className)
    }
}
/**
 * Ez fogja tartalmazni a diákok listáját
 */
class StudentArea extends Area{
    /**
     * 
     * @param {string} className a css osztaly 
     */
    constructor(className){
        super(className)
    }
}