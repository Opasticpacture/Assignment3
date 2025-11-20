document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded from external file!");
});

// Vowel / Consonant checker
document.getElementById("vowelConsonantForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const inputString = document.getElementById("inputString").value.toLowerCase();
    let vowels = 0;
    let consonants = 0;

    for (let char of inputString) {
        if (char >= 'a' && char <= 'z') {
            if ("aeiou".includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    document.getElementById("vowelConsonantResult").textContent =
        `Vowels: ${vowels}, Consonants: ${consonants}`;
});

// BMI logic
document.getElementById("bmiForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const feet = parseFloat(document.getElementById("feet").value);
    const inches = parseFloat(document.getElementById("inches").value);

    const totalInches = (feet * 12) + inches;
    const bmi = (weight / (totalInches * totalInches)) * 703;

    document.getElementById("bmiResult").textContent = `Your BMI is: ${bmi.toFixed(2)}`;
});
