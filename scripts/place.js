// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Find the first paragraph by its ID and set its text
document.getElementById('copyright').textContent = `© ${currentYear} 💫Tenna King💫 USA`;

// Get the document's last modified date/time
const lastModifiedDate = document.lastModified;

// Find the second paragraph and set its text
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

const temperature = 10;
const windSpeedKmh = 6;

function calculateWindChill(tempC, windKmh) {
    return (
        13.12 + (0.6215 * tempC) - (11.37 * Math.pow(windKmh, 0.16)) + (0.3965 * tempC * Math.pow(windKmh, 0.16))
    ).toFixed(1);

}

function displayWindChill() {
    const windchillElement = document.getElementById("windchill");

    if (temperature <= 10 && windSpeedKmh > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeedKmh);
        windchillElement.textContent = `${windChill} °C`;
    } else {
        windchillElement.textContent = "N/A";
    }
}

displayWindChill(); 