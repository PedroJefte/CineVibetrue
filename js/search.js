const search = document.getElementById("search");
const filmes = document.querySelectorAll(".container");
const imgBox = document.querySelector(".img");
const mainContent = document.querySelector(".main-content");

const originalParent = mainContent.parentNode;

search.addEventListener("input", function () {
    const busca = this.value.toLowerCase();

    filmes.forEach(filme => {
        const titulo = filme.querySelector("h2").innerText.toLowerCase();

        if (titulo.includes(busca)) {
            filme.style.display = "";
        } else {
            filme.style.display = "none";
        }
    });

    if (this.value.trim() !== "") {
 
        imgBox.parentNode.insertBefore(mainContent, imgBox);

    } else {
        originalParent.insertBefore(imgBox, mainContent);
    }
});
