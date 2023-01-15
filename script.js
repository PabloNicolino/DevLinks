function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light');

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assests/avatar-light.png');
    img.setAttribute("alt", 'Foto do Pablo de Paula sorrindo de braço cruzado sorrindo e camisa preta, barba e fundo azul e preto');
  } else {
    // se tiver sem light, manter a imagem dark
    img.setAttribute('src', './assests/avatar-dark.png');
    img.setAttribute("alt", 'Foto do Pablo de Paula sorrindo de braço cruzado sorrindo e camisa preta, barba e fundo amarelo');
  }

}
