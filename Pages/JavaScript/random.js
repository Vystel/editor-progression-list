const randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', randomLevel);

function randomLevel() {

  levelsContainer.innerHTML = '';

  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomLevel = randomCategory.levels[Math.floor(Math.random() * randomCategory.levels.length)];

  const levelContainer = document.createElement('div');
  levelContainer.classList.add('level-container');
  levelContainer.style.marginLeft = '60px';
  levelContainer.style.marginRight = '60px';
  levelsContainer.style.display = 'flex';
  levelsContainer.style.justifyContent = 'space-evenly';
  levelsContainer.style.flexWrap = 'wrap';
  levelsContainer.style.margin = '5vh 0';

  const categoryTitle = document.createElement('h3');
  categoryTitle.innerHTML = randomCategory.id;
  categoryTitle.style.color = `rgba(${randomCategory.color}, 1)`;
  categoryTitle.style.textAlign = 'center';
  categoryTitle.style.marginBottom = '0';

  const levelTitle = document.createElement('h2');
  levelTitle.innerHTML = randomLevel.title;
  levelTitle.style.color = 'white';
  levelTitle.style.textAlign = 'center';

  const levelImage = document.createElement('img');
  levelImage.src = "../../Levels/Images/" + randomLevel.title.replace(/\?/g, '') + ".png";
  levelImage.style.width = "250px";
  levelImage.style.height = "250px";
  levelImage.classList.add('levelImage');

  const levelName = randomLevel.title.replace(/\?/g, '');
  const isCompleted = localStorage.getItem(`completion_${levelName}`);
  if (isCompleted === 'true') {
    levelImage.style.filter = 'brightness(0.5)';
    levelImage.setAttribute('data-completed', 'true');
  } else {
    levelImage.style.filter = 'brightness(1)';
    levelImage.setAttribute('data-completed', 'false');
  }

  levelImage.addEventListener('click', () => copyLevel(randomLevel.title));

  levelImage.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    toggleBrightness(this);
  });

  const levelCreator = document.createElement('p');
  levelCreator.innerHTML = 'By ' + randomLevel.creator;
  levelCreator.style.color = 'white';
  levelCreator.style.textAlign = 'center';

  levelContainer.appendChild(categoryTitle);
  levelContainer.appendChild(levelTitle);
  levelContainer.appendChild(levelImage);
  levelContainer.appendChild(levelCreator);

  levelsContainer.appendChild(levelContainer);

  if (levelsContainer.hasChildNodes()) {
    levelsContainer.style.display = 'flex';
    levelsContainer.style.justifyContent = 'center';

    // Apply fade-in animation
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
