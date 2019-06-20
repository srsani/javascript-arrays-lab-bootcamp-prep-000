var kittens = ["Milo", "Otis", "Garfield"];
//define your array here

// Add your functions and code here

function destructivelyAppendKitten (name) {
  kittens[kittens.length] = name
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
  return kittens
  
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten (name) {
  kittens.shift()
  return kittens
}

console.log(destructivelyRemoveFirstKitten())
var kittens = ["Milo", "Otis", "Garfield"];
console.log(kittens)