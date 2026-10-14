document.addEventListener("DOMContentLoaded", () => {

    const favs = document.querySelectorAll(".fav");

    favs.forEach(f => {
        let id = f.dataset.id;

        if (localStorage.getItem("fav_" + id) === "true") {
            f.classList.add("active");
            f.textContent = "❤️";
        } else {
            f.textContent = "♡";
        }

        f.addEventListener("click", (event) => {
            event.stopPropagation();
            event.preventDefault();

            f.classList.toggle("active");

            if (f.classList.contains("active")) {
                f.textContent = "❤️";
                localStorage.setItem("fav_" + id, "true");
            } else {
                f.textContent = "♡";
                localStorage.removeItem("fav_" + id);
            }
        });
    });

});
