const categories = [
  {
    id: "Winter Pack",
    color: "108, 235, 255",
    description: "Winter Pack Description",
    levels: [
      {
        title: "Arctic Passage",
        creator: "VideoCake",
      },
      {
        title: "One Way Pass",
        creator: "VideoCake",
      },
      {
        title: "Deep Snow",
        creator: "VideoCake",
      },
      {
        title: "Snowstorm",
        creator: "VideoCake",
      }
    ]
  },
  {
    id: "Other Map Pack",
    color: "126, 126, 126",
    description: "Other Map Pack Description",
    levels: [
      {
        title: "Level 1",
        creator: "Creator"
      },
      {
        title: "Level 2",
        creator: "Creator"
      }
    ]
  }
];

function displayLevelsFromPack() {
  const mapPackSelect = document.getElementById("mapPackSelect");
  const selectedPack = mapPackSelect.value;
  const levelTab = document.getElementById("levelTab");
  const selectedCategory = categories.find(category => category.id === selectedPack);
  levelTab.innerHTML = generateHTML(selectedCategory);
}

function generateHTML(selectedCategory) {
  const { id, color, description, levels } = selectedCategory;

  const categoryContainer = document.createElement('div');
  categoryContainer.classList.add('category-container');
  categoryContainer.style.background = `rgba(${color}, 0.2)`;
  categoryContainer.style.textAlign = 'center';
  categoryContainer.style.lineHeight = '0.7';

  const categoryHeader = document.createElement('div');
  categoryHeader.classList.add('category-header');
  categoryHeader.style.lineHeight = 1.2;
  categoryHeader.style.margin = 0;
  categoryHeader.style.backgroundColor = `rgba(${color}, 1)`;

  const categoryName = document.createElement('h1');
  categoryName.innerHTML = id;
  categoryName.style.lineHeight = 1.2;
  categoryName.style.margin = 0;

  const categoryDescription = document.createElement('p');
  categoryDescription.innerHTML = description;
  categoryDescription.style.margin = 0;
  categoryDescription.style.paddingBottom = '.5%';

  categoryHeader.appendChild(categoryName);
  categoryHeader.appendChild(categoryDescription);

  const levelsContainer = document.createElement('div');
  levelsContainer.style.display = 'flex';
  levelsContainer.style.flexWrap = 'wrap';
  categoryHeader.appendChild(levelsContainer);

  for (const level of levels) {
    const levelContainer = document.createElement('div');
    levelContainer.classList.add('level-container');
    levelContainer.style.marginLeft = '3vw';
    levelContainer.style.marginRight = '3vw';
    levelsContainer.style.display = 'flex';
    levelsContainer.style.justifyContent = 'center';

    const levelTitle = document.createElement('h2');
    levelTitle.innerHTML = level.title;
    levelTitle.style.color = 'white';

    const levelImage = document.createElement('img');
    levelImage.src = "/levels/images/" + level.title.replace(/\?/g, '') + ".png";
    levelImage.style.width = "15vw";
    levelImage.style.height = "15vw";
    levelImage.classList.add('levelImage');
    levelImage.addEventListener('click', () => copyLevel(level.title));

    const levelCreator = document.createElement('p');
    levelCreator.innerHTML = 'By ' + level.creator;
    levelCreator.style.color = 'white';

    levelContainer.appendChild(levelTitle);
    levelContainer.appendChild(levelImage);
    levelContainer.appendChild(levelCreator);
    levelsContainer.appendChild(levelContainer);
  }

  categoryContainer.appendChild(categoryHeader);
  categoryContainer.appendChild(levelsContainer);

  return categoryContainer.outerHTML;
}

function copyLevel(levelName) {
  levelName = levelName.replace(/\?/g, '');
  fetch("/levels/codes/" + String(levelName) + ".txt")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.text();
    })
    .then(text => {
      navigator.clipboard.writeText(text)
        .then(() => {
          alert('Level Code copied to clipboard!');
        })
        .catch(error => {
          window.open("/levels/codes/" + String(levelName) + ".txt", "_blank");
        });
    })
    .catch(error => {
      alert(`There seems to be a problem fetching the level code. Please send a message letting us know about the error in the EPL thread on Discord, and the developers will add the level code to the site.`);
    });
}