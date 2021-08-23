// Listen for submit event on calculate button
document.getElementById('loan-form').addEventListener('submit', function(event){
    // delaying calculateResults
    // hiding results 
    document.getElementById('results').style.display = 'none'
    // showing loader gif
    document.getElementById('loading').style.display = 'block'
    event.preventDefault()
})

// Calculate results 
function calculateResults(event){
    console.log('Calculating...');
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

// taking the value of the amount input field and parsing it into a float
    const principal = parseFloat(amount.value)
// interest value, as a float, divided by 100 and then 12 to calculate interest 
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
// payment per year
    const calculatedPayments = parseFloat(years.value) * 12
// calculate monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x - 1)
// 
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
    } else {
        // creating custom function
        showError('Please check your numbers.')
    }
}

// Show a popup error made entirely with JS
function showError(error){
// creating a div
    const errorDiv = document.createElement('div')
// get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
// setting a class name for the div 
    errorDiv.className = 'alert alert-danger'
// create textnode and append to the div 
    errorDiv.appendChild(document.createTextNode(error))
// insert error above heading, this is called on a parent and the element to put in is passed in
    card.insertBefore(errorDiv, heading)
// clear the error message after a certain period of time, called on the window element
// setTimeout() takes two parameters, a function and the timer 
    setTimeout(clearError, 3000)
}

function clearError(){
    document.querySelector('.alert').remove()
}