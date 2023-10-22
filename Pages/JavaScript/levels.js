// This array holds all of the levels and categories.
const categories = [
  {
    id: "Effortless",
    color: "128, 140, 255",
    description: "This difficulty level is a breeze for anyone stepping into the game for the first time, offering a near-zero challenge.",
    levels: [
      {
        title: "Palace of Introduction",
        creator: "VideoCake"
      },
      {
        title: "Enemy Stronghold",
        creator: "Mystifyre"
      },
      {
        title: "Palace of Pits",
        creator: "VideoCake"
      },
      {
        title: "Differential",
        creator: "VideoCake"
      },
      {
        title: "Heavenly Landscape",
        creator: "Mystifyre"
      },
      {
        title: "First Light",
        creator: "abho"
      },
      {
        title: "Quam I",
        creator: "VideoCake"
      },
      {
        title: "Socket",
        creator: "abho"
      },
      {
        title: "Forgotten Area",
        creator: "MegaLordX8"
      },
      {
        title: "Easy, right? Not enough.",
        creator: "アニー"
      },
      {
        title: "Deep Snow",
        creator: "VideoCake"
      },
      {
        title: "Magic Routes",
        creator: "VideoCake"
      },
      {
        title: "Spinners and Squares",
        creator: "Mystifyre"
      },
      {
        title: "Generator",
        creator: "abho"
      },
      {
        title: "Syncronized",
        creator: "VideoCake"
      },
      {
        title: "Off-Grid",
        creator: "VideoCake"
      }
    ]
  },
  {
    id: "Trivial",
    color: "126, 255, 213",
    description: "These levels introduce a slight challenge, making it suitable for first-time players who want a small taste of the game's mechanics.",
    levels: [
      {
        title: "Starter Biome",
        creator: "abho"
      },
      {
        title: "Crude Zone",
        creator: "MegaLordX8"
      },
      {
        title: "Quam II",
        creator: "VideoCake"
      },
      {
        title: "Palace of Circles",
        creator: "VideoCake"
      },
      {
        title: "Trails of the Clouds",
        creator: "Mystifyre"
      }
    ]
  },
  {
    id: "Easy",
    color: "138, 255, 126",
    description: "This is pretty difficult for first-time players but are easy for most players.",
    levels: [
      {
        title: "Quartet",
        creator: "abho"
      },
      {
        title: "Segment 6",
        creator: "MegaLordX8"
      },
      {
        title: "Improve",
        creator: "VideoCake"
      },
      {
        title: "Nimble Factory",
        creator: "abho"
      },
      {
        title: "Frost Trial",
        creator: "MegaLordX8"
      },
      {
        title: "Aichmophobia",
        creator: "cyAn"
      },
      {
        title: "Symmetricity",
        creator: "Mystifyre"
      },
      {
        title: "Quam III",
        creator: "VideoCake"
      },
      {
        title: "Spectral Network",
        creator: "cyAn"
      },
      {
        title: "Random Corridors",
        creator: "TheEgglet"
      },
      {
        title: "Enemy Kingdom",
        creator: "Mystifyre"
      },
      {
        title: "Death Road",
        creator: "MegaLordX8"
      },
      {
        title: "Palace of Water",
        creator: "VideoCake"
      }
    ]
  },
  {
    id: "Medium",
    color: "247, 255, 126",
    description: "First time players would not be able to beat these levels. For people who are good at the game this would be a fun enjoyable experience; not too hard, not too easy.",
    levels: [
      {
        title: "Segment 5",
        creator: "MegaLordX8"
      },
      {
        title: "Square Package",
        creator: "VideoCake"
      },
      {
        title: "Crushers",
        creator: "AudiGamer"
      },
      {
        title: "Wiper",
        creator: "abho"
      },
      {
        title: "Turntable Bank",
        creator: "abho"
      },
      {
        title: "Complex Conveyor Maze",
        creator: "abho & cyAn"
      },
      {
        title: "Squish",
        creator: "VideoCake"
      },
      {
        title: "Tetraphobia",
        creator: "cyAn"
      },
      {
        title: "Water Park",
        creator: "VideoCake"
      },
      {
        title: "Symmetry-Asymmetry",
        creator: "cyAn"
      },
      {
        title: "Second Trial",
        creator: "MegaLordX8"
      },
      {
        title: "Cellentropy",
        creator: "Mystifyre"
      },
      {
        title: "Delta Loft",
        creator: "abho"
      },
      {
        title: "Compressitory",
        creator: "abho"
      },
      {
        title: "Haven of Arts",
        creator: "cyAn"
      },
      {
        title: "Abyss Oasis",
        creator: "abho"
      },
      {
        title: "Chamber",
        creator: "abho"
      },
      {
        title: "Fluoride",
        creator: "MegaLordX8"
      },
      {
        title: "Fading Islands",
        creator: "cyAn"
      },
      {
        title: "Implode",
        creator: "MegaLordX8"
      },
      {
        title: "Icy Sights",
        creator: "VideoCake"
      },
      {
        title: "Velocity",
        creator: "MegaLordX8"
      },
      {
        title: "Endurance",
        creator: "abho"
      },
      {
        title: "Cryophobia",
        creator: "cyAn"
      },
      {
        title: "Quam V",
        creator: "VideoCake"
      },
      {
        title: "Infernal Array",
        creator: "MegaLordX8"
      },
      {
        title: "Conveying",
        creator: "AudiGamer"
      },
      {
        title: "Vorpal",
        creator: "abho"
      },
      {
        title: "Equinoxe",
        creator: "zxcvb"
      },
      {
        title: "Forgotten Depth",
        creator: "abho"
      }
    ]
  },
  {
    id: "Hard",
    color: "255, 191, 126",
    description: "Most normal players will struggle a bit on these levels.",
    levels: [
      {
        title: "Plasteel",
        creator: "abho"
      }
    ]
  },
  {
    id: "Challenging",
    color: "255, 126, 126",
    description: "These levels require a significant amount of time and effort to complete for normal players.",
    levels: [
    ]
  },
  {
    id: "Brutal",
    color: "255, 124, 183",
    description: "These levels are the pinnicle of difficulty for most normal players.",
    levels: [
    ]
  },
  {
    id: "Extreme",
    color: "152, 72, 100",
    description: "These levels are extremely difficult to even more experienced players.",
    levels: [
    ]
  },
  {
    id: "Insane",
    color: "130, 130, 130",
    description: "This category is not for the light-hearted. For even the most professional players these levels require huge amounts of time and effort to complete.",
    levels: [
    ]
  },
  {
    id: "Mythical",
    color: "",
    description: "The levels in this category are almost impossible. Good Luck.",
    levels: [
    ]
  },
];

