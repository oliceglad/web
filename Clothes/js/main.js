window.addEventListener("DOMContentLoaded",function(){
    var tl = gsap.timeline({paused:true});
    var tlTwo = gsap.timeline({paused:true});

    tlTwo.to("#shop", {duration: 1, y: 0, opacity: 1})

    setTimeout (() => {
        tlTwo.play()
    }, 300)

    tl.to("#menu", {duration: 0.5, y: 0, opacity: 1})

    document.querySelector("#burger").addEventListener('click', function(){
        document.querySelector(".basket__dropdown__list").style.display = "block"
        tl.play()
    })

    document.querySelector("#off").addEventListener('click', function(){
        setTimeout (() => {
            document.querySelector(".basket__dropdown__list").style.display = "none"
        }, 1000);
        tl.reverse()
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest("#menu") && (!target.closest("#burger"))) {
          document.querySelectorAll("#menu").forEach(el => {
            tl.reverse()
            setTimeout (() => {
                document.querySelector(".basket__dropdown__list").style.display = "none"
            }, 500);
          })
        }
    })

    var block = document.getElementsByClassName("shop__list__item")
    var hoodie = document.getElementsByClassName("hoodie")
    var tee = document.getElementsByClassName("tee")
    var mediaQuery = window.matchMedia('(max-width: 800px)')
    var mediaQuery1 = window.matchMedia('(min-width: 801px)')

    if (window.innerWidth == mediaQuery) {
        document.querySelector(".shop__list").style.justifyContent = "center";
    }

    if (window.innerWidth == mediaQuery1) {
        document.querySelector(".shop__list").style.justifyContent = "center";
    }

    document.querySelector("#all").addEventListener('click', function() {
        document.querySelector("#all").classList.add("active__ctg")
        document.querySelector("#cloth").classList.remove("active__ctg")
        document.querySelector("#cloth2").classList.remove("active__ctg")
        for (var k = 0; k < block.length; k++) {
            block[k].classList.remove("off-list-1")
            document.querySelector(".shop__list").style.justifyContent = "space-between";
            if (mediaQuery.matches) {
                tee[0].style.marginRight = "0px"
                document.querySelector(".shop__list").style.justifyContent = "center";
            }
        }
        for(var i = 0; i < tee.length; i++) {
            tee[0].style.marginRight = "0px"
        }
    })

    document.querySelector("#cloth").addEventListener('click', function() {
        document.querySelector("#all").classList.remove("active__ctg")
        document.querySelector("#cloth").classList.add("active__ctg")
        document.querySelector("#cloth2").classList.remove("active__ctg")
        for (var k = 0; k < hoodie.length; k++) {
            hoodie[k].classList.add("off-list-1")
            document.querySelector(".shop__list").style.justifyContent = "flex-start";
            for(var i = 0; i < tee.length; i++) {
                tee[0].style.marginRight = "50px"
                if (mediaQuery.matches) {
                    tee[0].style.marginRight = "0px"
                    document.querySelector(".shop__list").style.justifyContent = "center";
                }
                tee[i].classList.remove("off-list-1")
            }
        }
    })

    document.querySelector("#cloth2").addEventListener('click', function() {
        document.querySelector("#all").classList.remove("active__ctg")
        document.querySelector("#cloth").classList.remove("active__ctg")
        document.querySelector("#cloth2").classList.add("active__ctg")
        for (var k = 0; k < hoodie.length; k++) {
            hoodie[k].classList.remove("off-list-1")
            document.querySelector(".shop__list").style.justifyContent = "space-between";
            for(var i = 0; i < tee.length; i++) {
                tee[i].classList.add("off-list-1")
                if (mediaQuery.matches) {
                    tee[0].style.marginRight = "0px"
                    document.querySelector(".shop__list").style.justifyContent = "center";
                }
                tee[0].style.marginRight = "0px"
            }
        }
    })

    var slider = document.getElementById('slider');
    var tooltipSlider = document.getElementById('slider-tooltips');

    noUiSlider.create(slider, {
        start: [1450, 3000],
        connect: true,
        range: {
            'min': 1300,
            'max': 4000
        },
        step: 100,
        tooltips: true,
        format: {
            from: function(value) {
                 return parseInt(value);
                },
            to: function(value) {
                return parseInt(value);
                }
            }
    });
})