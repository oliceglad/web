
window.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    })

    
    document.querySelector('#off').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    })

    document.querySelectorAll('.work__list__item__link').forEach(function (workLink) {

        workLink.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path


            document.querySelectorAll('.work__list__item__link').forEach(function (LinkContent){
                LinkContent.classList.remove('step--active')
            })
            document.querySelector(`[data-path="${path}"]`).classList.add('step--active')


            document.querySelectorAll('.work__consultation-container').forEach(function (WorkContent) {
                WorkContent.classList.remove('work__consultation-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('work__consultation-active')
            
        })
    })
})