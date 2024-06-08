let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]
animals.pop()
console.log(animals)
animals.push("Dog")
console.log(animals)
animals.push("Mosquito", "Mouse", "Mule")
console.log(animals)
let includesCat = animals.includes("Cat")
console.log(includesCat)
//"Red deer"을 "Deer"로 바꾸시오
let index = animals.indexOf("Red deer");
if (index !== -1) {
    animals.splice(index, 1, "Deer");
}

console.log(animals);
//"Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
animals.splice(spiderIndex, 3);
//let tigerIndex = animals.indexOf("Tiger");

if (tigerIndex !== -1) {
    animals.splice(tigerIndex + 1);
}

console.log(animals);

let tigerIndex = animals.indexOf("Tiger");

if (tigerIndex !== -1) {
    animals.splice(tigerIndex + 1);
}

console.log(animals);

let bAnimals = animals.filter(animal => animal.startsWith("B") && animal >= "Baboon" && animal <= "Bison");

console.log(bAnimals);
