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

// function appendCat(name){
//     // myLength = cats.length()
//     cats.splice(3,0,name)
// }

function prependCat(name){
    newCats = cats.splice(0,0,name)
}

function removeFirstCat(){
    newArray = cats.slice(1)
}



