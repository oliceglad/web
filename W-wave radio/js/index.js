window.addEventListener('DOMContentLoaded', function () {

    document.querySelector(".form-btn__open").addEventListener("click", function () {
        document.querySelector(".form").classList.add("form__active");
        document.querySelector(".header__ent").classList.add("off");
        this.classList.add("active");
    })

    document.addEventListener("click", function (e) {
        let target = e.target;
        let form = document.querySelector(".form");
        if (!target.closest(".form-container")) {
            form.classList.remove("form__active");
            form.querySelector("input").value = "";
            document.querySelector(".form-btn__open").classList.remove("active")
            document.querySelector(".header__ent").classList.remove("off");
        }
    }) 
    
    document.querySelector(".podcast__item__play").addEventListener("click", function () {
        document.querySelector(".podcast__item__pause").classList.remove("off")
        document.querySelector(".podcast__item__play").classList.add("off")
    })

    document.querySelector(".podcast__item__pause").addEventListener("click", function () {
        document.querySelector(".podcast__item__play").classList.remove("off")
        document.querySelector(".podcast__item__pause").classList.add("off")
    })

    document.querySelector(".podcast__item__conten-down__link").addEventListener("click", function () {
        document.querySelector(".podcast__item__conten-down__link").classList.add("is-active")
    })

    document.querySelector("#burger").addEventListener("click", function() {
        document.querySelector("#menu").classList.add("menu-active");
    })

    document.querySelector("#point").addEventListener("click", function() {
        document.querySelector("#menu").classList.remove("menu-active")
    })

})