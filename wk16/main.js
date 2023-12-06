import { CookieUtil } from "./cookieUtil.js"
// const myCookies = document.cookie
// console.log(myCookies)

// document.cookie = "course=INT201;expires=max-age=300"
// console.log(myCookies)

// document.cookie = `credit=3;expire=${new Date(Date.now()+1000*60*60*24)}`

// document.cookie = `lecturer=Umaporn;expire${new Date(2023,11,25)}`

// console.log(myCookies)

// CookieUtil.set("course", "INT202", new Date(2023, 11, 31))
// CookieUtil.set("credit", "2", new Date(2024, 1, 1))
// console.log(CookieUtil.get("course"))
// console.log(CookieUtil.get("credit"))

// CookieUtil.unset("course name") // Cookie expired

// // new Date(yeara,monthIndex), day
// document.cookie = `lecturer=Umaporn;expires=${new Date(2023,11,25)};HTTPonly`

// console.log(document.cookie)

// let count = localStorage.getItem('counter')
// if(count===null){
//     localStorage.setItem('counter',1)
// } else {
//     localStorage.setItem('counter', ++count)
// }
// alert(localStorage.getItem('counter'))

// let count = sessionStorage.getItem("counter")
// if (count === null) sessionStorage.setItem("counter", 1)
// else sessionStorage.setItem("counter", ++count)
// alert(sessionStorage.getItem("counter"))
// sessionStorage.setItem("color", "green")
// sessionStorage.removeItem("counter")
// sessionStorage.clear() //remove all sessionStorage

// const submitColor = document.getElementById("submitColor")
// const colorInput = document.getElementById("colorInput")

window.addEventListener('load', () => {
    document.body.style = `background-color:${localStorage.getItem('yourColor')}`
  })
  const colorInput = document.getElementById('color-input')
  colorInput.addEventListener('input', (e) => {
    console.log(e.target.value)
    document.body.style = `background-color:${e.target.value}`
    localStorage.setItem('yourColor', e.target.value)
  })