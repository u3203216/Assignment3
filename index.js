
const links = document.querySelectorAll('ul li');
const pages = document.querySelectorAll('.page');
const allBtns = document.querySelectorAll('.close-btn');

for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', function () {
        allBtns[i].parentElement.style.display = "none";
        document.querySelector('header').style.filter = "blur(0px)";
    });
}

$('.gallery li').hide();

$('.gallery .trigger').on('click', function () {

    $('.gallery li').each(function (index) {
        $(this).delay(1000 * index).fadeIn(1000);
    });

});

let selectedPageBtn = "";
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.display = "none";
        }
        pages[i].style.display = "block";
        selectedPageBtn = i;
        document.querySelector('header').style.filter = "blur(2px)";
    });
}

