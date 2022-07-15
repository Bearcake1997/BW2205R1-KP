$(document).ready(function () {
    var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.scr = "img/pixlr-bg-result (1).png"
    } else {
        sideNav.style.right = "-250px";
        menu.scr = "img/menu.png"
    }
}
});