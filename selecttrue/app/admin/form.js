class FormController{
    /**
     * @type {Manager}
     */
    #manager;
    #formFieldArray;
    /**
     * 
     * @param {Manager} manager 
     * @param {{label:string, type: string, id: string, optional?:boolean}} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
        this.#formFieldArray = [];
        this.#manager = manager
        const form = document.createElement("form")
        document.body.appendChild(form)
        for(const field of fieldConfiguration){
            const formField = new FormField(field.id,field.label,field.type,field.optional)
            this.#formFieldArray.push(formField)
            form.appendChild(formField.getDivElement())
        }
        const sendButton = document.createElement("button")
        sendButton.textContent = "Elkuldes"
        form.appendChild(sendButton)
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            if(this.#valdateFields()){
                const value = this.#getValueObject()
            }
        })
    }
    /**
     * 
     */
    #valdateFields(){
        let valid =true
        for(const formField of this.#formFieldArray){
            if(!formField.optional){
                if(formField.value == ""){
                    formField.error = "A mezo kitoltese kotelezo"
                    valid = false
                }
            }
        }
        return valid
    }
    #getValueObject(){
        const result = {};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value
        }
        console.log(result)
        return result
    }
}
/**
 * EZ lablel input error
 */
class FormField{
    /**
     * @type {String}
     */
    #id
    /**
     * @type {String}
     */
    #type
    /**
     * @type {boolean}
     */
    #optional

    /**
     * @type {HTMLInputElement}
     */
    #inputField
    /**
     * @type {HTMLLabelElement}
     */
    #labelElement

    /**
     * @type {HTMLSpanElement}
     */
    #errorField
    get id(){
        return this.#id

    }
    /**
     * Valami semmi mindegy minek is van
     * @returns {boolean|string}
     */
    get value(){
        if(this.#type === "checkbox"){
            return this.#inputField.checked
        }
        return this.#inputField.value
    }
    get optional(){
        return this.#optional
    }
    set error(value){
        this.#errorField.textContent = value
    }
    /**
     * 
     * @param {string} id 
     * @param {string} labelContent 
     * @param {string} type 
     * @param {boolean} option 
     */
    constructor(id,labelContent,type,option = false){
        this.#id = id
        this.#type = type
        this.#labelElement = Gomszab.makeLabel(id,labelContent)
        this.#optional = option
        this.#inputField = Gomszab.makeInput(id,type)
        this.#errorField = Gomszab.makeErrorField()
    }
    getDivElement(){
        const field = [this.#labelElement,this.#inputField,this.#errorField]
        const div = Gomszab.makeDiv(field)
        return div
    }
}