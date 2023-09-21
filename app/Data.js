import Joey from '../public/Img/Joey.png'
import Chandler from '../public/Img/Chandler.png'
import Phoebe from '../public/Img/Pheobe.png'
import Cat from '../public/Img/Cat.png'
import Baby from '../public/Img/Baby.png'
import Bride from '../public/Img/Bride.png'

export const quiz = {
    
    totalQuestions: 6,

    questions: [
      {
        id: 1,
        question: 'What’s the name of Joey’s penguin?',
        answers: ['Snowflake', 'Waddle', 'Huggsy', 'Bobber'],
        correctAnswer: 'Huggsy',
        img: Joey,
      },
      {
        id: 2,
        question: 'What is Chandler’s middle name?',
        answers: ['Muriel', 'Jason', 'Kim', 'Zachary'],
        correctAnswer: 'Muriel',
        img: Chandler,
      },
      {
        id: 3,
        question: 'What is the name of Phoebe’s alter-ego?',
        answers: ['Phoebe Neeby', 'Monica Bing', 'Regina Phalange', 'Elaine Benes'],
        correctAnswer: 'Regina Phalange',
        img: Phoebe,
      },
      {
        id: 4,
        question: 'What is the name of Rachel’s Sphynx cat?',
        answers: ['Baldy', 'Mrs. Whiskerson', 'Sid', 'Felix'],
        correctAnswer: 'Mrs. Whiskerson',
        img: Cat,
      },
      {
        id: 5,
        question: `What was the name of Ross and Rachel's daughter?`,
        answers: ['Emma', 'Elizabeth', 'Viviane', 'Emily'],
        correctAnswer: 'Emma',
        img: Baby,
      },
      {
        id: 6,
        question: 'Who walks Phoebe down the aisle?',
        answers: ['Ross', 'Chandler', 'Gunther', 'Joey'],
        correctAnswer: 'Chandler',
        img: Bride,
      },
    ],
  };
  