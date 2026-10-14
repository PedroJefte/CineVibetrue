const search = document.getElementById("search");
const form = search.closest("form");
const filmes = document.querySelectorAll(".container");
const imgBox = document.querySelector(".img");
const mainContent = document.querySelector(".main-content");
const originalParent = mainContent.parentNode;

function filtrar(texto) {
    const busca = texto.trim().toLowerCase();

    filmes.forEach(filme => {
        const titulo = filme.querySelector("h2").innerText.toLowerCase();
        filme.style.display = titulo.includes(busca) ? "" : "none";
    });

    // Com busca ativa, os resultados sobem para o topo da página
    if (busca !== "") {
        imgBox.parentNode.insertBefore(mainContent, imgBox);
    } else {
        originalParent.insertBefore(imgBox, mainContent);
    }
}

search.addEventListener("input", () => filtrar(search.value));

// Na página inicial a busca acontece enquanto digita, sem recarregar
form.addEventListener("submit", (event) => {
    event.preventDefault();
    filtrar(search.value);
});

// Busca vinda das páginas de detalhe: index.html?q=harry
const termoUrl = new URLSearchParams(window.location.search).get("q");
if (termoUrl) {
    search.value = termoUrl;
    filtrar(termoUrl);
}
