
window.addEventListener("DOMContentLoaded",function(){ 
    document.querySelector("#man").addEventListener('click', function(){
        document.querySelector("#man-1").classList.remove("off")
        document.querySelector("#woman-1").classList.add("off")
    })
    
    document.querySelector("#woman").addEventListener('click', function(){
        document.querySelector("#man-1").classList.add("off")
        document.querySelector("#woman-1").classList.remove("off")
    })

    document.querySelector("#S").addEventListener('click', function(){
        document.querySelector("#S").classList.add("active--link")
        document.querySelector("#M").classList.remove("active--link")
        document.querySelector("#L").classList.remove("active--link")
    })

    document.querySelector("#M").addEventListener('click', function(){
        document.querySelector("#M").classList.add("active--link")
        document.querySelector("#S").classList.remove("active--link")
        document.querySelector("#L").classList.remove("active--link")
    })

    document.querySelector("#L").addEventListener('click', function(){
        document.querySelector("#L").classList.add("active--link")
        document.querySelector("#S").classList.remove("active--link")
        document.querySelector("#M").classList.remove("active--link")
    })
    
})