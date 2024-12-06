class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor() { 
        this.manokList = []

    } //
    addMano(mano){
        this.manokList.push(mano)
        createRow(mano)
    }
}
   
   class Companion{
    // TODO 5
    constructor(id,veznev,kernev,reszleg){
      this.id = id
      this.veznev = veznev
      this.kernev = kernev
      this.reszleg = reszleg  
      this.productList = [] //mivel nemszükséges a példányétre hozásakor
    }
    getName(){ // nem kell parméter class ra hivatkozik
        return this.veznev + " " +this.kernev
    }
    doHozzafuz(product) {
        this.productList.push(product)
    }
    
   }