
// Get the element with an ID of 'first' using querySelector
const firstElement = document.getElementById("first")
console.log(firstElement)

// Get the elements with a class of 'second' with querySelector
const second = document.getElementsByClassName('second')
console.log(second)
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
const prompt = document.querySelectorAll('elements')
console.log(prompt)
// Get the span element using querySelector
const span = document.querySelector('span')
console.log(span)
// Get multiple span elements using querySelectorAll
const multipleElements = document.querySelectorAll('span')
console.log(multipleElements)
// Select only "a" tags *directly inside* of a div (no grandchildren).
const paras = document.getElementsByTagName('a')
console.log(paras)
// Select all elements that contain a "data-target" attribute
const dataTarget = document.querySelectorAll('li')
console.log(dataTarget)
// Select all elements where the data-target attribute equals "#false"

const para = document.querySelectorAll('li')
console.log(para)