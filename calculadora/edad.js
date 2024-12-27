document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const dogAgeInput = document.getElementById('dogAge');
    const dogSizeSelect = document.getElementById('dogSize');
    const resultContainer = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    const dogSizeInfo = document.getElementById('dogSize');
    const errorContainer = document.getElementById('error');
    const errorText = document.getElementById('errorText');

    function calculateHumanAge(dogAge, dogSize) {
        if (dogAge <= 1) return 15;
        if (dogAge <= 2) return 24;

        let baseAge = 24;
        const remainingYears = dogAge - 2;
        
        const yearMultiplier = {
            'pequeño': 4,
            'mediano': 5,
            'grande': 6
        };

        return baseAge + (remainingYears * yearMultiplier[dogSize]);
    }

    function showError(message) {
        errorText.textContent = message;
        errorContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
    }

    function validateInputs(age, size) {
        if (!age || !size) {
            showError('Por favor, completa todos los campos.');
            return false;
        }
        if (age <= 0) {
            showError('La edad debe ser mayor que 0.');
            return false;
        }
        return true;
    }

    calculateBtn.addEventListener('click', () => {
        const age = parseFloat(dogAgeInput.value);
        const size = dogSizeSelect.value;

        errorContainer.classList.add('hidden');

        if (!validateInputs(age, size)) return;

        const humanAge = calculateHumanAge(age, size);

        resultText.textContent = `Un perro ${size} de ${age} años equivale a ${humanAge} años humanos.`;
        
        resultContainer.classList.remove('hidden');
    });

    resetBtn.addEventListener('click', () => {
        dogAgeInput.value = '';
        dogSizeSelect.value = '';
        errorContainer.classList.add('hidden');
        resultContainer.classList.add('hidden');
    });
});
