const cookies = document.getElementById("cookies");

const teksty = [
    "Zapoznaj się z naszą polityką cookies",
    "A może przeczytasz naszą politykę cookies?"
];


// dni tygodnia idą od niedzili - soboty
// null - oznacza brak godzin otwarcie w danym dniu
// pierwsza wartosc to godzina otwarcia, druga to godzina zamkniecia

const godzinyOtwarcia = {
    0: null,             
    1: ["08:00", "18:00"],
    2: ["08:00", "18:00"],
    3: ["08:00", "18:00"],
    4: ["08:00", "18:00"],
    5: ["08:00", "16:00"],
    6: ["09:00", "14:00"]
};

function sprawdzGodziny() {
    const teraz = new Date();

    const dzien = teraz.getDay();
    const godzina = teraz.getHours();
    const minuta = teraz.getMinutes();

    const status = document.getElementById("open-status");

    if (!status) return;

    const godziny = godzinyOtwarcia[dzien];

    if (godziny === null) {
        status.textContent = "Klinika jest zamknięta";
        status.style.color = "red";
        return;
    }

    const aktualnyCzas = godzina * 60 + minuta;

    const [startH, startM] = godziny[0].split(":").map(Number);
    const [koniecH, koniecM] = godziny[1].split(":").map(Number);

    const otwarcie = startH * 60 + startM;
    const zamkniecie = koniecH * 60 + koniecM;

    const pozostalo = zamkniecie - aktualnyCzas;

    if (aktualnyCzas < otwarcie || aktualnyCzas >= zamkniecie) {
        status.textContent = "Klinika jest zamknięta";
        status.style.color = "black";
    }
    else if (pozostalo < 60) {
        status.textContent =
            `Wkrótce zamknięcie! Zamknięcie o: ${godziny[1]}`;
        status.style.color = "black";
    }
    else {
        status.textContent = "Klinika jest otwarta";
        status.style.color = "black";
    }
}


sprawdzGodziny();

setInterval(sprawdzGodziny, 60000);


let i = 0;
stopped = true;

if (cookies.textContent.trim().length === 0) {
    cookies.textContent = "POLITYKA COOKIES...";
}

cookies.addEventListener("mouseenter", () => {
    cookies.textContent = "Kliknij tutaj, aby zapoznać się z polityką cookies";

    cookies.style.textDecoration = "underline";
    cookies.style.color = "red";
    cookies.style.animation = "none";
    cookies.style.transform = "translateX(0)";
});

cookies.addEventListener("mouseleave", () => {
    stopped = true;
    cookies.style.animation = "ruch 3s ease-in-out infinite alternate";
    cookies.style.textDecoration = "none";
    cookies.style.color = "";
});

setInterval(() => {
    if (!stopped) {
        return;
    }

    cookies.textContent = teksty[i];
    i = (i + 1) % teksty.length;
}, 3000);

