window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop; // Получаем положение скролла
    if(scrolled !== 0){
        // Если прокрутка есть, то делаем блок прозрачным
        document.querySelector('.header').style.background = "rgba(0, 0, 0, 0.7)"; 
        document.querySelector('.header').style.height = "50px";
        document.querySelector('.header__logo').style.height = "50px";
    }else{
        // Если нет, то делаем его полностью видимым
        document.querySelector('.header').style.background = "none"; 
        document.querySelector('.header').style.height = "67px";
    };
    };

    
/* Services Modal */
const modalViews = document.querySelectorAll('.section__menu');
const modalBtns = document.querySelectorAll('.button-cover');
const modalCloses = document.querySelectorAll('.section__close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
            document.getElementsByTagName('body')[0].style.overflow = 'visible';
        })
    })
})

