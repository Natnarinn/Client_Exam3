// 1.select HTML objects
// const outer = document.getElementById('outer-div')
// const inner = document.getElementById('inner-div')

// const submitButton = document.querySelector('button')

// 2. select event type "click"
// 3. register event type to HTML objects
// outer.addEventListener("click", (e) => {
//     console.log('outer div clicked')
//     console.log(e.type) //click
//     console.log(e.target) //<button>Submit</button>
//     console.log(e.currentTarget) //<div id="outer-div" style="height: 200px; width: 50%; background-color: black"> <div id="inner-div" style="height: 100px; width: 50%; background-color: red"><button>Submit</button></div></div>
//     console.log(e.eventPhase) //3
// },true)

// inner.addEventListener("click", (e) => {
//     console.log('inner div clicked')
//     console.log(e.type) //click
//     console.log(e.target) //<button>Submit</button>
//     console.log(e.currentTarget) //<div id="outer-div" style="height: 200px; width: 50%; background-color: black"> <div id="inner-div" style="height: 100px; width: 50%; background-color: red"><button>Submit</button></div></div>
//     console.log(e.eventPhase) //3
// },true)

// submitButton.addEventListener("click", (e) => {
//     console.log('submit button clicked')
//     console.log(e.type) //click
//     console.log(e.target) //<button>Submit</button>
//     console.log(e.currentTarget) //<div id="outer-div" style="height: 200px; width: 50%; background-color: black"> <div id="inner-div" style="height: 100px; width: 50%; background-color: red"><button>Submit</button></div></div>
//     console.log(e.eventPhase) //3
// },true)

// function doSomething() {
//     console.log('do Something')
// }

// //multiple function handles on same HTML object and event type
// submitButton.addEventListener('click', () => {
//     console.log('submit clicked')
// })
// submitButton.addEventListener('click', doSomething)
// submitButton.removeEventListener('click', doSomething)
// //ไม่ควรเขียนเป็น anonymous function เพราะจะทำให้ฟังก์ชันไม่ทำงาน ควรเขียนเเบบ named function เท่านั้น
// submitButton.removeEventListener('click', () => {
//     console.log('submit clicked')
// })

// const submitButton = document.getElementById("submit-btn-01")
// submitButton.addEventListener("click", (e) => {
//   e.preventDefault()
//   console.log("submit clicked")
// })

// const submitButton = document.getElementById("submit-btn-01")
// submitButton.addEventListener("click", (e) => {
  //   e.preventDefault()
  //   console.log("submit clicked")
  //   const input = document.getElementsByTagName("input")
  //   let bothValid = Array.from(input).every((a) => a.value.length > 0)
  //   if (bothValid) {
  //     document.querySelector("p").textContent = "success"
  //   } else {
  //     document.querySelector("p").textContent = "fail empty"
  //   }

//   e.preventDefault()
//   console.log('submit clicked')
//   const inputElement = document.querySelectorAll('input')
//   //console.log(inputElement[0].value)
//   //console.log(inputElement[1].value)

//   const pElement = document.querySelector('p')
//   if(inputElement[0].value.length === 0 ||
//     inputElement[1].value.length === 0) {
//         pElement.textContent = 'some valuesare missing, please check'
//     } else {
//         pElement.textContent = 'Your input are complete'
//     }
// })

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded')
})

window.addEventListener('load', () => {
    console.log('load')
})

window.addEventListener('beforeunload', () => {
    console.log('before unload')
    localStorage.setItem('myCat', 'Tom')
})

const inputElement = document.querySelector('input')
inputElement[0].addEventListener('focus', () => {
    console.log('input focused')
})

inputElement[0].addEventListener('blur', () => {
    console.log('input blured')
})

//keyup on password input
inputElement[1].addEventListener()