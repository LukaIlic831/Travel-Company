function openVideo() {
    document.querySelector(".video__wrapper").style.display = "flex";
    document.body.style.overflowY = "hidden";
}

function closeVideo() {
    document.querySelector(".video__wrapper").style.display = "none";
    document.body.style.overflowY = "scroll";
}

function load() {
    if (window.innerWidth < 960) {
        document.querySelector(" .javaImg").src = "./assetss/videoimg1.jpg";
    }
    setTimeout(() => {
        document.querySelector(".loader__wrapper").style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        document.querySelector(".loader__wrapper").style.dispplay = "none";
    }, 1400);
}

function openSide() {
    if (window.innerWidth < 960) {
        document.querySelector(".phone__menu--wrapper").style.display = 'flex';

        setTimeout(() => {
            document.querySelector(".phone__menu--wrapper").style.opacity = '1';
            document.querySelector(".phone__menu").style.left = 0;
        }, 100);
    }

}

function zclose() {
    document.querySelector(".phone__menu").style.left = '-90%';
    document.querySelector(".phone__menu--wrapper").style.opacity = '0';

    setTimeout(() => {
        document.querySelector(".phone__menu--wrapper").style.display = 'none';

    }, 100);
}