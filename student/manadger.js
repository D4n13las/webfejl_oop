/**
 * @callback AddCallBack
 * @param {Student} student
 * 
 * @callback SelectCallBack
 * @param {Student} stundent
 */
class Mandeger{
    /**
     * @type {Student[]}
     */
    #array
    /**
     * @type {SelectCallBack}
     */
    #selectCallBack
    /**
     * @type {AddCallBack}
     */
    #addCallBack
    constructor(){
        this.#array = []
    }
    /**
     * Beállitjuk a add callback értéket
     * @param {AddCallBack} callback 
     */
    setAddCallBack(callback){
        this.#addCallBack = callback
    }
    /**
     * Beállitjuk a select callback értéket
     * @param {SelectCallBack} callback tartalmazza a callback impl
     */
    setSeleectCallBack(callback){
        this.#selectCallBack = callback
    }
    /**
     * Hozzadja a studentet a tombhoz és hiv egy callbacket
     * @param {Student} student hozzáadando diák 
     */
    add(student){
        this.#array.push(student)
        this.#addCallBack(student)
    }
    /**
     * Akkor hivjuk meg a ha szertnénk módosítani a details tartalmát
     * @param {Student} student választott diak
     */
    select(student){
        this.#selectCallBack(student)
    }
}