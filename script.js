document.addEventListener('DOMContentLoaded', () => {
    const countryInput = document.getElementById('country-input');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');

    searchButton.addEventListener('click', () => {
        const countryName = countryInput.value.trim();
        resultContainer.textContent = ''; // Clear previous result
        resultContainer.classList.remove('text-red-500');

        if (countryName) {
            // Use fetch to make a GET request to your Java backend
            fetch(`/currency?country=${encodeURIComponent(countryName)}`)  // Use template literals and encodeURIComponent
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text(); // Use .text() to get plain text
                })
                .then(data => {
                    resultContainer.textContent = data; // Display the text
                    if (data.includes("not found")) {
                        resultContainer.classList.add('text-red-500');
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    resultContainer.textContent = 'Failed to fetch currency information. Please try again later.';
                    resultContainer.classList.add('text-red-500');
                });
        } else {
            resultContainer.textContent = 'Please enter a country name.';
            resultContainer.classList.add('text-red-500');
        }
    });

    countryInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
