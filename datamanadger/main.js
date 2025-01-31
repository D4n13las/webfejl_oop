/**
 * @typedef {{nev:String,eletkor:Number}} Person
 * @callback UpdateCallback
 * @param {} person
 * @returns {void}
 */
class dataManager{
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {UpdateCallback}
     */
    #updateCallback
    /**
     * 
     * @param {Person[]} arrayTomb 
     */
    constructor(arrayTomb = []){
        this.#array = arrayTomb
        this.#updateCallback = () => {}

    }
    /**
     * 
     * @param {UpdateCallback} callback 
     */
    setUpateCallback(callback){
        this.#updateCallback = callback
        this.#updateCallback(this.#array)
    }
    /**
     * @param {Person[]} sor
     */
    add(sor){
        this.#array.push(sor)
        this.#updateCallback(this.#array)
    }
    /**
     * @param {String} nev 
     */
    filterName(nev){
        const resoult = []
        for(let i= 0;i<this.#array.length; i++){
            if(nev == this.#array[i]){
                resoult.push(this.#array[i])
            }
        }
        this.#updateCallback(resoult)
    }
    /**
     * @param {Number} age 
     */
    filterAge(age){
        const resoult = []
        for(let i= 0;i<this.#array.length; i++){
            if(age == this.#array[i]){
                resoult.push(this.#array[i])
            }
        }
        this.#updateCallback(resoult)
    }

}
class dataTable{}