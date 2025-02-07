const sum = (a,b) => {let resoult = a+b
return resoult};
console.log(sum(4,5))

const obj = {}
obj.calculate1 = sum
console.log(obj.calculate1(4,5))

obj.calculate2 = (cb => {
    const res = cb(4,5)
    return res
})

const result1 = obj.calculate2((a,b) => {const szam3 = a+b;return szam3})
console.log(result1)
const result2 = obj.calculate2((a,b) => {const szam3 = a-b;return szam3})
console.log(result2)

obj.calculate3 = (a,b,cb) => {
    const szam3 = cb(a,b);
    return szam3
}
obj.calculate3(5,7,(a,b)=> {return a+b})

const theFunction = () => {
    const szam10 = 10
    const finalRes = obj.calculate3(5,7,(a,b)=> {return a*szam10+b})
    console.log(finalRes)
}
theFunction()