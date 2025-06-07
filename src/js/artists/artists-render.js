'use strict';

const artistsContainer = document.querySelector(".art-list-card");

export function markupCardArtist(date) {
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