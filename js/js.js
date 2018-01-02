window.onscroll = nav;

function nav() {
    var scroll = pageYOffset;
    console.log(scroll);
    if (scroll > 5) {
        document.getElementById('navmain').classList.add("nav-fixed");
        document.getElementById('coming-soon').style.opacity = '.0';

    } else {
        document.getElementById('navmain').classList.remove("nav-fixed");
        document.getElementById('coming-soon').style.opacity = '.6';
    }
    if (scroll > 300) {
        document.getElementById('slider-section').style.opacity = '1';

    } else {
        document.getElementById('slider-section').style.opacity = '.0';        
    }
}