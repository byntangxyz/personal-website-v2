
// navbar fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    };
};


// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// animasi tulisan
var typed = new Typed('#slogan', {
    strings: [
        'Frontend Developer',
        'Student',
        'Tech Enthusiast',
        'Photographer'
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 3000,
    loop: true,
});


// progress bar
function updateProgress(percent) {
    const progressBar = document.querySelector('.bg-teal-600');
    const progressText = document.querySelector('.text-teal-600:last-child');
    progressBar.style.width = percent + '%';
    progressText.textContent = percent + '%';
    };

updateProgress(5);


//hover effect
document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
      sosmed.classList.remove("ph");
      sosmed.classList.add("ph-fill");
    });
  
    sosmed.addEventListener("mouseleave", () => {
      sosmed.classList.remove("ph-fill");
      sosmed.classList.add("ph");
    });
  });