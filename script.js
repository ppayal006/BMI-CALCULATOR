// script.js

const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const resultContainer = document.getElementById('result-container');
const bmiResultElement = document.getElementById('bmi-result');
const bmiCategoryElement = document.getElementById('bmi-category');

calculateBtn.addEventListener('click', calculateBMI);

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = weight / (height ** 2);

    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 25) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 30) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    bmiResultElement.textContent = `BMI: ${bmi.toFixed(2)}`;
    bmiCategoryElement.textContent = `Category: ${bmiCategory}`;
    resultContainer.style.display = 'block';
}