// Function which builds the category in HTML based off the array.
function generateHTML(categories) {
  for (const category of categories) {
    const { id, color, description, levels } = category;

    const tabContent = document.getElementById(id);
    tabContent.style.background = `rgba(${color}, 0.2)`;
    tabContent.style.display = 'none';
    tabContent.style.textAlign = 'center';
    tabContent.style.lineHeight = '0.7';

    const tabTitle = document.createElement('h1');
    tabTitle.innerHTML = id;
    tabTitle.style.lineHeight = 1.2;
    tabTitle.style.margin = 0;

    if (id == 'Mythical') tabTitle.style.background = 'linear-gradient(180deg, rgba(138,188,249,1) 0%, rgba(162,252,216,1) 50%, rgba(199,123,247,1) 100%)';
    else tabTitle.style.backgroundColor = `rgba(${color}, 1)`;

    const tabDesc = document.createElement('p');
    tabDesc.innerHTML = description;
    tabDesc.style.margin = 0;
    tabDesc.style.paddingBottom = '.5%';

    tabContent.appendChild(tabTitle);
    tabTitle.appendChild(tabDesc);

    const levelsContainer = document.createElement('div');
    levelsContainer.style.display = 'flex';
    levelsContainer.style.flexWrap = 'wrap';
    tabContent.appendChild(levelsContainer);

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
  }
}
generateHTML(categories);

// Constants
const levelCountDiv = document.getElementById('level-count');
const categoryElements = {
  'Effortless': document.getElementById('Effortless'),
  'Trivial': document.getElementById('Trivial'),
  'Easy': document.getElementById('Easy'),
  'Medium': document.getElementById('Medium'),
  'Hard': document.getElementById('Hard'),
  'Challenging': document.getElementById('Challenging'),
  'Brutal': document.getElementById('Brutal'),
  'Extreme': document.getElementById('Extreme'),
  'Insane': document.getElementById('Insane'),
  'Mythical': document.getElementById('Mythical'),
};
const checkbox = document.querySelector('input[type="checkbox"]');

const categoryButtons = {
  'effortlessBtn': 'Effortless',
  'trivialBtn': 'Trivial',
  'easyBtn': 'Easy',
  'mediumBtn': 'Medium',
  'hardBtn': 'Hard',
  'challengingBtn': 'Challenging',
  'brutalBtn': 'Brutal',
  'extremeBtn': 'Extreme',
  'insaneBtn': 'Insane',
  'mythicalBtn': 'Mythical',
};

