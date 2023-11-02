function searchLevels() {
  const searchTerm = levelSearch.value.toLowerCase();

  levelsContainer.innerHTML = '';

  categories.forEach(category => {
    category.levels.forEach(level => {
      if (level.title.toLowerCase().includes(searchTerm) || level.creator.toLowerCase().includes(searchTerm)) {
        const levelContainer = document.createElement('div');
        levelContainer.classList.add('level-container');
        levelContainer.style.marginLeft = '60px';
        levelContainer.style.marginRight = '60px';
        levelsContainer.style.display = 'flex';
        levelsContainer.style.justifyContent = 'space-evenly';
        levelsContainer.style.flexWrap = 'wrap';

        const levelTitle = document.createElement('h2');
        levelTitle.innerHTML = level.title;
        levelTitle.style.color = 'white';
        levelTitle.style.textAlign = 'center';

        const levelImage = document.createElement('img');
        levelImage.src = "../../Levels/Images/" + level.title.replace(/\?/g, '') + ".png";
        levelImage.style.width = "250px";
        levelImage.style.height = "250px";
        levelImage.classList.add('levelImage');
        levelImage.addEventListener('click', () => copyLevel(level.title));
        levelImage.style.outline = `5px solid rgba(${category.color}, 1)`;

        const levelCreator = document.createElement('p');
        levelCreator.innerHTML = 'By ' + level.creator;
        levelCreator.style.color = 'white';
        levelCreator.style.textAlign = 'center';
        levelCreator.style.marginTop = '20px';
        levelCreator.style.marginBottom = '20px';

        levelContainer.appendChild(levelTitle);
        levelContainer.appendChild(levelImage);
        levelContainer.appendChild(levelCreator);

        levelsContainer.appendChild(levelContainer);

        levelImage.addEventListener('contextmenu', function (event) {
          event.preventDefault();
          toggleBrightness(levelImage);
        });

        const isCompleted = localStorage.getItem(`completion_${level.title}`);
        if (isCompleted === 'true') {
          levelImage.style.filter = 'brightness(0.5)';
          levelImage.setAttribute('data-completed', 'true');
        } else {
          levelImage.style.filter = 'brightness(1)';
          levelImage.setAttribute('data-completed', 'false');
        }
      }
    });
  });

  if (levelsContainer.hasChildNodes()) {
    levelsContainer.style.display = 'flex';
    levelsContainer.style.justifyContent = 'center';
  } else {
    levelsContainer.style.display = 'none';
  }
}
