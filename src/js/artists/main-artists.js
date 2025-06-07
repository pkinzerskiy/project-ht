'use strict';
  
import { fetchArtist } from './artists-api.js';
let page = 1;
const limit = 8; 

const artistsContainer = document.querySelector(".art-list-card");
console.log(artistsContainer);

  const getListArtist = async () => {
    try {
        const date = await fetchArtist(page, limit);
        markupCardArtist(date.artists);
        // console.log(date);  
    } catch (error) {
      console.log("Помилка в getListArtist:", error);
    }
  };
  
getListArtist();
  
function markupCardArtist(date) {
    let markup = date.map(
        ({ strArtist, strBiographyEN, strArtistThumb, genres }) => 
                `<li class="art-item">
                <img class="art-img" src="${strArtistThumb}" alt="${strArtist}" />
                <ul class="genreList"><li>${genres.join( ).replaceAll(",","</li><li>")}</li></ul>             
                <h4>${strArtist}</h4>
                <p>${strBiographyEN}</p>
     `).join('');
               
    console.log('markup:', markup);
    artistsContainer.insertAdjacentHTML("beforeend", markup);
}
       