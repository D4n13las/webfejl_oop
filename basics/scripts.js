function Player(nickName,playedMaches){
    this.nickName = nickName
    this.playedMaches = playedMaches
}

Player.prototype.play = function(){
    this.playedMaches++
    console.log(this.nickName,this.playedMaches)
}
Player.prototype.getTierLEv = function (){
    if(this.playedMaches <= 3){
        return "A tier"
    }
    else if (this.playedMaches > 3 && this.playedMaches < 6){
        return "B tier" 
    }
    else{
        return "C tier"
    }
}
const gomszab = new Player("gomszab", 1)
gomszab.play()
gomszab.play()
gomszab.play()

console.log(gomszab.getTierLEv())