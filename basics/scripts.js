
class Player{
    constructor(nickname){
        this.nickname
        this.playedmatch = 0
    }
    play(){
        this.playedmatch++,
    console.log(this.nickname,this.playedmatch)
    }
    getTierlvl(){
    
    
    if (this.playedmatch<4){
        return "A tier"
    }
    else if (3<this.playedmatch && this.playedmatch<7){
        return "B tier"
    }
    else {
        return "C tiert"
    }
}
    }

const gomszab = new Player("gomszab")
gomszab.play()
gomszab.play()
gomszab.play()
gomszab.play()
console.log(gomszab.getTierlvl())
console.log(gomszab)

class Person {
    constructor(name) {
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Student extends Person {
    constructor(name,school){
        super(name)
        this.school = school;
    }
}

const student = new Student("Géza", "Bolyai");
console.log("név"+ student.getName()+ "| iskola " + student.school);

class Animal {
    constructor(name){
        this.name=name;

    }

    hang() {
        console.log(this.name + " hangot ad ki ");
    }
}

class Mammal extends Animal {
    constructor(name){
        super(name)
    }

    setal() {
        console.log(this.name + " gyalagol")
    }
}

const bird = new Bird ("cinege");

bird.hang();
bird.repul();

const mammal = Mammal("Macska");
mammal.hang()
mammal.setal()