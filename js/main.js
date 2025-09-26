var actual = 1;

function cambioimagen(numero) {
  const imagenprincipal = document.getElementById("diagrama1");
  const titulo = document.getElementById("titulo");

  actual = numero;

  if (numero === 1) {
    imagenprincipal.src = "img/1.jpg";
    titulo.innerText = "diagrama1";
  } else if (numero === 2) {
    imagenprincipal.src = "img/2.jpg";
    titulo.innerText = "diagrama2";
  } else if (numero === 3) { 
    imagenprincipal.src = "img/3.jpg";
    titulo.innerText = "diagrama3";
  } else if (numero === 4) {
    imagenprincipal.src = "img/4.png";
    titulo.innerText = "diagrama4";
  }
}

const imagenprincipal = document.getElementById("diagrama1");
const titulo = document.getElementById("titulo");
const adelante = document.getElementById("adelante");
const atras = document.getElementById("atras");

adelante.onclick = () => {
  if (actual == 1) {
    actual = 2;
    imagenprincipal.src = "img/2.jpg";
    titulo.innerText = "diagrama2";
  } else if (actual == 2) {
    actual = 3;
    imagenprincipal.src = "img/3.jpg";
    titulo.innerText = "diagrama3";
  } else if (actual == 3) {
    actual = 4;
    imagenprincipal.src = "img/4.png";
    titulo.innerText = "diagrama4";
  } else if (actual == 4) {
    actual = 1; 
    imagenprincipal.src = "img/1.jpg";
    titulo.innerText = "diagrama1";
  }
};

atras.onclick = () => {
  if (actual == 1) {
    actual = 4;
    imagenprincipal.src = "img/4.png";
    titulo.innerText = "diagrama4";
  } else if (actual == 4) {
    actual = 3;
    imagenprincipal.src = "img/3.jpg";
    titulo.innerText = "diagrama3";
  } else if (actual == 3) {
    actual = 2;
    imagenprincipal.src = "img/2.jpg";
    titulo.innerText = "diagrama2";
  } else if (actual == 2) {
    actual = 1;
    imagenprincipal.src = "img/1.jpg"; 
    titulo.innerText = "diagrama1";
  }
};
