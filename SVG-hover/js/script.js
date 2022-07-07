let elements = document.querySelectorAll('.items');
let model = document.querySelector('.model-info');
let price = document.querySelector('.model-price');

elements.forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector(".items-info").style.display = "block";

        model.innerText = element.getAttribute('data-model');
        price.innerText = element.getAttribute('data-price');

    })
});

function close_window() {
    document.querySelector(".items-info").style.display = "none";
}