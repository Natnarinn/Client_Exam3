const body = document.body
const bodyChildNodes = body.childNodes //NodeList : array-like (implement fot-each, cannot array method), return children with all node type
const bodyChildren = body.children //HTMLCollection : array-like (not implement fot-each, cannot array method), return children with only element type

console.log(body)
console.log(bodyChildNodes)
console.log(bodyChildren)

bodyChildNodes.forEach((bcn) => {
  console.log(bcn)
})

Array.from(bodyChildren).forEach((bc) => {
  console.log(bc)
})

console.log(body.firstChild)
console.log(body.firstElementChild)
console.log(body.lastChild)
console.log(body.lastElementChild)
console.log(body.firstChild === body.firstElementChild)
console.log(body.lastChild === body.lastElementChild)

console.log(document.documentElement === document.firstElementChild)
console.log(document.documentElement === document)

console.log(document.documentElement)
console.log(document)

//query/select element by id
const course201Ele = document.getElementById("int201")
console.log(course201Ele)
const course101Ele = document.querySelector("#int101")
console.log(course101Ele)
const bscitCourses = document.querySelector("#int201,#int101,.programming")
console.log(bscitCourses)
const progCourses = document.querySelector(".programming")
console.log(progCourses)

//select/query a collection of elements
//find with css selector
const progEle = document.querySelectorAll("#int201, .programming")
console.log(progEle) //NodeList
const liEle1 = document.querySelectorAll("li")
console.log(liEle1) //Nodelist

//find with tag name
const liEle2 = document.getElementsByTagName("li")
console.log(liEle2) //HTMLCollection

//find with classname
const coursesEle = document.getElementsByClassName("courses")
console.log(coursesEle)

const divLectElement = document.querySelector(".lecturers")
//get <li> under div.lecturers
const liDivLect = divLectElement.querySelectorAll("li")
console.log(liDivLect)
//get <li> under document node
const allLi = document.querySelectorAll("li")
console.log(allLi)

const firstDiv = document.body.firstElementChild
console.log(firstDiv)
const firstDivAttribute = firstDiv.attributes
console.log(firstDivAttribute) //length = 2, id and class attribute

Array.from(firstDivAttribute).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})

console.log(firstDiv.getAttribute("id")) // return value of specific attribute id
console.log(firstDiv.getAttribute("class")) //return value of specific attribute name

const firstAttribute = firstDivAttribute[0]
console.log(firstAttribute.ownerDocument)
console.log(firstAttribute.ownerElement)

// create a new attribute named 'owner' with value with the value 'Natnarin'
firstDiv.setAttribute("owner", "Natnarin")

//create a new <p> under div.courses
const newPEle = document.createElement("p") //<p></p>
//newPEle.textContent = '<span style="color:red"> Client Web Programming II</span>' //<p>Client Web Programming II</p>

//newPEle.innerHTML = '<span style="color:red"> Client Web Programming II</span>'
newPEle.innerText =
  '<span style="display:none" > Client</span> Web Programming II'
console.log(newPEle.innerText)
console.log(newPEle.textContent)
console.log(newPEle.innerHTML)
newPEle.setAttribute("id", "int203") // <p id="int203">Client Web Programming II</p>
newPEle.setAttribute("class", "courses") //<p id="int203" class="courses">Client Web Programming II</p>

const divCoursesParent = document.getElementById("bscit-courses")
//divCoursesParent.appendChild(newPEle)

const refNode = divCoursesParent.lastElementChild
//divCoursesParent.insertBefore(newPEle, refNode)
divCoursesParent.replaceChild(newPEle, refNode) // replace int201 with int203

divCoursesParent.removeChild(newPEle)

window.alert('Do you want to exit?')
const username = window.prompt('Pleases enter your name', 'Ex. Natnarin Chaisiripanich') // cancel return null, if ok return value
console.log(username)
const userAction = window.confirm(`Good Bye, ${username}`)
console.log(userAction)




