document.addEventListener("click", function (clicked) {
    if (clicked.target.classList.contains("gallery-item")) 
    {
        const src = clicked.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById("gallery-modal"))
        myModal.show();

    }
})