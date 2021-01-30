window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})


const nav = document.querySelector('.navigation');
const mToggle = document.querySelector('.menuToggle');
mToggle.addEventListener('click', toggleMenu);

function toggleMenu() {

  mToggle.classList.toggle('active')
  nav.classList.toggle('active')

  console.log(mToggle.classList)
  console.log(nav.classList)

}