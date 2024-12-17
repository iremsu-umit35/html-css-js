const bg_color = {
    grass: '#8BD369',
    fire: '#FF603F',
    water: '#3399FF',
    bug: '#AABB22',
    normal: '#AAAA99',
    flying: '#9AA8FA',
    poison: '#B76EA4',
    electric: '#FFD34E',
    ground: '#E2C56A',
    fairy: '#F1A8EC',
    psychic: '#FF6EA4',
    fighting: '#C56E5C',
    rock: '#C5B679',
    dragon: '#7766EE',
    ice: '#66CCFF',
}

const poke_container = document.querySelector('.poke-container');
const search = document.querySelector('.search');
const search_button = document.querySelector('.searchBtn');
const searchInput = document.querySelector('.searchInput');

// Çekilecek toplam Pokémon sayısı
const pokemon_count = 151

// Arama butonuna tıklanınca, arama alanını aktif/pasif yapıyoruz
search_button.addEventListener('click', () => {
    search.classList.toggle("active");
})

// Kullanıcı arama yaparken Pokémon kartlarını filtreliyoruz
searchInput.addEventListener('input', (e) => {

    const searchValue = searchInput.value.toLowerCase()
    const pokemonNames = document.querySelectorAll('.poke-name')    // Eğer Pokémon adı, arama değerini içermiyorsa kartı gizle



    pokemonNames.forEach((pokemonName) => {
        pokemonName.parentElement.parentElement.style.display = 'block'// Varsayılan olarak görünür yap

        // Eğer Pokémon adı, arama değerini içermiyorsa kartı gizle
        if (!pokemonName.innerHTML.toLowerCase().includes(searchValue)) {
            pokemonName.parentElement.parentElement.style.display = 'none'
        }
    })
})

// Pokémon verilerini API'den çekiyoruz
const fetchPokemons = async()=>{
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);// Her bir Pokémon ID'si için veri al
    }
}

// Belirli bir ID'ye sahip Pokémon verisini al ve işleme gönder
const getPokemon = async(id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`// API'den veri alınacak URL
    const res = await fetch(url)// API'den veriyi çek
    const data = await res.json()// API'den veriyi çek
    //console.log(data)
    createPokemonCard(data)// Veriyi bir kart olarak oluştur
}

// Bir Pokémon için kart oluştur
const createPokemonCard = (pokemon)=>{
    const pokemonDiv = document.createElement('div')// Yeni bir div oluştur
    pokemonDiv.classList.add('pokemon')// Div'e "pokemon" sınıfını ekle

    const pokemonId = pokemon.id.toString().padStart(3, '0')
    // Pokémon türünü ve türüne göre arka plan rengini al
    const pokemonType = pokemon.types[0].type.name
    const pokemonBg = bg_color[pokemonType]
    pokemonDiv.style.backgroundColor = `${pokemonBg}`// Arka plan rengini ayarla

// Pokémon kartının içeriğini HTML olarak oluştur
    const pokemonInnerHTML = `
            <div class="image-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
              alt="Pokemon 1 image"
            />
          </div>
          <div class="poke-info">
            <span class="poke-id">${pokemonId}</span>
            <h3 class="poke-name">${pokemon.name}</h3>
            <div class="small">
              <small class="poke-exp"
                ><i class="fa-solid fa-flask"></i> <span>${pokemon.base_experience} Exp</span></small
              >
              <small class="poke-weight"
                ><i class="fa-solid fa-weight-scale"></i> <span>${pokemon.weight} Kg</span></small
              >
            </div>
            <div class="poke-type"></div>
              <i class="fa-brands fa-uncharted"></i> <span>${pokemonType}</span>
            </h5>
          </div>
  `

    pokemonDiv.innerHTML = pokemonInnerHTML  // Oluşturulan içeriği Pokémon kartı div'ine ekle
    poke_container.append(pokemonDiv)  // Pokémon kartını ana kapsayıcıya ekle
}
fetchPokemons()// Tüm Pokémonları çek ve ekrana yükle