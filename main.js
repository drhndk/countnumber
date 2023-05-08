const btnsEl = document.querySelectorAll('.btn')
const valueEL = document.querySelector('.value')

let count = 0

btnsEl.forEach((btn,idx) => {
    btn.addEventListener('click',() => {
       if (idx == 0) {  
        count--
       }else if (idx == 2) {
        count++
       }else { // reset
        count = 0  
       }
        if (count < 0) {
            valueEL.style.color = 'red'
        } else if (count > 0) {
            valueEL.style.color = 'green'
        }else {
            valueEL.style.color = 'black'
        }       
       valueEL.textContent = count
    })
})