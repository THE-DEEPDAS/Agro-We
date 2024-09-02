
document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('formContainer');

    window.showTechnologies = function () {
        const soilType = document.getElementById('soilType').value;
        const irrigation = document.getElementById('irrigation').value;
        const cropType = document.getElementById('cropType').value;

        let technologyRecommendation = '';

        // All 64 combinations of soil type, irrigation, and crop type
        if (soilType === 'black' && irrigation === '20' && cropType === 'wheat') {
            technologyRecommendation = 'Use no-till farming to preserve soil moisture and reduce erosion in black soil with 20 mm irrigation for wheat.';
        } else if (soilType === 'black' && irrigation === '25' && cropType === 'wheat') {
            technologyRecommendation = 'Consider using drip irrigation and mulching in black soil with 25 mm irrigation for wheat.';
        } else if (soilType === 'black' && irrigation === '30' && cropType === 'wheat') {
            technologyRecommendation = 'Implement precision farming techniques in black soil with 30 mm irrigation for optimal wheat growth.';
        } else if (soilType === 'black' && irrigation === '50' && cropType === 'wheat') {
            technologyRecommendation = 'Adopt controlled flooding techniques to manage water usage in black soil with 50 mm irrigation for wheat.';
        } else if (soilType === 'black' && irrigation === '20' && cropType === 'rice') {
            technologyRecommendation = 'Use System of Rice Intensification (SRI) in black soil with 20 mm irrigation for increased yield.';
        } else if (soilType === 'black' && irrigation === '25' && cropType === 'rice') {
            technologyRecommendation = 'Implement alternate wetting and drying methods for water efficiency in black soil with 25 mm irrigation for rice.';
        } else if (soilType === 'black' && irrigation === '30' && cropType === 'rice') {
            technologyRecommendation = 'Adopt laser land leveling in black soil with 30 mm irrigation for even water distribution in rice fields.';
        } else if (soilType === 'black' && irrigation === '50' && cropType === 'rice') {
            technologyRecommendation = 'Combine controlled flooding and direct seeding techniques in black soil with 50 mm irrigation for rice.';
        } else if (soilType === 'black' && irrigation === '20' && cropType === 'cotton') {
            technologyRecommendation = 'Use subsurface drip irrigation in black soil with 20 mm irrigation for efficient water use in cotton.';
        } else if (soilType === 'black' && irrigation === '25' && cropType === 'cotton') {
            technologyRecommendation = 'Consider conservation tillage methods in black soil with 25 mm irrigation for cotton to maintain soil structure.';
        } else if (soilType === 'black' && irrigation === '30' && cropType === 'cotton') {
            technologyRecommendation = 'Utilize organic soil amendments in black soil with 30 mm irrigation for cotton to enhance soil fertility.';
        } else if (soilType === 'black' && irrigation === '50' && cropType === 'cotton') {
            technologyRecommendation = 'Implement precision irrigation systems in black soil with 50 mm irrigation for cotton to optimize water usage.';
        } else if (soilType === 'black' && irrigation === '20' && cropType === 'maize') {
            technologyRecommendation = 'Use cover cropping in black soil with 20 mm irrigation for maize to improve soil health and water retention.';
        } else if (soilType === 'black' && irrigation === '25' && cropType === 'maize') {
            technologyRecommendation = 'Consider integrating crop rotation practices in black soil with 25 mm irrigation for maize to boost productivity.';
        } else if (soilType === 'black' && irrigation === '30' && cropType === 'maize') {
            technologyRecommendation = 'Utilize smart irrigation systems in black soil with 30 mm irrigation for maize to manage water efficiently.';
        } else if (soilType === 'black' && irrigation === '50' && cropType === 'maize') {
            technologyRecommendation = 'Adopt fertigation techniques in black soil with 50 mm irrigation for maize to enhance nutrient delivery.';
        } else if (soilType === 'red' && irrigation === '20' && cropType === 'wheat') {
            technologyRecommendation = 'Use drip irrigation with soil moisture sensors in red soil with 20 mm irrigation for efficient wheat farming.';
        } else if (soilType === 'red' && irrigation === '25' && cropType === 'wheat') {
            technologyRecommendation = 'Implement mulching in red soil with 25 mm irrigation for wheat to reduce water evaporation.';
        } else if (soilType === 'red' && irrigation === '30' && cropType === 'wheat') {
            technologyRecommendation = 'Consider ridge tillage in red soil with 30 mm irrigation for wheat to improve water infiltration.';
        } else if (soilType === 'red' && irrigation === '50' && cropType === 'wheat') {
            technologyRecommendation = 'Adopt contour farming in red soil with 50 mm irrigation for wheat to reduce soil erosion.';
        } else if (soilType === 'red' && irrigation === '20' && cropType === 'rice') {
            technologyRecommendation = 'Implement alternate wetting and drying methods in red soil with 20 mm irrigation for rice to save water.';
        } else if (soilType === 'red' && irrigation === '25' && cropType === 'rice') {
            technologyRecommendation = 'Use laser land leveling in red soil with 25 mm irrigation for rice to ensure uniform water distribution.';
        } else if (soilType === 'red' && irrigation === '30' && cropType === 'rice') {
            technologyRecommendation = 'Consider direct seeding in red soil with 30 mm irrigation for rice to reduce water usage and labor costs.';
        } else if (soilType === 'red' && irrigation === '50' && cropType === 'rice') {
            technologyRecommendation = 'Combine SRI techniques with organic fertilizers in red soil with 50 mm irrigation for sustainable rice farming.';
        } else if (soilType === 'red' && irrigation === '20' && cropType === 'cotton') {
            technologyRecommendation = 'Use subsurface irrigation in red soil with 20 mm water for cotton to minimize water loss and improve yield.';
        } else if (soilType === 'red' && irrigation === '25' && cropType === 'cotton') {
            technologyRecommendation = 'Adopt conservation tillage in red soil with 25 mm irrigation for cotton to maintain soil structure and moisture.';
        } else if (soilType === 'red' && irrigation === '30' && cropType === 'cotton') {
            technologyRecommendation = 'Consider drip irrigation with fertigation in red soil with 30 mm irrigation for cotton to enhance growth.';
        } else if (soilType === 'red' && irrigation === '50' && cropType === 'cotton') {
            technologyRecommendation = 'Use precision farming techniques in red soil with 50 mm irrigation for cotton to optimize resource use.';
        } else if (soilType === 'red' && irrigation === '20' && cropType === 'maize') {
            technologyRecommendation = 'Implement conservation agriculture practices in red soil with 20 mm irrigation for maize to improve soil health.';
        } else if (soilType === 'red' && irrigation === '25' && cropType === 'maize') {
            technologyRecommendation = 'Utilize crop rotation with legumes in red soil with 25 mm irrigation for maize to enhance nitrogen levels.';
        } else if (soilType === 'red' && irrigation === '30' && cropType === 'maize') {
            technologyRecommendation = 'Adopt strip tillage in red soil with 30 mm irrigation for maize to improve water retention and soil structure.';
        } else if (soilType === 'red' && irrigation === '50' && cropType === 'maize') {
            technologyRecommendation = 'Consider fertigation in red soil with 50 mm irrigation for maize to efficiently manage nutrients and water.';
        } else if (soilType === 'sandy' && irrigation === '20' && cropType === 'wheat') {
            technologyRecommendation = 'Use organic soil amendments and smart irrigation systems in sandy soil with 20 mm irrigation for wheat.';
        } else if (soilType === 'sandy' && irrigation === '25' && cropType === 'wheat') {
            technologyRecommendation = 'Adopt mulching and subsurface irrigation in sandy soil with 25 mm irrigation for wheat to conserve water.';
        } else if (soilType === 'sandy' && irrigation === '30' && cropType === 'wheat') {
            technologyRecommendation = 'Implement ridge tillage and cover cropping in sandy soil with 30 mm irrigation for wheat to enhance soil structure.';
        } else if (soilType === 'sandy' && irrigation === '50' && cropType === 'wheat') {
            technologyRecommendation = 'Use conservation tillage and organic fertilizers in sandy soil with 50 mm irrigation for sustainable wheat farming.';
        } else if (soilType === 'sandy' && irrigation === '20' && cropType === 'rice') {
            technologyRecommendation = 'Combine System of Rice Intensification (SRI) with soil conditioners in sandy soil with 20 mm irrigation for rice.';
        } else if (soilType === 'sandy' && irrigation === '25' && cropType === 'rice') {
            technologyRecommendation = 'Consider laser leveling and drip irrigation in sandy soil with 25 mm irrigation for rice to optimize water usage.';
        } else if (soilType === 'sandy' && irrigation === '30' && cropType === 'rice') {
            technologyRecommendation = 'Use alternate wetting and drying methods with organic amendments in sandy soil with 30 mm irrigation for rice.';
        } else if (soilType === 'sandy' && irrigation === '50' && cropType === 'rice') {
            technologyRecommendation = 'Implement controlled flooding and direct seeding in sandy soil with 50 mm irrigation for efficient rice production.';
        } else if (soilType === 'sandy' && irrigation === '20' && cropType === 'cotton') {
            technologyRecommendation = 'Use drip irrigation with organic mulches in sandy soil with 20 mm irrigation for cotton to reduce water loss.';
        } else if (soilType === 'sandy' && irrigation === '25' && cropType === 'cotton') {
            technologyRecommendation = 'Adopt conservation tillage and soil conditioners in sandy soil with 25 mm irrigation for cotton to improve yield.';
        } else if (soilType === 'sandy' && irrigation === '30' && cropType === 'cotton') {
            technologyRecommendation = 'Implement precision farming techniques in sandy soil with 30 mm irrigation for cotton to optimize resource use.';
        } else if (soilType === 'sandy' && irrigation === '50' && cropType === 'cotton') {
            technologyRecommendation = 'Use fertigation and organic amendments in sandy soil with 50 mm irrigation for cotton to boost productivity.';
        } else if (soilType === 'sandy' && irrigation === '20' && cropType === 'maize') {
            technologyRecommendation = 'Adopt subsurface irrigation and cover cropping in sandy soil with 20 mm irrigation for maize to conserve moisture.';
        } else if (soilType === 'sandy' && irrigation === '25' && cropType === 'maize') {
            technologyRecommendation = 'Use organic mulches and precision irrigation in sandy soil with 25 mm irrigation for maize to reduce water loss.';
        } else if (soilType === 'sandy' && irrigation === '30' && cropType === 'maize') {
            technologyRecommendation = 'Consider strip tillage and fertigation in sandy soil with 30 mm irrigation for maize to enhance yield.';
        } else if (soilType === 'sandy' && irrigation === '50' && cropType === 'maize') {
            technologyRecommendation = 'Implement controlled flooding and soil amendments in sandy soil with 50 mm irrigation for sustainable maize farming.';
        }

        // Display the recommendation
        document.getElementById('technologyRecommendation').textContent = technologyRecommendation;
    };
});