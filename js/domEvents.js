class domEvents {
  constructor(divContainer) {
    this.container = divContainer;
    // FORM
    this.form = document.createElement('form');
    this.form.id = 'contacte';
    this.form.method = 'post';
    // LABEL NOMBRE
    let labelName = document.createElement('label');
    labelName.innerHTML = 'Nombre:';
    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name = 'name';
    labelName.appendChild(inputName);
    this.form.appendChild(labelName);
    // BR
    let br1 = document.createElement('br');
    this.form.appendChild(br1);
    // LABEL CORREO
    let labelMail = document.createElement('label');
    labelMail.innerHTML = 'Correo:';
    let inputMail = document.createElement('input');
    inputMail.type = 'text';
    inputMail.name = 'mail';
    labelMail.appendChild(inputMail);
    this.form.appendChild(labelMail);
    // BR
    let br2 = document.createElement('br');
    this.form.appendChild(br2);
    // LABEL MENSAJE
    let labelMessage = document.createElement('label');
    labelMessage.innerHTML = 'Mensaje:';
    this.form.appendChild(labelMessage);
    let textMessage = document.createElement('textarea');
    textMessage.name = 'message';
    this.form.appendChild(textMessage);
    // BR
    let br3 = document.createElement('br');
    this.form.appendChild(br3);
    // SUBMIT BUTTON
    let submitButton = document.createElement('button');
    submitButton.innerHTML = 'Enviar';
    submitButton.addEventListener('onclick', this.enviar);
    this.form.appendChild(submitButton);

    // ADD EVENT LISTENER TO SUBMIT FORM
    //this.form.addEventListener('submit', alert('El formulario ha sido enviado!'));
    // ADD FORM TO CONTAINER
    this.container.appendChild(this.form);
  }

  enviar() {
    //this.form.submit();
    console.log('ejecutandose alert');
    alert('El formulario ha sido enviado!');
  }
}
