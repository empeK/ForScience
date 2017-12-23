window.onscroll = nav;

function nav() {
    var scroll = pageYOffset;
    console.log(scroll);
    if (scroll > 5) {
        document.getElementById('navmain').classList.add("nav-fixed");

    } else {
        document.getElementById('navmain').classList.remove("nav-fixed");
    }
}