const pages = document.querySelectorAll('[id$="Page"]');

if (pages.length > 1) {

    const pageOne = pages[0];

    pages.forEach(page => {
        if (page != pageOne) {
            $(page).css("display", "none");
        }
    });
}

const route = (pageId) => {

    hideRemainingScreens(pageId);

    const page = document.getElementById(pageId);

    $(page).css("display", "block");

    window.scrollTo(0, 0);
};

const hideRemainingScreens = (pageId) => {

    const restPages = document.querySelectorAll('[id$="Page"]');

    restPages.forEach(page => {
        if ($(page).attr("id") != pageId) {
            $(page).css("display", "none");
        }
    });
};

document.addEventListener("DOMContentLoaded", function () {
    $('.carousel').carousel({
        interval: 1500
    });
});