// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Find the first paragraph by its ID and set its text
document.getElementById('copyright').textContent = `© ${currentYear} 💫Tenna King💫 USA`;

// Get the document's last modified date/time
const lastModifiedDate = document.lastModified;

// Find the second paragraph and set its text
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;