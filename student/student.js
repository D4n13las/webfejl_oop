/**
 * Student entitásokat keresi a mandeger amikor selectelunk egy studentot
 */
class Student{
    /**
     * @type {number}
     */
    #average
    /**
     * @type {string}
     */
    #name
    /**
     * @type {string}
     */
    #comment
    /**
     * @type {boolean}
     */
    #bad
    /**
     * @returns {Number} 
     */
    get avarage(){
        return this.#average
    }
    /**
     * @returns {String} 
     */
    get name(){
        return this.#name
    }
    /**
     * @returns {String} 
     */
    get comment(){
        return this.#comment
    }
    /**
     * @returns {boolean} 
     */
    get bad(){
        return this.#bad
    }
    /**
     * 
     * @param {String} name diák neve
     * @param {Number} avarage diák átlaga
     * @param {String} comment vélemlny
     * @param {boolean?} bad Rossz-e
     */
    constructor(name,avarage,comment,bad){
        this.#name = name
        this.#average = avarage
        this.#comment = comment
        this.#bad = bad 
    }
}