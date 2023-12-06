// common js
//const {sum,section} = require("./lib/utils")

// ES module
// import { sum, section } from "./lib/utils.js"

// console.log(section)
// console.log(sum(1, 2))

// const rootNode = document

// console.log(rootNode)
// console.log(rootNode.nodeName)
// console.log(rootNode.nodeType)
// console.log(rootNode.nodeValue)

// console.log(document.documentElement) // root element = html
// console.log(document.documentElement.nodeType) // root element =

// console.log(document.body) // html > body
// console.log(document.body.nodeType) // 1
// console.log(document.head) // html > head
// console.log(document.head.nodeType) // 1
// console.log(document.title) // html > head > title
// console.log(document.title) // 1

// head Element is a head element node
const headElement = document.head
console.log(headElement)

console.log(headElement.childNodes)
// return the children (all node type), NodeList data type
console.log(headElement.children)
// return child elements (only element type), HTMLCollection data type

const headChildNodes = headElement.childNodes
//NodeList is an array, can use all array functions
headChildNodes.forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

console.log("----------")

//HTMLCollection is an array-like (not real array), need to convert to array before using array function
const headChildren = headElement.children
Array.from(headChildren).forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

console.log("----------")

//firstChild
console.log(headElement.firstElementChild)
console.log(headElement.firstChild)
//lastChild
console.log(headElement.lastElementChild)
console.log(headElement.lastChild)

//parent
console.log(headElement.parentElement)
console.log(headElement.parentNode)

//previous sibling
console.log(headElement.previousElementSibling)
console.log(headElement.previousSibling)

//next sibling
console.log(headElement.nextElementSibling)
console.log(headElement.nextSibling)

const headFirstElementChild = headElement.firstElementChild
const headFirstElementChildAttrs = headFirstElementChild.attributes
console.log(headFirstElementChildAttrs)
Array.from(headFirstElementChild).forEach((attr) => console.log(attr))
