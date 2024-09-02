document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('formContainer');
    const graphContainer = document.getElementById('graphContainer');
    const urlParams = new URLSearchParams(window.location.search);
    const season = urlParams.get('season');

    // Function to show the form
    function showForm() {
        // Determine whether to include the Watering Frequency field
        const includeWateringFrequency = (season === 'mid' || season === 'preharvest');

        const formHtml = `
            <h2>Input Values (${season} Stage)</h2>
            <form id="inputForm">
                <label for="crop">Crop:</label>
                <select id="crop" name="crop" required>
                    <option value="Wheat-beg">Wheat(Beginning Season)</option>
                    <option value="Wheat-Mid">Wheat(Mid Season)</option>
                    <option value="Wheat-Pre">Wheat(Pre-Harvest Season)</option>
                    <option value="Rice-beg">Rice(Beginning Season)</option>
                    <option value="Rice-Mid">Rice(Mid Season)</option>
                    <option value="Rice-Pre">Rice(Pre-Harvest Season)</option>
                    <option value="Barley-beg">Barley(Beginning Season)</option>
                    <option value="Barley-Mid">Barley(Mid Season)</option>
                    <option value="Barley-Pre">Barley(Pre-Harvest Season)</option>
                    <option value="Corn-beg">Corn(Beginning Season)</option>
                    <option value="Corn-Mid">Corn(Mid Season)</option>
                    <option value="Corn-Pre">Corn(Pre-Harvest Season)</option>
                </select><br>
                <label for="Calcium">Calcium:</label>
                <input type="number" id="Calcium" name="Calcium" required><br>
                <label for="Iron">Iron:</label>
                <input type="number" id="Iron" name="Iron" required><br>
                <label for="Magnesium">Magnesium:</label>
                <input type="number" id="Magnesium" name="Magnesium" required><br>
                <label for="Nitrogen">Nitrogen:</label>
                <input type="number" id="Nitrogen" name="Nitrogen" required><br>
                <label for="O2_Level">O2 Level in air:</label>
                <input type="number" id="O2_Level" name="O2_Level" required><br>
                <label for="Phosphorous">Phosphorous:</label>
                <input type="number" id="Phosphorous" name="Phosphorous" required><br>
                <label for="Potassium">Potassium:</label>
                <input type="number" id="Potassium" name="Potassium" required><br>
                <label for="Soil_Type">Soil Type:</label>
                <input type="number" id="Soil_Type" name="Soil_Type" placeholder="black, red, etc." required><br>
                ${includeWateringFrequency ? `
                    <label for="Watering_Frequency">Watering Frequency:</label>
                    <input type="number" id="Watering_Frequency" name="Watering_Frequency" required><br>
                ` : ''}
                <button type="button" onclick="submitForm()">Submit</button>
            </form>
        `;

        formContainer.innerHTML = formHtml;
    }

    // Function to handle form submission
    window.submitForm = function () {
        const formData = new FormData(document.querySelector('form'));
        const userValues = {};

        formData.forEach((value, key) => {
            userValues[key] = Number(value);
        });

        console.log('User Values:', userValues); // Debugging: Check user values
        createChart(userValues);
    };

    // Function to create the chart
    function createChart(userValues) {
        const ctx = document.getElementById('myChart').getContext('2d');
        const crop = document.getElementById('crop').value;

        // Define ideal values for different crops
        const idealData = {
            'Wheat-beg': { Calcium: 55, Iron: 45, Magnesium: 35, Nitrogen: 20, O2_Level: 15, Phosphorous: 40, Potassium: 30, Soil_Type: 5, Watering_Frequency: 3  },
            'Wheat-Mid':{Calcium: 50, Iron: 45, Magnesium: 30, Nitrogen: 25, O2_Level: 15, Phosphorous: 45, Potassium: 35, Soil_Type: 5, Watering_Frequency: 3 },
            'Wheat-Pre':{Calcium: 60, Iron: 50, Magnesium: 40, Nitrogen: 15, O2_Level: 15, Phosphorous: 50, Potassium: 40, Soil_Type: 5, Watering_Frequency: 2 },
            'Rice-beg': { Calcium: 65, Iron: 55, Magnesium: 45, Nitrogen: 20, O2_Level: 20, Phosphorous: 40, Potassium: 30, Soil_Type: 10, Watering_Frequency: 4},
            'Rice-Mid':{Calcium: 60, Iron: 50, Magnesium: 40, Nitrogen: 15, O2_Level: 20, Phosphorous: 35, Potassium: 25, Soil_Type: 10, Watering_Frequency: 4 },
            'Rice-Pre':{ Calcium: 70, Iron: 55, Magnesium: 45, Nitrogen: 10, O2_Level: 20, Phosphorous: 30, Potassium: 25, Soil_Type: 10, Watering_Frequency: 3},
            'Barley-beg': { Calcium: 50, Iron: 40, Magnesium: 30, Nitrogen: 20, O2_Level: 18, Phosphorous: 35, Potassium: 25, Soil_Type: 8, Watering_Frequency: 2 },
            'Barley-Mid':{Calcium: 55, Iron: 45, Magnesium: 35, Nitrogen: 15, O2_Level: 18, Phosphorous: 35, Potassium: 25, Soil_Type: 8, Watering_Frequency: 2},
            'Barley-Pre':{ Calcium: 60, Iron: 50, Magnesium: 40, Nitrogen: 10, O2_Level: 18, Phosphorous: 30, Potassium: 20, Soil_Type: 8, Watering_Frequency: 1},
            'Corn-beg': {Calcium: 65, Iron: 50, Magnesium: 40, Nitrogen: 20, O2_Level: 25, Phosphorous: 35, Potassium: 30, Soil_Type: 12, Watering_Frequency: 4},
            'Corn-Mid':{Calcium: 70, Iron: 55, Magnesium: 45, Nitrogen: 15, O2_Level: 25, Phosphorous: 35, Potassium: 25, Soil_Type: 12, Watering_Frequency: 5 },
            'Corn-Pre':{Calcium: 75, Iron: 60, Magnesium: 50, Nitrogen: 10, O2_Level: 25, Phosphorous: 30, Potassium: 20, Soil_Type: 12, Watering_Frequency: 4},
        
        };

        const idealValuesForCrop = idealData[crop] || {};
        const labels = Object.keys(idealValuesForCrop);
        const idealValues = labels.map(label => idealValuesForCrop[label]);
        const userValuesArray = labels.map(label => userValues[label] || 0);

        console.log('Labels:', labels); // Debugging
        console.log('Ideal Values:', idealValues); // Debugging
        console.log('User Values Array:', userValuesArray); // Debugging

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Ideal Values',
                        data: idealValues,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'User Values',
                        data: userValuesArray,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        displayDifferenceTable(idealValuesForCrop, userValues);
        graphContainer.style.display = 'block'; // Show graph container
    }

    // Function to display the difference table
    function displayDifferenceTable(idealData, userValues) {
        const table = document.getElementById('diffTable');
        let tableHtml = '<table><tr><th>Label</th><th>Action</th></tr>';

        for (let key in idealData) {
            const idealValue = idealData[key];
            const userValue = userValues[key] || 0;
            const diff = idealValue - userValue;

            let action = '';
            if (diff > 0) {
                action = `You need to add ${diff} to the current amount.`;
            } else if (diff < 0) {
                action = `You need to subtract ${Math.abs(diff)} from the current amount.`;
            } else {
                action = 'Your amount is ideal.';
            }

            tableHtml += `<tr><td>${key}</td><td>${action}</td></tr>`;
        }

        tableHtml += '</table>';
        table.innerHTML = tableHtml;
    }

    showForm(); // Show the form when the page loads
});
