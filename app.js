// Listen for submit event on calculate button
document.getElementById('loan-form').addEventListener('submit', calculateResults)

// Calculate results 
function calculateResults(event){
// creating UI variables 
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')


    event.preventDefault()
}