/*/const cardPokemon = document.querySelectorAll('.js-open-details-pokemon');
const btnCloseModal = document.querySelector('.js-close-modal');

function openDetailsPokemon(){
   document.documentElement.classList.add('open-modal');
}

function closeDetailsPokemon(){
    document.documentElement.classList.remove('open-modal');
}

cardPokemon.forEach(card => {
    card.addEventListener('click',openDetailsPokemon);
    
})

btnCloseModal.addEventListener('click',closeDetailsPokemon);/*/
var slide_hero = new Swiper(".slide-hero", {
  effect: 'fade',
  pagination: {
    el: ".slide-hero .swiper-wrapper .swiper-pagination",
    clickable:true
  },
});