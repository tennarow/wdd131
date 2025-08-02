const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${currentYear} 💫Tenna King💫 USA`;
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 3",
        area: 113916,
        imageUrl: "images/mesatemple.jpg",
    },
    {
        templeName: "Oakland California",
        location: "Oakland, California, United States",
        dedicated: "1964, November, 17",
        area: 80157,
        imageUrl: "images/oaklandtemple.jpg",
    },
    {
        templeName: "Preston England",
        location: "Manti, Utah, United States",
        dedicated: "1998, June, 7",
        area: 69630,
        imageUrl: "images/prestontemple.jpg",
    },
];

// Select filter links
const oldLink = document.querySelector("#oldLink");
const newLink = document.querySelector("#newLink");
const largeLink = document.querySelector("#largeLink");
const smallLink = document.querySelector("#smallLink");
const homeLink = document.querySelector("#homeLink");

function clearTempleCards() {
    document.querySelector(".res-grid").innerHTML = "";
}

function createTempleCard(filteredTemples) {
    clearTempleCards();

    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.innerHTML = `<span class="label">Dedication: </span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<span class="label">Size: </span> ${temple.area.toLocaleString()} sq. ft.`;

        const img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}

// Initially show all temples
createTempleCard(temples);

// Add event listeners with filtering and prevent default anchor behavior
oldLink.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(
        temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900)
    );
});

newLink.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(
        temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) >= 2000)
    );
});

largeLink.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(temples.filter((temple) => temple.area > 90000));
});

smallLink.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(temples.filter((temple) => temple.area < 10000));
});

homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(temples);  // Show all temples again
});