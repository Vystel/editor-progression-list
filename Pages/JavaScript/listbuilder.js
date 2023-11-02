const categories = [
  {
    "id": "Effortless",
    "color": "128, 140, 255",
    "description": "This difficulty level is a breeze for anyone stepping into the game for the first time, offering a near-zero challenge.",
    "levels": [
      {
        "title": "Level",
        "creator": "Creator"
      }
    ]
  },
  {
    "id": "Trivial",
    "color": "126, 255, 213",
    "description": "These levels introduce a slight challenge, making it suitable for first-time players who want a small taste of the game's mechanics.",
    "levels": []
  },
  {
    "id": "Easy",
    "color": "138, 255, 126",
    "description": "While beginners might find these levels somewhat challenging, they are a walk in the park for the majority of players.",
    "levels": []
  },
  {
    "id": "Medium",
    "color": "247, 255, 126",
    "description": "Beginners will struggle with these levels, but for skilled players, they offer an enjoyable experience that strikes a balance between not too difficult and not too easy.",
    "levels": []
  },
  {
    "id": "Hard",
    "color": "255, 191, 126",
    "description": "The majority of regular players will face a considerable challenge with these levels.",
    "levels": []
  },
  {
    "id": "Challenging",
    "color": "255, 126, 126",
    "description": "These levels require a significant amount of time and effort to complete for normal players.",
    "levels": []
  },
  {
    "id": "Brutal",
    "color": "255, 124, 183",
    "description": "These levels are the pinnacle of difficulty for the average player, requiring even experienced players to put in some serious time and effort.",
    "levels": []
  },
  {
    "id": "Extreme",
    "color": "152, 72, 100",
    "description": "Even more experienced players will find these levels exceptionally challenging.",
    "levels": []
  },
  {
    "id": "Insane",
    "color": "130, 130, 130",
    "description": "This category is not for the light-hearted. Even the most skilled players will need extensive time and effort to conquer these levels.",
    "levels": []
  },
  {
    "id": "Mythical",
    "color": "",
    "description": "The levels in this category are almost humanly impossible. Good Luck.",
    "levels": []
  }
];

const categoriesContainer = document.getElementById('categories');

function generateEverything(categories) {
  for (const category of categories) {
    const { id, color, description, levels } = category;
    const tabContent = document.getElementById(id);
    tabContent.style.background = `rgba(${color}, 0.2)`;
    tabContent.style.display = 'block';
    tabContent.style.textAlign = 'center';
    tabContent.style.lineHeight = '14px';

    const tabTitle = document.createElement('h1');
    tabTitle.innerHTML = id;
    tabTitle.style.lineHeight = '24px';
    tabTitle.style.margin = '0';
    tabTitle.style.paddingTop = '10px';
    tabTitle.style.color = 'black';
    tabTitle.style.fontSize = '30px';

    if (id == 'Mythical') tabTitle.style.background = 'linear-gradient(180deg, rgba(138,188,249,1) 0%, rgba(162,252,216,1) 50%, rgba(199,123,247,1) 100%)';
    else tabTitle.style.backgroundColor = `rgba(${color}, 1)`;

    const tabDesc = document.createElement('p');
    tabDesc.innerHTML = description;
    tabDesc.style.margin = '0';
    tabDesc.style.paddingBottom = '10px';
    tabDesc.style.maxWidth = 'none';
    tabDesc.style.color = 'black';

    tabContent.appendChild(tabTitle);
    tabTitle.appendChild(tabDesc);

    const levelsContainer = document.createElement('div');
    levelsContainer.classList.add('levels-container');
    levelsContainer.style.display = 'flex';
    levelsContainer.style.flexWrap = 'wrap';
    levelsContainer.style.justifyContent = 'center';
    levelsContainer.style.alignItems = 'center';
    tabContent.appendChild(levelsContainer);

    for (const level of levels) {
      createLevelElement(level, levelsContainer);
    }

    $(levelsContainer).sortable({
      connectWith: '.levels-container',
      items: '.level-container',
      start: function(e, ui) {
        ui.placeholder.height(ui.item.height());
      },
      receive: function(e, ui) {
        ui.item[0].parentCategory = id;
      }
    }).disableSelection();
  }
}

function createLevelElement(level, parent) {
    const levelContainer = document.createElement('div');
    levelContainer.classList.add('level-container');
    levelContainer.parentCategory = parent.id;
    levelContainer.style.display = 'flex';
    levelContainer.style.flexDirection = 'column';
    levelContainer.style.justifyContent = 'center';
    levelContainer.style.alignItems = 'center';
    levelContainer.style.margin = '0 60px';

    const levelCreator = document.createElement('input');
    levelCreator.type = 'text';
    levelCreator.value = level.creator;
    levelCreator.classList.add('level-creator');
    levelCreator.style.margin = '20px 0'

    const levelImage = document.createElement('img');
    levelImage.src = "../../Images/UI/Image.png";
    levelImage.style.width = "250px";
    levelImage.style.height = "250px";
    levelImage.style.cursor = "grab";
    levelImage.classList.add('levelImage');
    levelImage.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        levelContainer.remove();
    });

    const levelTitle = document.createElement('input');
    levelTitle.type = 'text';
    levelTitle.value = level.title;
    levelTitle.classList.add('level-title');
    levelTitle.style.margin = '20px 0'

    levelContainer.appendChild(levelTitle);
    levelContainer.appendChild(levelImage);
    levelContainer.appendChild(levelCreator);
    parent.appendChild(levelContainer);
}

  function addLevel() {
    const newLevel = {
      title: "Level",
      creator: "Creator"
    };
    const effortlessCategory = document.getElementById("Effortless").getElementsByClassName("levels-container")[0];
    createLevelElement(newLevel, effortlessCategory);
  }
  
  function exportArray() {
    const exportedCategories = JSON.parse(JSON.stringify(categories));

    exportedCategories.forEach(category => {
        category.levels = [];
        const levelsContainer = document.getElementById(category.id).getElementsByClassName("levels-container")[0];
        const levelElements = levelsContainer.getElementsByClassName("level-container");

        for (const levelElement of levelElements) {
            const title = levelElement.getElementsByClassName("level-title")[0].value;
            const creator = levelElement.getElementsByClassName("level-creator")[0].value;
            category.levels.push({ title, creator });
        }
    });

    console.log(exportedCategories);
    copyToClipboard(JSON.stringify(exportedCategories, null, 2));
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Exported data copied to clipboard.");
}

document.getElementById('loadLevels').addEventListener('click', async function () {
  try {
      const text = await navigator.clipboard.readText();
      handlePasteData(text);
  } catch (error) {
      alert('Failed to read clipboard. Please ensure you have given permission.');
  }
});

function handlePasteData(pastedData) {
  try {
      const newCategories = JSON.parse(pastedData);
      if (Array.isArray(newCategories)) {
          categories.splice(0, categories.length, ...newCategories);
          clearCategories();
          generateEverything(categories);
      } else {
          alert("Invalid data format.");
      }
  } catch (error) {
      alert("Error parsing pasted data.");
  }
}

function clearCategories() {
  for (const category of categories) {
      const tabContent = document.getElementById(category.id);
      if (tabContent) {
          while (tabContent.firstChild) {
              tabContent.removeChild(tabContent.firstChild);
          }
      }
  }
}


  
  
  generateEverything(categories);