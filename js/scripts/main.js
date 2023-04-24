var slide_hero = new Swiper(".slide-hero", {
  effect: 'fade',
  pagination: {
    el: ".slide-hero .main-area .area-explore .swiper-pagination",
    clickable: true
  },
});

const cardPokemon = document.querySelectorAll('.js-open-details-pokemon');
const btnCloseModal = document.querySelector('.js-close-modal');


cardPokemon.forEach(card => {
  card.addEventListener('click', openDetailsPokemon);

})

btnCloseModal.addEventListener('click', closeDetailsPokemon);

const btnDropdownSelect = document.querySelector('.js-open-select-custom');

btnDropdownSelect.addEventListener('click', () => {
  btnDropdownSelect.parentElement.classList.toggle('active');
})

const areaPokemons = document.getElementById('js-list');

function createCardPokemon(code, type, name, image) {
  let card = document.createElement('button');
  card.classList = `card-pokemon js-open-details-pokemon ${type}`;
  areaPokemons.appendChild(card);

  let bgImage = document.createElement('div');
  bgImage.classList = 'image';
  card.appendChild(bgImage);

  let srcImage = document.createElement('img');
  srcImage.className = 'thumb-img';
  srcImage.setAttribute('src', image);
  bgImage.appendChild(srcImage);

  let infoCardPokemon = document.createElement('div');
  infoCardPokemon.classList = 'info';
  card.appendChild(infoCardPokemon);

  let infoTextPokemon = document.createElement('div');
  infoTextPokemon.classList = 'text';
  infoCardPokemon.appendChild(infoTextPokemon);

  let codePokemon = document.createElement('span');
  codePokemon.textContent = (code < 10) ? `#00${code}` : (code < 100) ? `#0${code}` : `#${code}`;
  infoTextPokemon.appendChild(codePokemon);

  let namePokemon = document.createElement('h3');
  namePokemon.textContent = name;
  infoTextPokemon.appendChild(namePokemon);

  let areaIcon = document.createElement('div');
  areaIcon.classList = 'icon';
  infoCardPokemon.appendChild(areaIcon);

  let imgType = document.createElement('img');
  imgType.setAttribute('src', `img/icon-types/${type}.svg`);
  areaIcon.appendChild(imgType);

}

function listingPokemons(urlApi) {
  axios({
    method: 'GET',
    url: urlApi
  })
    .then((response) => {
      const { results, next, count } = response.data;
      const countPokemon = document.getElementById('js-count-pokemons');

      countPokemon.innerText = count;

      results.forEach(pokemon => {
        let urlApiDetails = pokemon.url;

        axios({
          method: 'GET',
          url: `${urlApiDetails}`
        })
          .then(response => {
            const { name, id, sprites, types } = response.data;
            const infoCard = {
              nome: name,
              code: id,
              image: sprites.other.dream_world.front_default,
              type: types[0].type.name
            }

            createCardPokemon(infoCard.code, infoCard.type, infoCard.nome, infoCard.image);

            const cardPokemon = document.querySelectorAll('.js-open-details-pokemon');

            cardPokemon.forEach(card => {
              card.addEventListener('click', openDetailsPokemon);
            })

          })

      })

    })
}

listingPokemons('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0');

function openDetailsPokemon() {
  document.documentElement.classList.add('open-modal');
}

function closeDetailsPokemon() {
  document.documentElement.classList.remove('open-modal');
}

const areaTypes = document.getElementById('js-type-area');
const areaTypesMobile = document.querySelector('.dropdown-select');

axios({
  method: 'GET',
  url: 'https://pokeapi.co/api/v2/type'
})
  .then(response => {
    const { results } = response.data;
    results.forEach((type, index) => {

      if (index < 18) {
        let itemType = document.createElement('li');
        areaTypes.appendChild(itemType);
        areaTypesMobile.appendChild(itemType);

        let btnType = document.createElement('button');
        btnType.classList = `type-filter ${type.name}`;
        itemType.appendChild(btnType);

        let iconType = document.createElement('div');
        iconType.classList = 'icon';
        btnType.appendChild(iconType);

        let imgType = document.createElement('img');
        imgType.setAttribute('src', `img/icon-types/${type.name}.svg`);
        iconType.appendChild(imgType);


        let nameType = document.createElement('span');
        nameType.textContent = type.name;
        btnType.appendChild(nameType);
        
        

      }



    })
  })