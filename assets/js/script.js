window.addEventListener('scroll', function () {
    if (this.scrollY <= 10) {
        document.querySelector('.navbar').classList.add('navbar-bg-trasparent');
        document.querySelector('.navbar').classList.remove('bg-primary-color');
    } else {
        document.querySelector('.navbar').classList.remove('navbar-bg-trasparent');
        document.querySelector('.navbar').classList.add('bg-primary-color');
    }
    let nav = document.querySelectorAll('.nav-link');
    if (this.scrollY >= document.querySelector('#about').offsetTop - 100 && this.scrollY < document.querySelector('#skills').offsetTop - 100) {
        [].forEach.call(nav, function (e) { e.classList.remove('active'); });
        document.querySelector("#aAbout").classList.add('active');
    } else {
        [].forEach.call(nav, function (e) { e.classList.remove('active'); });
        document.querySelector("#aHome").classList.add('active');
    }
    if (this.scrollY >= document.querySelector('#skills').offsetTop - 100 && this.scrollY < document.querySelector('#contact').offsetTop - 100) {
        [].forEach.call(nav, function (e) { e.classList.remove('active'); });
        document.querySelector("#aSkills").classList.add('active');
    }
    if ((this.innerHeight + this.scrollY) >= document.body.offsetHeight) {
        [].forEach.call(nav, function (e) { e.classList.remove('active'); });
        document.querySelector("#aContact").classList.add('active');
    }

});