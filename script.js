document.addEventListener('DOMContentLoaded', () => {
    const countryInput = document.getElementById('country-input');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');

    // In a real application, you would fetch this data from an API.
    // This is a simplified example using a JavaScript object.
    const countryCurrencies = {
        "United States": "USD",
        "Canada": "CAD",
        "United Kingdom": "GBP",
        "Japan": "JPY",
        "Australia": "AUD",
        "Germany": "EUR",
        "France": "EUR",
        "Brazil": "BRL",
        "India": "INR",
        "China": "CNY"
        // Add more countries and their currencies here
    };

    searchButton.addEventListener('click', () => {
        const countryName = countryInput.value.trim();
        resultContainer.textContent = ''; // Clear previous result

        if (countryName) {
            const currency = countryCurrencies[countryName];
            if (currency) {
                resultContainer.textContent = `${countryName} uses the currency: ${currency}`;
            } else {
                resultContainer.textContent = `Currency information not found for ${countryName}.`;
                resultContainer.classList.add('error'); // Optionally add an error class for styling
            }
        } else {
            resultContainer.textContent = 'Please enter a country name.';
            resultContainer.classList.add('error');
        }
    });

    // Optional: Allow searching when the user presses Enter in the input field
    countryInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
