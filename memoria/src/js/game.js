const grid = document.querySelector('.grid');
const headerJogo = document.querySelector('.jogador');
const pontuacao = document.querySelector('.pont');
let pont = 0;

const personagens = [
  'yuta',
  'gojo',
  'todo',
  'megumi',
  'nanami',
  'panda',
  'sukuna',
  'maki',
  'nobara',
  'utahime',
];

const createElement = (tag, classe) => {
  const elemento = document.createElement(tag);
  elemento.className = classe;
  return elemento;
}

let primeiroCard = '';
let segundoCard = '';

const finalizarJogo = () => {
    setTimeout(() => {
  const cardsDesativados = document.querySelectorAll('.desativarCard');

  if (cardsDesativados.length === 20) {
    clearInterval(this.loop);
  }
}, 500);
  
}

const checarCards = () => {
  const primeiroPersonagem = primeiroCard.getAttribute('data-personagem');
  const segundoPersonagem = segundoCard.getAttribute('data-personagem');

  if (primeiroPersonagem === segundoPersonagem) {

    primeiroCard.firstChild.classList.add('desativarCard');
    segundoCard.firstChild.classList.add('desativarCard');

    primeiroCard = '';
    segundoCard = '';

    pont +=100
    pontuacao.innerHTML = pont

    finalizarJogo();

  } else {
    setTimeout(() => {

      primeiroCard.classList.remove('revelarCard');
      segundoCard.classList.remove('revelarCard');

      primeiroCard = '';
      segundoCard = '';
      
     
       if (pont == 0) {
        
       } else {
        pont -=50
      pontuacao.innerHTML = pont
       } 
    }, 500);
  }

}

const revelarCard = ({ target }) => {

  if (target.parentNode.className.includes('revelarCard')) {
    return;
  }

  if (primeiroCard === '') {

    target.parentNode.classList.add('revelarCard');
    primeiroCard = target.parentNode;

  } else if (segundoCard === '') {

    target.parentNode.classList.add('revelarCard');
    segundoCard = target.parentNode;

    checarCards();

  }
}

const createCard = (personagem) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${personagem}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revelarCard);
  card.setAttribute('data-personagem', personagem)

  return card;
}

const carregarJogo = () => {
  const personagensDuplicados = [...personagens, ...personagens];

  const personagensEmbaralhados = personagensDuplicados.sort(() => Math.random() - 0.5);

  personagensEmbaralhados.forEach((personagem) => {
    const card = createCard(personagem);
    grid.appendChild(card);
  });
}





window.onload = () => {
  headerJogo.innerHTML = localStorage.getItem('jogador');
 
  carregarJogo();
}