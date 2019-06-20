var kittens = ["Milo", "Otis", "Garfield"];
//define your array here

// Add your functions and code here

function destructivelyAppendKitten (name) {
  kittens[kittens.length] = name
  return kittens
}

function destructivelyPrependKitten (name) {
  return kittens.shift(name)
  
  
}

console.log(destructivelyAppendKitten('Ralph'))
var kittens = ["Milo", "Otis", "Garfield"];
console.log(kittens)