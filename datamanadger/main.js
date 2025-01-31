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
class dataTable{
    /**
     * @param {dataManager} dataManager
     */
    constructor(dataManager){
        const table  = document.createElement("table")
        document.body.appendChild(table)
        const header = document.createElement("thead")
        table.appendChild(header)
        const tbody = document.createElement("tbody")
        table.appendChild(tbody)
        dataManager.setUpateCallback((person) => {
            tbody.innerHTML = ""
            for(const prs of person){
                const sor = document.createElement("tr")
                tbody.appendChild(sor)
                const cella = document.createElement("td")
                cella.innerText = prs.nev
                sor.appendChild(cella)
                const cella2 = document.createElement("td")
                cella.innerText = prs.eletkor
                sor.appendChild(cella2)
            }
        })

        
    }
}
const dataManager_obj = new dataManager([{eletkor:18,nev:"Sándor"},{eletkor:20,nev:"Nem sándor"},{eletkor:17,nev:"Feri"}])
const dataTable2 = new dataTable(dataManager_obj)
