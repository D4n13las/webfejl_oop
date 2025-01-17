class ArrayList{
    #hossz_szamlalo
    #belso_status
    /**
     * @type {Number} szamnak definialja a hosszat
     */
    #Count
    // hossz privat

    #obj
    get Count(){ // get hossz
        this.#Count
        return this.#Count
    }
    constructor(){
        this.#Count = 0
        this.#obj = {}
    }
    Add(Item){
        const actualis_hossz = this.#Count
        this.#obj[actualis_hossz] = Item;
        this.#Count++
        Object.defineProperty(
            this, actualis_hossz, {
                get:function(){
                    return this.#obj[actualis_hossz]
                },
                set:function(value){
                    this.#obj[actualis_hossz] = value
                }
            }
        )
    }
    Clear(){
        this.#Count = 0
        this.#obj = {}
    }

}
const gyemant_csirke = {}
gyemant_csirke.a = "def"
gyemant_csirke[0] = 0
const alma = {}
Object.defineProperty(alma,"nev", {
    value: "Ferenc",writable : true
})
alma.nev = "asd"
console.log(gyemant_csirke)
console.log(alma)