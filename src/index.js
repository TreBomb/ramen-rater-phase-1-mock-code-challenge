// write your code here
const BASE_URL = "http://localhost:3000";
const imgMenu = document.getElementById(`ramen-menu`);
const ramenForm = document.getElementById(`new-ramen`);

const createMenu = function() {
    fetch(`${BASE_URL}/ramens`)
    .then(response => response.json())
    .then(ramens => {
        ramens.forEach(ramen => {
            const img = document.createElement(`img`);
            imgMenu.appendChild(img);
            img.id = ramen.id;
            img.src = ramen.image;
            img.alt = ramen.name;

            img.addEventListener(`click`, () => {
                const img = document.getElementsByClassName(`detail-image`)[0];
                const nm = document.getElementsByClassName(`name`)[0];
                const rest = document.getElementsByClassName(`restaurant`)[0];
                const rate = document.getElementById(`show-rating`);
                const com = document.getElementById(`show-comment`);
    
                img.src = ramen.image;
                img.alt = ramen.name;
                nm.textContent = ramen.name;
                rest.textContent = ramen.restaurant;
                rate.textContent = ramen.rating;
                com.textContent = ramen.comment;
            });
        });
    });
};

const addToMenu = function() {
    ramenForm.addEventListener(`submit`, (form) => {
        form.preventDefault();
        const id = imgMenu.querySelectorAll(`img`).length + 1;
        const name = document.querySelector(`#new-ramen #new-name`).value;
        const rest = document.querySelector(`#new-ramen #new-restaurant`).value;
        const image = document.querySelector(`#new-ramen #new-image`).value;
        const rate = document.querySelector(`#new-ramen #new-rating`).value;
        const com = document.querySelector(`#new-ramen #new-comment`).value;
        const img = document.createElement(`img`);

        imgMenu.appendChild(img);
        img.id = id;
        img.src = image;
        img.alt = name;

        img.addEventListener(`click`, () => {
            const img = document.getElementsByClassName(`detail-image`)[0];
            const nm = document.getElementsByClassName(`name`)[0];
            const restaurant = document.getElementsByClassName(`restaurant`)[0];
            const rating = document.getElementById(`show-rating`);
            const comment = document.getElementById(`show-comment`);

            img.src = image;
            img.alt = name;
            nm.textContent = name;
            restaurant.textContent = rest;
            rating.textContent = rate;
            comment.textContent = com;
        });
        ramenForm.reset();
    });
};

function init() {
    createMenu();
    addToMenu();
}

init();