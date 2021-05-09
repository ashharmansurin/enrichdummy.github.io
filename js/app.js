$(document).ready(function () {
    $(document).scroll(function () {
        var posTop = $(document).scrollTop();
        console.log(posTop);
        let header = document.querySelector('header');
        if (posTop > 100) {
            console.log('i am greater than 100%');
            header.classList.add('box_shadow');
            console.log(header);
        }
        else {
            console.log('lower than 50');
            header.classList.remove('box_shadow');
        }
    });
});