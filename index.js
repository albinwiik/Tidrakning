

const btn = document.querySelector('#calculate-btn')
const startTime = document.querySelector('#start-time')
const endTime = document.querySelector('#end-time')
const lunchBox = document.querySelector('#lunch-box')
const result = document.querySelector('#result')
const timesCalculated = document.querySelector('#times-calculated')

startTime.value = "07:50"
endTime.value = "16:00"
lunchBox.checked = true
setCalcCount(false)

btn.addEventListener('click', calculateDeltaTime)

function calculateDeltaTime() {
    const t1 = calculateHours(startTime.value)
    const t2 = calculateHours(endTime.value)
    let dt = t2 - t1
    if(lunchBox.checked) dt -= 0.5

    if(dt < 0) {
        result.innerHTML = 'Beräkningsfel! Beräkningen resulterar i en negativ tid.'
        result.classList = 'badge bg-danger'
    } else {
        result.innerHTML = `Resultat: ${dt.toFixed(2)}h`
        result.classList = ''
        setCalcCount(true)
    }
}

function calculateHours(time) {
    const hours = Number(time.slice(0,2))
    const mins = Number(time.slice(3, 5)) / 60
    return hours + mins
}

function setCalcCount(increment) {
    if(typeof(Storage) !== 'undefined') {
        let timesCalculated = Number(localStorage.getItem('timesCalculated'))

        if(increment) {
            timesCalculated += 1
            localStorage.setItem('timesCalculated', timesCalculated)
        }
        timesCalculated.innerHTML = `Antal gånger genomfört beräkning: ${timesCalculated}`
    }
}


