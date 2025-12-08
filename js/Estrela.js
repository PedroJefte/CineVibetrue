document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".comentarios");
    const lista = document.querySelector("#lista-comentarios");
    const stars = document.querySelectorAll(".rating .star");

    let avaliacaoAtual = 0;

    stars.forEach(star => {
        star.addEventListener("click", () => {
            avaliacaoAtual = star.dataset.star;

            stars.forEach(s => {
                s.classList.toggle("active", s.dataset.star <= avaliacaoAtual);
            });
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const texto = document.querySelector("#comentario").value.trim();
        if (!texto) return;

        const box = document.createElement("div");
        box.classList.add("comentario-box");

        box.innerHTML = `
            <p><strong>Avaliação:</strong> ${avaliacaoAtual} ★</p>
            <p>${texto}</p>
        `;

        lista.prepend(box);

        form.reset();
        avaliacaoAtual = 0;

        stars.forEach(s => s.classList.remove("active"));
    });
});
