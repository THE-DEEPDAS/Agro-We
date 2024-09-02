// Chart.js Configuration
let cropProductionChart, rainfallChart, soilQualityChart, marketPricesChart, pestAlertsChart, cropYieldPredictionChart;

function initCharts(crop = 'Wheat', timePeriod = 'Jan-July', region = 'WholeCountry') {
    // Example data based on the selected region, crop, and time period
    const productionData = {
        'WholeCountry': crop === 'Wheat' ? [320, 450, 380, 290, 240] : [200, 300, 400, 350, 250],
        'North': crop === 'Wheat' ? [120, 180, 160, 130, 110] : [80, 130, 150, 120, 100],
        'West': crop === 'Wheat' ? [150, 200, 180, 140, 120] : [100, 150, 200, 170, 140],
        'South': crop === 'Wheat' ? [180, 220, 200, 170, 140] : [120, 170, 220, 180, 150],
        'East': crop === 'Wheat' ? [110, 160, 140, 110, 90] : [70, 120, 160, 130, 100],
        'North-East': crop === 'Wheat' ? [90, 140, 120, 100, 80] : [60, 110, 140, 120, 90],
        'Central': crop === 'Wheat' ? [130, 180, 160, 140, 110] : [90, 140, 170, 140, 120]
    }[region] || [];

    const rainfallData = {
        'WholeCountry': timePeriod === 'Jan-July' ? [50, 70, 110, 150, 200, 300] : [100, 150, 200, 180, 220, 290],
        'North': timePeriod === 'Jan-July' ? [60, 80, 120, 160, 210, 280] : [110, 160, 200, 190, 230, 300],
        'West': timePeriod === 'Jan-July' ? [40, 60, 90, 130, 180, 250] : [90, 130, 160, 150, 190, 260],
        'South': timePeriod === 'Jan-July' ? [70, 100, 140, 180, 230, 310] : [120, 160, 190, 170, 220, 290],
        'East': timePeriod === 'Jan-July' ? [50, 75, 115, 155, 205, 295] : [100, 140, 185, 175, 225, 270],
        'North-East': timePeriod === 'Jan-July' ? [55, 80, 120, 160, 210, 270] : [105, 150, 200, 180, 220, 280],
        'Central': timePeriod === 'Jan-July' ? [60, 85, 125, 165, 215, 275] : [110, 155, 205, 190, 230, 275]
    }[region] || [];

    const marketPricesData = {
        'WholeCountry': [120, 130, 110, 140, 150],
        'North': [115, 125, 105, 135, 145],
        'West': [130, 140, 120, 150, 160],
        'South': [125, 135, 115, 145, 155],
        'East': [110, 120, 100, 130, 140],
        'North-East': [120, 130, 110, 140, 150],
        'Central': [125, 135, 115, 145, 155]
    }[region] || [];

    const pestAlertsData = {
        'WholeCountry': [5, 10, 7, 12, 8],
        'North': [4, 9, 6, 11, 7],
        'West': [6, 11, 8, 13, 9],
        'South': [5, 10, 7, 12, 8],
        'East': [7, 12, 9, 15, 10],
        'North-East': [6, 11, 8, 13, 9],
        'Central': [5, 10, 7, 12, 8]
    }[region] || [];

    // Crop Yield Prediction Data
    const cropYieldPredictionData = {
        'WholeCountry': [300, 350, 320, 280, 290],
        'North': [280, 320, 310, 270, 280],
        'West': [320, 360, 330, 290, 300],
        'South': [340, 370, 340, 300, 310],
        'East': [310, 340, 320, 290, 280],
        'North-East': [300, 330, 310, 270, 290],
        'Central': [330, 360, 340, 300, 310]
    }[region] || [];

    // Determine the labels based on the selected time period
    let rainfallLabels;
    if (timePeriod === 'Jan-July') {
        rainfallLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    } else {
        rainfallLabels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }

    // Destroy previous charts if they exist to avoid memory leaks
    if (cropProductionChart) cropProductionChart.destroy();
    if (rainfallChart) rainfallChart.destroy();
    if (soilQualityChart) soilQualityChart.destroy();
    if (marketPricesChart) marketPricesChart.destroy();
    if (pestAlertsChart) pestAlertsChart.destroy();
    if (cropYieldPredictionChart) cropYieldPredictionChart.destroy();

    // Crop Production Chart
    cropProductionChart = new Chart(document.getElementById('cropProductionChart'), {
        type: 'bar',
        data: {
            labels: ['Wheat', 'Rice', 'Corn', 'Soybean', 'Barley'],
            datasets: [{
                label: 'Production (tons)',
                data: productionData,
                backgroundColor: '#4caf50'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            }
        }
    });

    // Rainfall Chart
    rainfallChart = new Chart(document.getElementById('rainfallChart'), {
        type: 'line',
        data: {
            labels: rainfallLabels,
            datasets: [{
                label: 'Rainfall (mm)',
                data: rainfallData,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Soil Quality Chart
    soilQualityChart = new Chart(document.getElementById('soilQualityChart'), {
        type: 'radar',
        data: {
            labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'pH', 'Organic Matter'],
            datasets: [{
                label: 'Soil Quality',
                data: [80, 90, 70, 60, 85],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                pointBackgroundColor: 'rgba(255, 159, 64, 1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
        }
    });

    // Market Prices Chart
    marketPricesChart = new Chart(document.getElementById('marketPricesChart'), {
        type: 'bar',
        data: {
            labels: ['Wheat', 'Rice', 'Corn', 'Soybean', 'Barley'],
            datasets: [{
                label: 'Market Prices (USD)',
                data: marketPricesData,
                backgroundColor: '#ff6384'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            }
        }
    });

    // Pest Alerts Chart
    pestAlertsChart = new Chart(document.getElementById('pestAlertsChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Pest Alerts',
                data: pestAlertsData,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Crop Yield Prediction Chart
    cropYieldPredictionChart = new Chart(document.getElementById('cropYieldPredictionChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Yield Prediction (tons/ha)',
                data: cropYieldPredictionData,
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initial Chart Load with default values
initCharts();

// Form Handling
const dataForm = document.getElementById('dataForm');
dataForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const crop = document.getElementById('cropSelect').value;
    const timePeriod = document.getElementById('timePeriod').value;
    const region = document.getElementById('regionSelect').value;
    initCharts(crop, timePeriod, region);
});


