const pokedevsSelectionList = document.querySelectorAll(".pokedev");

pokedevsSelectionList.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        hidePokedevCard();
        const idPokedevSelection = showPokedevCard(pokedev);
        disablePokedevList();
        activePokedevSelectedList(idPokedevSelection);

    })
})

function activePokedevSelectedList(idPokedevSelection) {
    const pokedevSelectedList = document.getElementById(idPokedevSelection);
    pokedevSelectedList.classList.add("active");
}

function disablePokedevList() {
    const pokedevActiveList = document.querySelector(".active");

    pokedevActiveList.classList.remove("active");
}

function showPokedevCard(pokedev) {
    const idPokedevSelection = pokedev.attributes.id.value;
    const idCardPokedevForOpen = "card-" + idPokedevSelection;
    const cardPokedevForOpen = document.getElementById(idCardPokedevForOpen);

    cardPokedevForOpen.classList.add("open");
    return idPokedevSelection;
}

function hidePokedevCard() {
    const cardPokedevOpen = document.querySelector(".open");

    cardPokedevOpen.classList.remove("open");
}



