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
     * @param {Mandeger} manadger
     * @param {string} className a css osztaly 
     */
    constructor(className,manadger){
        super(className)
        manadger.setSeleectCallBack((student) => {
            this.div.innerHTML = ''
            const detailsContainer = document.createElement("div")
            detailsContainer.innerHTML = student.comment
            this.div.appendChild(detailsContainer)
        })
    }
}
/**
 * Ez fogja tartalmazni a diákok listáját
 */
class StudentArea extends Area{
    /**
     * @param {Mandeger} manadger manadger példány
     * @param {string} className a css osztaly 
     */
    constructor(className,manadger){
        super(className)
        manadger.setAddCallBack((student) => {
            const studentCard = document.createElement("div")
            studentCard.className = "student-card"
            const nameSpan = document.createElement("span")
            nameSpan.textContent = student.name
            nameSpan.style.color = student.bad ? 'red' : "black"
            studentCard.appendChild(nameSpan)
            studentCard.appendChild(document.createElement("br"))

            const averageSpan = document.createElement("span")
            averageSpan.textContent = student.avarage
            studentCard.appendChild(averageSpan)
            this.div.appendChild(studentCard)
            studentCard.addEventListener("click",(e)=>{
                const cardList = document.querySelectorAll(".student-card")
                for(const card of cardList){
                    card.className = "student-card"
                }
                e.currentTarget.classList.add("selected")
                manager.select(student)
            })
        })
    }
}