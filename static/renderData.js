const dataSection = document.querySelector('#content');

async function fetchGameData() {
	const request = await fetch('/db/');
	const { games } = await request.json();
	return games;
}

function generateGameCard(game) {
	const { title, platforms, genres, developer, releaseYear } = game;

	return `
    <div class='game'>
      <h3 style='text-align: center;'>${title}</h3>
      <div class='game-details-platforms'>
        <p>Platforms:</p>
        <ul>
          ${platforms.map(platform => `<li>${platform}</li>`).join('')}
        </ul>
      </div>
      <div class='game-details-genres'>
        <p>Genres:</p>
        <ul>
          ${genres.map(genre => `<li>${genre}</li>`).join('')}
        </ul>
      </div>
      <div>
        <h4>Additional Info:</h4>
        <p>Developer: ${developer}</p>
        <p>Release Year: ${releaseYear}</p>
      </div>
    </div> 
  `;
}

function render(gamesArr) {
	const gameCards = gamesArr.map(game => generateGameCard(game)).join('');
	dataSection.insertAdjacentHTML('beforeend', gameCards);
}

const gameData = await fetchGameData();

render(gameData);
