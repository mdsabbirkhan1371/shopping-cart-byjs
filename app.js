document.getElementById('silicon-button').addEventListener('click', function () {
    const caseInput = document.getElementById('silicon-input');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
})