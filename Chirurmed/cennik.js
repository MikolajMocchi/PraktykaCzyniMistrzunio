const select = document.querySelector("#usluga-select");
const price = document.querySelector("#price-here");

select.addEventListener("change", function() {
    price.textContent = select.value
        ? "Cena: " + select.value + " zł"
        : "Brak Wybranej Usługi";
});
