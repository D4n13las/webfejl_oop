const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1
        this.firstname2 = obj.firstname2
        this.lastname = obj.lastname
    }
    render(parentElement){
        const sor = document.createElement("tr")
        parentElement.appendChild(sor)
        const cell = document.createElement("td")
        sor.appendChild(cell)
        if(this.firstname2 == undefined){
            cell.colSpan = 2
        }
        else{
            const cell2 = document.createElement("td")
            cell2.innerText = this.firstname2
            sor.appendChild(cell2)
        }
        cell.innerText = this.firstname1
        const lastname = document.createElement("td")
        lastname.innerText = this.lastname
        sor.appendChild(lastname)
    }
}
innit()
function innit(){
    const tbody = document.getElementById('tbodyId')
    for(const obj of array){
        const  lls = new Person(obj)
        lls.render(tbody)
    }
}
