const anim = document.getElementById("anim");

const informacje = [
    "Nasza strona wykorzystuje pliki cookies, aby zapewnić jej prawidłowe działanie.",
    "Dbamy o Twoją prywatność i bezpieczeństwo danych.",
    "Pliki cookies pomagają zapamiętywać wybrane ustawienia strony.",
    "Opcjonalne cookies analityczne wymagają Twojej zgody.",
    "Możesz zarządzać plikami cookies w ustawieniach przeglądarki.",
    "W każdej chwili możesz wycofać zgodę na opcjonalne cookies.",
    "Więcej informacji znajdziesz w naszej Polityce Cookies."
];

let indeks = 0;

if (anim) {
    anim.textContent = informacje[indeks];

    setInterval(() => {
        anim.style.opacity = "0";

        setTimeout(() => {
            indeks = (indeks + 1) % informacje.length;
            anim.textContent = informacje[indeks];
            anim.style.opacity = "1";
        }, 500);

    }, 4000);
}
 
