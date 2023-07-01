const createLetterBtn = document.querySelector('#criar-carta');
const letterTextInput = document.querySelector('#carta-texto');
const generateLetter = document.querySelector('#carta-gerada');
const letterCounter = document.getElementById('carta-contador');

const toggleModeBtn = document.querySelector('#toggle-mode');
const modeIcon = document.querySelector('#mode-icon');
const body = document.body;

toggleModeBtn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  modeIcon.classList.toggle('fa-sun');
  modeIcon.classList.toggle('fa-moon');
});

const allClass = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  matrixGroup: ['rotateleft', 'rotateright', 'skewleft', 'skewright'],
  colorGroup: ['red', 'yellow', 'blue', 'green', 'orange', 'pink', 'purple']
};

function randomArrayPosition(array) {
  const randomPosition = Math.round(Math.random() * (array.length - 1));
  return randomPosition;
}

function createLetter() {
  generateLetter.innerHTML = '';

  if (letterTextInput.value.trim() === '') {
    const newSpan = document.createElement('span');
    newSpan.innerText = 'Por favor, digite o conteúdo da carta!';
    generateLetter.appendChild(newSpan);
  } else {
    const wordsArray = letterTextInput.value.split(' ');
    letterCounter.innerText = wordsArray.length;

    for (let index = 0; index < wordsArray.length; index += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = wordsArray[index];

      newSpan.classList.add(allClass.styleGroup[randomArrayPosition(allClass.styleGroup)]);
      newSpan.classList.add(allClass.sizeGroup[randomArrayPosition(allClass.sizeGroup)]);
      newSpan.classList.add(allClass.matrixGroup[randomArrayPosition(allClass.matrixGroup)]);
      newSpan.classList.add(allClass.colorGroup[randomArrayPosition(allClass.colorGroup)]);

      newSpan.addEventListener('click', function() {
        newSpan.classList.remove('rotate');
        newSpan.classList.remove('glass');

        newSpan.classList.add('rotate');
        newSpan.classList.add('glass');
      });

      newSpan.classList.add('rotate');

      generateLetter.appendChild(newSpan);
    }
  }
}

createLetterBtn.addEventListener('click', createLetter);