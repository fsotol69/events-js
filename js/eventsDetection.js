class eventsDetection {
  constructor(divContainer) {
    this.container = divContainer;
    // AUDIO
    this.audio = document.createElement('AUDIO');
    this.audio.id = 'reproductor';
    this.audio.setAttribute('src', 'https://bcncodes.surge.sh/Batty-McFaddin-slower.mp3');
    this.audio.addEventListener(
      'pause',
      this.alertPausa
    );
    this.audio.controls = 'true';
    // this.audio.onpause = () => {
    //     alert('El formulario ha sido enviado!');
    // }
    this.container.appendChild(this.audio);
  }

  alertPausa(e) {
    e.preventDefault();
    alert('El reproductor está en PAUSA!')
  }
}
