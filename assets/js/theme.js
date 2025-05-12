$(document).ready(function () {
    $(".offcanvas .nav li a").click(function () {
        $(".offcanvas button").click();
    });

    var apartmentsCollapse = document.getElementById("more-apartments");

    apartmentsCollapse.addEventListener("shown.bs.collapse", function () {
        $(".prices a[href='#more-apartments'] span").toggleClass("d-none");
    });

    apartmentsCollapse.addEventListener("hidden.bs.collapse", function () {
        $(".prices a[href='#more-apartments'] span").toggleClass("d-none");
    });
});
