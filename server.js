const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


app.post('/vowel_consonant_checker', (req, res) => {
    const inputString = req.body.inputString || '';
    const vowels = "aeiouAEIOU";

    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of inputString) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) vowelCount++;
            else consonantCount++;
        }
    }

    res.json({
        vowels: vowelCount,
        consonants: consonantCount
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});