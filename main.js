const $burguerIcon = document.getElementById('header__burguer-icon')
const $menu = document.getElementById('menu')
const $heroImage = document.getElementById('hero__image');
const $heroContainer = document.getElementById('hero__container');

$burguerIcon.addEventListener('click', () => {
    $menu.classList.toggle('active')
    
    if($menu.classList.contains('active')) {
        $burguerIcon.src = './images/icon-close.svg'
    } else {
        $burguerIcon.src = "./images/icon-hamburger.svg"
    }
})

if(window.matchMedia('screen and (min-width: 768px)').matches) {
    $heroImage.src = './images/image-intro-desktop.jpg'
    $heroContainer.classList.add('container')
}