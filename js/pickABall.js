class pickAball {
  constructor(divContainer) {
    if (divContainer.chilNodes !== undefined) divContainer.innerHTML = '';
    this.container = divContainer;
    this.interval = undefined;
    this.candidateCircle = undefined;
    this.arrayCircles = [];
  }
  play() {
    let newCircle = this.selectNewCircle();
    console.log(typeof newCircle);
    if (this.candidateCircle !== undefined) {
      this.candidateCircle.className = '';
      this.candidateCircle.removeEventListener('click', this.finish.bind(this));
      this.candidateCircle.style.visibility = 'hidden';
    }
    this.candidateCircle = newCircle;
    console.log(typeof this.candidateCircle);
    this.candidateCircle.addEventListener('click', this.finish.bind(this));
    this.candidateCircle.className = 'target';
    this.candidateCircle.style.visibility = 'visible';
    this.interval = setTimeout(this.play.bind(this), 3000);
  }
  finish() {
    clearTimeout(this.interval);
    this.container.innerHTML = '';
  }
  selectNewCircle() {
    let index = Math.floor(Math.random() * this.arrayCircles.length);
    let nuevoCirculo = this.arrayCircles[index];
    console.log('tipo : ' + typeof nuevoCirculo);
    return nuevoCirculo;
  }
  createEntities = () => {
    this.container.style.backgroundColor = '#fff';
    this.container.style.width = '310px';
    this.container.style.height = '310px';
    this.container.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      let contentDiv = document.createElement('div');
      for (let j = 1; j <= 3; j++) {
        let circleDiv = document.createElement('div');
        circleDiv.id = '' + (i * 3 + j);
        circleDiv.style.visibility = 'hidden';
        contentDiv.appendChild(circleDiv);
        this.arrayCircles.push(circleDiv);
      }
      this.container.appendChild(contentDiv);
    }
  };
}
