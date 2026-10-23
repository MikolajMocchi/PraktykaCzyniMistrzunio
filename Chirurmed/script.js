const cookies = document.getElementById("cookies");

const teksty = [
    "Zapoznaj się z naszą polityką cookies",
    "A może przeczytasz naszą politykę cookies?"
];

let i = 0;
stopped = true;

if (cookies.textContent.trim().length === 0) {
    cookies.textContent = "POLITYKA COOKIES...";
}

cookies.addEventListener("mouseenter", () => {
    cookies.textContent = "Kliknij tutaj, aby zapoznać się z polityką cookies";
    stopped = false;
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
