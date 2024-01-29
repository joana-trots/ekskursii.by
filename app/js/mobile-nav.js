(function(){
    var burger = document.querySelector('.burger'),
        menu = document.querySelector('.header__container--mobile');
    
    burger.onclick = function() {
        menu.classList.toggle('menu-opened');
        burger.classList.toggle('active');
        document.body.classList.toggle('overflow-hidden');
    }
}());