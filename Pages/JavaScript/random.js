const randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', randomLevel);

function randomLevel() {
  levelsContainer.innerHTML = '';

  const totalLevels = categories.reduce((acc, category) => acc + category.levels.length, 0);

  let randomIndex = Math.floor(Math.random() * totalLevels);

  let selectedLevel, selectedCategory;
  for (const category of categories) {
    if (randomIndex < category.levels.length) {
      selectedLevel = category.levels[randomIndex];
      selectedCategory = category;
      break;
    }
    randomIndex -= category.levels.length;
  }

  if (!selectedLevel) return;

  const levelContainer = document.createElement('div');
  levelContainer.classList.add('level-container');
  levelContainer.style.marginLeft = '60px';
  levelContainer.style.marginRight = '60px';
  levelsContainer.style.display = 'flex';
  levelsContainer.style.justifyContent = 'space-evenly';
  levelsContainer.style.flexWrap = 'wrap';

  const levelTitle = document.createElement('h2');
  levelTitle.innerHTML = selectedLevel.title;
  levelTitle.style.color = 'white';
  levelTitle.style.textAlign = 'center';

  const levelImage = document.createElement('img');
  levelImage.src = "../../Levels/Images/" + selectedLevel.title.replace(/\?/g, '') + ".png";
  levelImage.style.width = "250px";
  levelImage.style.height = "250px";
  levelImage.classList.add('levelImage');
  levelImage.style.outline = `5px solid rgba(${selectedCategory.color}, 1)`;

  const levelName = selectedLevel.title.replace(/\?/g, '');
  const isCompleted = localStorage.getItem(`completion_${levelName}`);
  if (isCompleted === 'true') {
    levelImage.style.filter = 'brightness(0.5)';
    levelImage.setAttribute('data-completed', 'true');
  } else {
    levelImage.style.filter = 'brightness(1)';
    levelImage.setAttribute('data-completed', 'false');
  }

  levelImage.addEventListener('click', () => copyLevel(selectedLevel.title));

  levelImage.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    toggleBrightness(this);
  });

  const levelCreator = document.createElement('p');
  levelCreator.innerHTML = 'By ' + selectedLevel.creator;
  levelCreator.style.color = 'white';
  levelCreator.style.textAlign = 'center';
  levelCreator.style.marginTop = '20px';
  levelCreator.style.marginBottom = '20px';

  levelContainer.appendChild(levelTitle);
  levelContainer.appendChild(levelImage);
  levelContainer.appendChild(levelCreator);
  levelsContainer.appendChild(levelContainer);

  if (levelsContainer.hasChildNodes()) {
    levelsContainer.style.display = 'flex';
    levelsContainer.style.justifyContent = 'center';

    levelContainer.style.opacity = 0;
    levelContainer.style.transform = 'scale(0.5)';
    setTimeout(() => {
      levelContainer.style.transition = 'opacity 0.3s, transform 0.3s';
      levelContainer.style.opacity = 1;
      levelContainer.style.transform = 'scale(1)';
    }, 0);
  } else {
    levelsContainer.style.display = 'none';
  }
}
