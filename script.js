document.getElementById('calculate').addEventListener('click', function () {
    const density = parseFloat(document.getElementById('density').value);
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const unit = document.getElementById('unit').value;

    // Validate input
    if (isNaN(density) || isNaN(length) || isNaN(width) || isNaN(height)) {
        document.getElementById('result').innerText = "Please enter valid numbers in all fields.";
        return;
    }

    // Convert dimensions if unit is in millimeters
    let convertedLength = length;
    let convertedWidth = width;
    let convertedHeight = height;

    if (unit === 'mm') {
        convertedLength /= 1000;
        convertedWidth /= 1000;
        convertedHeight /= 1000;
    }

    // Calculate volume and weight
    const volume = convertedLength * convertedWidth * convertedHeight;
    const weight = density * volume;

    // Display result
    document.getElementById('result').innerText = `Calculated Weight: ${weight.toFixed(2)} kg`;
});
