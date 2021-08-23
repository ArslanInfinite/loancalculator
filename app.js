// Listen for submit event on calculate button
document.getElementById('loan-form').addEventListener('submit', calculateResults)

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
    event.preventDefault()
}