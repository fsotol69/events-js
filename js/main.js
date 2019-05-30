let ejercicio1 = () => {
  let container = document.getElementById('ejercicio1');
  if (container.children.length < 1) {
    let playGame = new pickAball(container);
    playGame.createEntities();
    playGame.play();
  }
};
let ejercicio2 = () => {
  let container = document.getElementById('ejercicio2');
  if (container.children.length < 1) {
    let keyEvents = new keyBoardEvents(container);
  }
  console.log('ejercicio 2 en ejecución');
};
let ejercicio3 = () => {
  console.log('ejercicio 3 en ejecución');
};
let ejercicio4 = () => {
  console.log('ejercicio 4 en ejecución');
};
let ejercicio5 = () => {
  console.log('ejercicio 5 en ejecución');
};

document.getElementById('ex1').addEventListener('click', ejercicio1);
document.getElementById('ex2').addEventListener('click', ejercicio2);
document.getElementById('ex3').addEventListener('click', ejercicio3);
document.getElementById('ex4').addEventListener('click', ejercicio4);
document.getElementById('ex5').addEventListener('click', ejercicio5);

let playPickABall = () => {
  let index = Math.floor(Math.random() * arrayCircles.length);
  if (candidateCircle !== undefined) {
    candidateCircle.style.visibility = 'hidden';
    candidateCircle.className = '';
  }
  candidateCircle = arrayCircles[index];
  candidateCircle.style.visibility = 'visible';
  candidateCircle.className = 'target';
};

function initInterval_1() {
  intervalExecise1 = setInterval(playPickABall, 3000);
}

function stopInterval_1() {
  clearInterval(intervalExecise1);
}
