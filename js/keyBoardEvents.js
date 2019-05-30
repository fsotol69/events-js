class keyBoardEvents {
  constructor(divContainer) {
    this.container = divContainer;
    this.buttonDIV = document.createElement('div');
    this.buttonDIV.id = 'tests';
    this.buttonDIV.tabIndex = 1;
    this.buttonDIV.addEventListener('focusis', this.events);
    this.container.appendChild(this.buttonDIV);
  }

  events() {
    this.buttonDIV.className = 'red';
  }
}
