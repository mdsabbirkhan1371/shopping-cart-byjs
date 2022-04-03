function productCaseNumber(product, price, isIncrasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }

    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update case total 

    const productTotalPrice = document.getElementById(product + '-total');
    productTotalPrice.innerText = productNumber * price;
}
// handle phone increase and decrease event 

document.getElementById('phone-plus').addEventListener('click', function () {
    productCaseNumber('phone', 1219, true)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    productCaseNumber('phone', 1219, false)
})


// handle case increase and decrease event 

document.getElementById('case-plus').addEventListener('click', function () {
    productCaseNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    productCaseNumber('case', 59, false)

})