// Functions
function toggleCategory(categoryName) {
  const categoryElement = categoryElements[categoryName];
  if (categoryElement.style.display === 'block') {
    categoryElement.style.display = 'none';
    currentCategory = null;
  } else {
    if (currentCategory) {
      categoryElements[currentCategory].style.display = 'none';
    }
    categoryElement.style.display = 'block';
    currentCategory = categoryName;
  }
}

function scrollToCategoryWithCheckbox(categoryName) {
  if (checkbox.checked) {
    toggleCategory(categoryName);
    const categoryElement = categoryElements[categoryName];
    categoryElement.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleAllCategories() {
  for (const category in categoryElements) {
    if (!categoryElements.hasOwnProperty(category)) continue;
    const categoryElement = categoryElements[category];
    if (checkbox.checked) categoryElement.style.display = 'block';
    else categoryElement.style.display = 'none';
  }
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

function toggleBrightness(image) {
  const isCompleted = image.getAttribute('data-completed') === 'true';
  
  if (isCompleted) {
    image.style.filter = 'brightness(1)';
    image.setAttribute('data-completed', 'false');
  } else {
    image.style.filter = 'brightness(0.5)';
    image.setAttribute('data-completed', 'true');
  }

  const levelName = image.getAttribute('src').match(/\/levels\/images\/(.+)\.png/)[1];
  localStorage.setItem(`completion_${levelName}`, isCompleted ? 'false' : 'true');

  let completedCount = 0;
  document.querySelectorAll('.levelImage').forEach((levelImage) => {
    const levelName = levelImage.getAttribute('src').match(/\/levels\/images\/(.+)\.png/)[1];
    const isCompleted = localStorage.getItem(`completion_${levelName}`);

    if (isCompleted === 'true') {
      completedCount++;
    }
  });

  levelCountDiv.textContent = `You have completed ${completedCount} out of ${levelCount} levels on this list.`;
}

// Event Listeners
$(document).ready(function() {
  $('.button-container > .button').click(function(event) {
    if (checkbox.checked) {
      return;
    }
    var isActive = $(this).hasClass('active');
    $('.button-container > .button').removeClass('active');
    if (!isActive) {
      $(this).addClass('active');
    }
  });
});

checkbox.addEventListener('change', function() {
  const isActive = this.checked;
  toggleAllCategories();
  $('.button-container > .button').toggleClass('active', isActive);
  if (isActive) {
    currentCategory = null;
    for (const categoryName in categoryElements) {
      categoryElements[categoryName].style.display = 'block';
    }
  }
});

document.querySelectorAll('.levelImage').forEach((levelImage) => {
  levelImage.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    toggleBrightness(levelImage);
  });
});

// Level count text
const levelCount = categories.reduce((count, category) => {
  return count + category.levels.length;
}, 0);

levelCountDiv.textContent = `There is currently a total of ${levelCount} levels in this list.`;

effortlessBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Effortless');
});
trivialBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Trivial');
});
easyBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Easy');
});
mediumBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Medium');
});
hardBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Hard');
});
challengingBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Challenging');
});
brutalBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Brutal');
});
extremeBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Extreme');
});
insaneBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Insane');
});
mythicalBtn.addEventListener('click', function() {
  scrollToCategoryWithCheckbox('Mythical');
});

for (const buttonId in categoryButtons) {
  const buttonElement = document.getElementById(buttonId);
  buttonElement.addEventListener('click', function() {
    if (checkbox.checked) {
      scrollToCategoryWithCheckbox(categoryButtons[buttonId]);
    } else {
      toggleCategory(categoryButtons[buttonId]);
    }
  });
}

let currentCategory = null;

// Restore completion state from localStorage.
let completedCount = 0;
document.querySelectorAll('.levelImage').forEach((levelImage) => {
  const levelName = levelImage.getAttribute('src').match(/\/levels\/images\/(.+)\.png/)[1];
  const isCompleted = localStorage.getItem(`completion_${levelName}`);

  if (isCompleted === 'true') {
    completedCount++;
    levelImage.style.filter = 'brightness(0.5)'; // Set the initial brightness for completed levels
    levelImage.setAttribute('data-completed', 'true');
  } else {
    levelImage.style.filter = 'brightness(1)'; // Set the initial brightness for uncompleted levels
    levelImage.setAttribute('data-completed', 'false');
  }
});

levelCountDiv.textContent = `You have completed ${completedCount} out of ${levelCount} levels on this list.`;