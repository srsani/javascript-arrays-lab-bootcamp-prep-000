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
  kittens.pop(-1)
  return kittens
}

console.log(destructivelyRemoveLastKitten())
var kittens = ["Milo", "Otis", "Garfield"];
console.log(kittens)