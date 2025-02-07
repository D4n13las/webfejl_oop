/**
 * @typedef {{nev:string,eletkor:number}} Person
 * @callback Updatecallback
 * @param {Person[]} person
 * @returns {void}
 */




class Datamanager {
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {Updatecallback}
     *
     *  */   
    
    #updatecallback
    /**
     * 
     * @param {Person[]} array 
     */
    constructor(array = []){
        this.#array = []
        this.#array = array
        this.#updatecallback = ()=>{}
        /**
         * @param {}
         */
    }
    setupdatecallback(callback){
        this.#updatecallback=callback
        this.#updatecallback(this.#array)
    }
    /**
         * 
         * @param {Person} item
         */
    add(item){
        this.#array.push(item)
        this.#updatecallback(this.#array)
    }
    
    filter_name(asd){
        const result = []
        for(const elem of this.#array){
           if( elem.nev===asd){
            result.push(elem)
           }
        }
        this.#updatecallback(result)
    }
    
    filter_Age(asd){
        const result = []
        for(const elem of this.#array){
           if( elem.eletkor===asd){
            result.push(elem)
           }
        }
    
        this.#updatecallback(result)
    }
    }
    
    
    
    class Datatable { 
    /**
     * @param {@Datamanager} datamanager
     */
        constructor(datamanager){
            const table = document.createElement("table")
            document.body.appendChild(table)
    
            const thead = document.createElement("thead")
            table.appendChild(thead)
    
            const tbody = document.createElement("tbody")
            thead.appendChild(tbody)
    
            datamanager.setupdatecallback((persons)=>{
                for(let elem of persons){
                    const sor = document.createElement('tr')
                    
    
                    const cella = document.createElement('td')
                    cella.innerHTML=elem.nev
                    sor.appendChild(cella)
                    const cella1 = document.createElement('td')
                    cella1.innerHTML=elem.eletkor
                    sor.appendChild(cella1)
                    tbody.appendChild(sor)
                }
            })
        }
    
        
    }
    
    const manager = new Datamanager([{nev:"Feri", eletkor: 17} ,{ nev:"Teri",eletkor:18},{nev:"Gábor",eletkor:18 }])
    const table = new Datatable(manager)
    
    const input = document.createElement('input')
    // input.addEventListener('input',(e))
    const input2 = document.createElement("input")
    document.body.appendChild(input2)
    input2.type = "file";
    input2.addEventListener('change',(e)=>{
        const file = e.target.files[0];
        const fileOlvas = new FileReader()
        fileOlvas.readAsText(file)
        fileOlvas.onload = (e) => {
            const file_content = fileOlvas.result;
            const split_names = file_content.split("\n")
            for(const item of split_names){
                const task = item.split(";")
                let pers = {
                    nev: task[0],
                    eletkor: Number(task[1])
                }
                let manedger = new Datamanager([pers])
                let table = new Datatable(manedger)
            }
        }
    })