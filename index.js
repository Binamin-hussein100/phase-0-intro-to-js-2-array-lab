// Write your solution here!
let cats = ['Milo','Otis','Garfield']

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}



function prependCat(name){
    let newCats = [...cats]
    newCats.unshift(name)
    
    return newCats
}



function removeFirstCat(){
    let newCat = [...cats]
    newCat.shift()
    return newCat
}

function appendCat(name){
    let newCat = [...cats]
    newCat.push(name)
    console.log(newCat)
    return newCat

}
appendCat("Broom")

function removeLastCat(){
    let newCat = [...cats]
    newCat.pop()

    return newCat
}

