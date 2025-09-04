document.addEventListener('DOMContentLoaded', () => {

  const startBtn=document.getElementById('start-btn');
  const nextBtn=document.getElementById('next-btn');
  const restartBtn=document.getElementById('restart-btn');
  const questionContainer=document.getElementById('question-container');
  const questionText = document.getElementById("question-text" );
  const choicesList=document.getElementById('choices-list');
  const resultContainer=document.getElementById('result-container');
  const scoreDisplay=document.getElementById('score');
  
  const questions=[
    {
      question:"What is the capital of France?",
      choices:["Berlin","Madrid","Paris","Rome"],
      answer:"Paris"
    },
    {
      question:"What is 2 + 2?",
      choices:["3","4","5","6"],
      answer:"4"
    },
    {
      question:"What is the largest planet in our solar system?",
      choices:["Earth","Jupiter","Mars","Saturn"],
      answer:"Jupiter"
    },
    { question:"What is the capital of Japan?",
      choices:["Beijing","Seoul","Tokyo","Bangkok"],
      answer:"Tokyo"
    }
  ]

  let currentQuestionIndex=0;
  let score=0;

  startBtn.addEventListener('click',startQuiz);
  nextBtn.addEventListener('click',()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
      showQuestion();
    }
    else{
      showResult();
    }
  });
  restartBtn.addEventListener('click',()=>{
    currentQuestionIndex=0;
    score=0;
    startQuiz();
  });
  
  function startQuiz(){
    startBtn.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion();
  }

  function showQuestion(){
    nextBtn.classList.add('hidden');
    questionText.textContent=questions[currentQuestionIndex].question;
    choicesList.innerHTML=''; // Clear previous choices
    questions[currentQuestionIndex].choices.forEach(choice=>{
      const li=document.createElement('li');
      li.textContent=choice;
      li.addEventListener('click',() => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice){
    const correctAnswer=questions[currentQuestionIndex].answer;
    if(choice===correctAnswer){
      score++;
    }
    nextBtn.classList.remove('hidden');
  }

  function showResult(){
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreDisplay.textContent=`${score} out of ${questions.length}`;
  }
});