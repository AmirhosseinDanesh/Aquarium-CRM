// get xyz from user
EventListeners()
function EventListeners() {
    // add submit
    document.querySelector('#x__header').addEventListener("change", vclick)
    document.querySelector('#y__header').addEventListener("change", vclick)
    document.querySelector('#z__header').addEventListener("change", vclick)


    document.addEventListener("DOMContentLoaded", showDate)
}

// calculate Volume

function vclick() {
    var x = document.querySelector('#x__header').value
    var y = document.querySelector('#y__header').value
    var z = document.querySelector('#z__header').value

    var numv = x * y * z / 1000

    showRes(numv.toFixed())
}
function showRes(numv) {
    document.querySelector('#resultV').textContent = numv
}




// get Date and show in header

const date = new Date()
const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
}

function showDate() {
    var faDate = date.toLocaleDateString("fa-IR", dateOptions)
    document.querySelector('#header__datefy').textContent = faDate
}


let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
})




// EventListeners()
// function EventListeners() {
//     // add submit
//     document.querySelector('#resultV').addEventListener("click", vclick)
// }



// function vclick() {
//     var x = document.querySelector('#x__header').value
//     var y = document.querySelector('#y__header').value
//     var z = document.querySelector('#z__header').value
//     var numv = x * y * z / 1000



//     showRes(numv.toFixed())
// }
// function showRes(numv) {
//     document.querySelector('#resultV').textContent = numv
// }


