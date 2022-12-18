
// btn menu

function showMenu() {
    const btn1 = document.querySelector('.top__btn');
    const menu1 = document.querySelector('.nav');

    btn1.addEventListener('click', function () {
        if (menu1.classList.contains('active') && btn1.classList.contains('active')) {
            menu1.classList.remove('active');
            btn1.classList.remove('active');
        } else {
            menu1.classList.add('active');
            btn1.classList.add('active');
        }
    })
}
showMenu();



// show sub menu

function subMenu() {
    const btn = document.querySelector('.nav__dir');
    const sub = document.querySelector('.sub');
    let btmMain = document.querySelector('.top__btn')

    btn.addEventListener('click', function () {
        btn.classList.toggle('active');
        sub.classList.toggle('active');
    });

    btmMain.addEventListener('click', function () {
        btn.classList.remove('active');
        sub.classList.remove('active');
    });
}
subMenu();



// sub content

function showSubContent() {
    let container = document.querySelector('.sub__nav');

    let subMenuBtn1 = document.querySelector('.sub__nav1');
    let subMenuBtn2 = document.querySelector('.sub__nav2');
    let subMenuBtn3 = document.querySelector('.sub__nav3');

    let subMenuItem1 = document.querySelector('.sub__contentItem1');
    let subMenuItem2 = document.querySelector('.sub__contentItem2');
    let subMenuItem3 = document.querySelector('.sub__contentItem3');

    container.addEventListener('click', function (e) {
        let items = document.querySelectorAll('.sub__nav li');
        let target = e.target;
        Array.from(items).forEach(item => {
            item.classList.remove('active');
        })
        target.classList.add('active');

        let subs = document.querySelectorAll('.sub__contentItem');
        let target2 = e.target2;
        Array.from(subs).forEach(item => {
            item.classList.remove('active');
            if (subMenuBtn1.classList.contains('active')) {
                subMenuItem1.classList.add('active');
            }
            if (subMenuBtn2.classList.contains('active')) {
                subMenuItem2.classList.add('active');
            }
            if (subMenuBtn3.classList.contains('active')) {
                subMenuItem3.classList.add('active');
            }
        })
    })
}
showSubContent();


// menu about 

function about() {

    let btn = document.querySelector('.nav__about');
    let menu = document.querySelector('.nav__about_menu')

    btn.addEventListener('click', function () {
        menu.classList.toggle('active');
    })

    btn.onmouseover = function () { mouseOver() };
    menu.onmouseover = function () { mouseOver() };
    btn.onmouseout = function () { mouseOut() };
    menu.onmouseout = function () { mouseOut() };

    function mouseOver() {
        menu.classList.add('active');
    }
    function mouseOut() {
        menu.classList.remove('active');
    }
}
about();


// swiper

function swiperOne() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}
swiperOne();
