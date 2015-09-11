/*
  obj: Object => value of Object.price,

  var obj1 = {
    price: 12
  }
  getPrice(obj1) => 12

  var obj2 = {
    price: "price"
    name: "thing"
  }
  getPrice(obj2) => "price"

  var obj3 = {
    name: "thing"
  }
  getPrice(obj3) => undefined

  Returns the value of the price property in an object
*/
function getPrice(obj) {
    return obj.price;
}

/* Maps a new array with only the prices in the array */
var priceList = items.map(getPrice);

/*
arr: Array => Number

  var arr1 = [2, 3, 4]
  itemsPriceAverage(arr1) => 3

  var arr2 = ['word, 2']
  itemsPriceAverage(arr2) => NaN

  Returns the average of all the numbers in an array by adding the numbers
  together using the reduce function then dividing by the length of the array.
  The answer is rounded.
*/

function itemsPriceAverage(arr) {
  return arr.reduce(function (firstNum, secondNum) {
    return Math.round(Number(firstNum + secondNum));
  })/arr.length;
}
console.log('-------------Question 1---------------');
console.log('The average price is ' + itemsPriceAverage(priceList));

/*

  var obj1 = {
  price: 16,
  currency_code: USD,
  }
  isPrice(obj1) => true

  var obj2 = {
  price: 14,
  currency_code: USD,
  }
  isPrice(obj2) => false

  var obj3 = {
  price: 18,
  currency_code: USD,
  }
  isPrice(obj3) => false

  var obj4 = {
  price: 20,
  currency_code: USD,
  }
  isPrice(obj4) => false

  var obj5 = {
  price: 10,
  currency_code: USD,
  }
  isPrice(obj5) => false

  var obj6 = {
  price: 15,
  currency_code: GBP
}

  Checks to see if price property in an object is between 14 and 18
*/

function isPrice(el) {
  if (el.price > 14 && el.price < 18 && el.currency_code === "USD") {
    return true;
  } else {
    return false;
  }
}

var itemList = items.filter(isPrice);

/*
  obj: Object -> Object

  var obj1 = {
  name: 'name'
  }
  getNameAndPrice(obj1) => {name: 'name'}

  var obj2 = {
  name: 'name',
  price: 1,
  type: 'thing',
  old: true
  }
  getNameAndPrice(obj2) => {name: 'name'}

  Creates a new object with only the title property still present.
*/

function getName(obj){
  var newObj = {
    title: obj.title
  };
  return newObj;
}

/* Creates a new array filled with objects with only price and title properties */
var nameList = itemList.map(getName);

console.log('-------------Question 2---------------');
console.log('Items that cost between $14.00 and $18.00');
console.log(nameList);

function isGBP(el) {
  if (el.currency_code === 'GBP') {
    return true;
  } else {
    return false;
  }
}

var listGBP = items.filter(isGBP);

function getNameAndPrice(obj){
  var newObj = {
    title: obj.title,
    price: obj.price
  };
  return newObj;
}

var listGBPNameAndPrice = listGBP.map(getNameAndPrice);

console.log('-------------Question 3---------------');
listGBPNameAndPrice.forEach(function (obj) {
  console.log(obj.title + ' costs ' + obj.price);
});

function hasWood(obj) {
  if (obj.materials.indexOf('wood') > -1) {
    return true;
  } else {
    return false;
  }
}

var listWood = items.filter(hasWood);

var listWoodName = listWood.map(getName);

console.log('-------------Question 4---------------');
listWoodName.forEach(function (obj) {
  console.log(obj.title);
});

function hasMaterialLength_8 (obj) {
  if (obj.materials.length > 7) {
    return true;
  }
  else {
    return false;
  }
}

var listMaterials_8 = items.filter(hasMaterialLength_8);

console.log('-------------Question 5---------------');
listMaterials_8.forEach(function (obj) {
  console.log(obj.title + ' has ' + obj.materials.length + ' materials:');
  obj.materials.forEach(function(materials, i) {
    console.log(obj.materials[i]);
  });
});

function isMadeBySeller(obj) {
  if (obj.who_made === 'i_did') {
    return true;
  } else {
    return false;
  }
}

var listSeller = items.filter(isMadeBySeller);

console.log('-------------Question 6---------------');
console.log(listSeller.length + ' were made by their sellers.');
