// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Find the first paragraph by its ID and set its text
document.getElementById('copyright').textContent = `© ${currentYear} 💫Tenna King💫 USA`;

// Get the document's last modified date/time
const lastModifiedDate = document.lastModified;

// Find the second paragraph and set its text
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;       // product id as value
        option.textContent = product.name;  // product name as display text
        select.appendChild(option);
    });
});