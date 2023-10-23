function searchLevels() {
  const searchTerm = levelSearch.value.toLowerCase();

  levelsContainer.innerHTML = '';

  categories.forEach(category => {
    category.levels.forEach(level => {
      if (level.title.toLowerCase().includes(searchTerm) || level.creator.toLowerCase().includes(searchTerm)) {
        const levelContainer = document.createElement('div');
        levelContainer.classList.add('level-container');
        levelContainer.style.marginLeft = '3vw';
        levelContainer.style.marginRight = '3vw';
        levelsContainer.style.display = 'flex';
        levelsContainer.style.justifyContent = 'space-evenly';
        levelsContainer.style.flexWrap = 'wrap';
        levelsContainer.style.margin = '5vh 0';

        const categoryTitle = document.createElement('h3');
        categoryTitle.innerHTML = category.id;
        categoryTitle.style.color = `rgba(${category.color}, 1)`;
        categoryTitle.style.textAlign = 'center';
        categoryTitle.style.marginBottom = '0vw';

        const levelTitle = document.createElement('h2');
        levelTitle.innerHTML = level.title;
        levelTitle.style.color = 'white';
        levelTitle.style.textAlign = 'center';

        const levelImage = document.createElement('img');
        levelImage.src = "../../levels/images/" + level.title.replace(/\?/g, '') + ".png";
        levelImage.style.width = "15vw";
        levelImage.style.height = "15vw";
        levelImage.classList.add('levelImage');
        levelImage.addEventListener('click', () => copyLevel(level.title));

        const levelCreator = document.createElement('p');
        levelCreator.innerHTML = 'By ' + level.creator;
        levelCreator.style.color = 'white';
        levelCreator.style.textAlign = 'center';

        levelContainer.appendChild(categoryTitle);
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
