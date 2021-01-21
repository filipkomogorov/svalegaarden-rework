document.querySelector('#hamburger-menu').addEventListener('click', function () {
    document.querySelector('#slide-menu').classList.toggle('navigation-show')
    document.querySelector('#hamburger-menu').classList.toggle('hamburger-animation')
})

document.querySelector('#arrow-right').addEventListener('click', function () {
    document.querySelector('#event-wedding').classList.toggle('events-click-left')
    document.querySelector('#event-confirmation').classList.toggle('events-click-right')
})

document.querySelector('#arrow-left').addEventListener('click', function () {
    document.querySelector('#event-wedding').classList.toggle('events-click-left')
    document.querySelector('#event-confirmation').classList.toggle('events-click-right')
})