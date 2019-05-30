class keyBoardEvents {
  constructor(divContainer) {
    this.container = divContainer;
    this.buttonDIV = document.createElement('div');
    //this.buttonDIV.id = 'tests';
    this.buttonDIV.tabIndex = 1;
    this.buttonDIV.addEventListener('focusin', this.keyEvents.bind(this));
    this.container.appendChild(this.buttonDIV);
  }

  keyEvents() {
    this.buttonDIV.addEventListener('keydown', this.listenKeys.bind(this));
  }

  listenKeys(e){
    console.log(e.keyCode);
    if (e.keyCode == 82) {
      //R key was pressed
      this.buttonDIV.className = 'red';
    }
    if (e.keyCode == 89) {
      //Y key was pressed
      this.buttonDIV.className = 'yellow';
    }
    if (e.keyCode == 87) {
      //W key was pressed
      this.buttonDIV.className = 'white';
    }
  }
}
