function volume_sphere() {
    // Get input values
    let radiusInput = document.getElementById("radius").value;
    let volumeField = document.getElementById("volume");

    // Convert to number
    let radius = parseFloat(radiusInput);

    // Validate radius (must be a non-negative number)
    if (isNaN(radius) || radius < 0) {
        volumeField.value = "NaN";
        return false; // prevent form submission
    }

    // Calculate volume: V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volumeField.value = volume.toFixed(4);

    return false; // prevent form submission
}

// Attach function to form submit
window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
