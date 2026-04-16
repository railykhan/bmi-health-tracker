function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // this makes sure both fields are filled and if not, it alers the user to fill in both fields before calculating the BMI
    if(height === "" || weight === "") {
        alert("Please enter both height and weight.");
        return;
    }

    height = height / 100; // cm → meters
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    // Get current language from dropdown
    let language = document.getElementById("language-select").value;

    // Set the text for BMI label
    let bmiText = (language === "de") ? "Ihr BMI ist: " : "Your BMI is: ";

    document.getElementById("bmi-result").innerText = bmiText + bmi;

    // Define categories in both languages
    let categories = {
        en: ["Underweight", "Normal weight", "Overweight", "Obese"],
        de: ["Untergewicht", "Normales Gewicht", "Übergewicht", "Fettleibig"]
    };

    // this determines the BMI category based on the calculated BMI
    let status = "";
    if(bmi < 18.5) status = categories[language][0];
    else if(bmi < 25) status = categories[language][1];
    else if(bmi < 30) status = categories[language][2];
    else status = categories[language][3];

    // this displays the BMI category to the user
    document.getElementById("bmi-status").innerText = status;
}

// Change language function
function changeLanguage() {
    let language = document.getElementById("language-select").value;

    // Define the text in both languages
    let texts = {
        en: {
            title: "Health Tracker",
            heightLabel: "Height (cm)",
            weightLabel: "Weight (kg)",
            calculateButton: "Calculate BMI",
            bmiResultText: "Your BMI is: ",
            bmiStatusText: "Normal weight"
        },
        de: {
            title: "Raheela's Gesundheits Tracker",
            heightLabel: "Größe (cm)",
            weightLabel: "Gewicht (kg)",
            calculateButton: "BMI berechnen",
            bmiResultText: "Ihr BMI ist: ",
            bmiStatusText: "Normales Gewicht"
        }
    };


    // Apply the text based on the selected language
    document.querySelector("h1").innerText = texts[language].title;
    document.querySelector("label[for='height']").innerText = texts[language].heightLabel;
    document.querySelector("label[for='weight']").innerText = texts[language].weightLabel;
    document.querySelector("button").innerText = texts[language].calculateButton;
    document.getElementById("bmi-result").innerText = texts[language].bmiResultText;
    document.getElementById("bmi-status").innerText = texts[language].bmiStatusText;
}

            