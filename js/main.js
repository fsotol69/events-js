// Exercise 1 variables
let intervalExecise1;
let candidateCircle;
let arrayCircles = [];
let container_ex1 = document.getElementById('ejercicio1');

let ejercicio1 = () => {
  console.log('ejercicio 1 en ejecución');

  // Creating Circles
  if (container_ex1.childNodes.length < 2) {
    container_ex1.style.backgroundColor = 'inherit';
    container_ex1.style.width = '310px';
    container_ex1.style.height = '310px';
    container_ex1.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      let contentDiv = document.createElement('DIV');
      for (let j = 1; j <= 3; j++) {
        let circleDiv = document.createElement('DIV');
        circleDiv.id = '' + (i * 3 + j);
        circleDiv.style.visibility = 'hidden';
        circleDiv.addEventListener('click', () => {
          stopInterval_1();
          alert('Has ganado !!');
        });
        contentDiv.appendChild(circleDiv);
        arrayCircles.push(circleDiv);
      }
      container_ex1.appendChild(contentDiv);
    }
    initInterval_1();
  }
};
let ejercicio2 = () => {
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

document.getElementById('ejercicio1').addEventListener('click', ejercicio1);
document.getElementById('ejercicio2').addEventListener('click', ejercicio2);
document.getElementById('ejercicio3').addEventListener('click', ejercicio3);
document.getElementById('ejercicio4').addEventListener('click', ejercicio4);
document.getElementById('ejercicio5').addEventListener('click', ejercicio5);

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
