// -------------------- COPYRIGHT & LAST MODIFIED --------------------
const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${currentYear} 💫Tenna King💫 USA`;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

// -------------------- HAMBURGER MENU --------------------
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open'); // optional if you want animation
});

// -------------------- FLAVOR SUGGESTION FORM --------------------
const flavorForm = document.getElementById("flavorForm");
const suggestionList = document.getElementById("suggestionList");

// Load previous suggestions from localStorage
let suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

// Function to display suggestions
function renderSuggestions() {
    suggestionList.innerHTML = "";
    suggestions.forEach((sugg) => {
        const li = document.createElement("li");
        li.textContent = `${sugg.flavor} — ${sugg.reason}`;
        suggestionList.appendChild(li);
    });
}

// Initial render
renderSuggestions();

// Handle form submission
flavorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const flavor = document.getElementById("flavorName").value.trim();
    const reason = document.getElementById("reason").value.trim();

    if (flavor && reason) {
        const newSuggestion = { flavor, reason };
        suggestions.push(newSuggestion);

        // Save to localStorage
        localStorage.setItem("suggestions", JSON.stringify(suggestions));

        // Update the list dynamically
        renderSuggestions();

        // Clear form
        flavorForm.reset();
    } else {
        alert("Please fill in both fields before submitting!");
    }
});
