let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicadores = document.querySelector('.indicadores');
let dots = indicadores.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPositon = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector('.list .item.active');
  itemOld.classList.remove('active');

  let dotsOld = indicadores.querySelector('ul li.ativo');
  dotsOld.classList.remove('ativo');
  dots[active].classList.add('ativo');

  indicadores.querySelector('.number').innerHTML = active + 1;

}

nextButton.onclick = () => {
  list.style.setProperty('--calcular',1);

  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider()
  items[active].classList.add('active');
}

prevButton.onclick =  ()=> {
  list.style.setProperty('--calcular',-1);

  active = active - 1 < firstPositon ? lastPosition : active- 1;
  setSlider()
  items[active].classList.add('active');
}


  let startX = 0;
  let endX = 0;
  let currentIndex = 0;
  const listaItens = document.querySelector(".list");
  const itens = document.querySelectorAll(".list .item");
  const indicadoress = document.querySelectorAll(".indicadores ul li");

  document.addEventListener("DOMContentLoaded", () => {
    atualizarCarrossel();

    listaItens.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    listaItens.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
    });

    listaItens.addEventListener("touchend", () => {
      if (startX > endX + 50) {
        nextSlide();
      } else if (startX < endX - 50) {
        prevSlide();
      }
    });

    listaItens.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    });

    function nextSlide() {
      itens[currentIndex].classList.remove("active");
      indicadoress[currentIndex].classList.remove("ativo");
      currentIndex = (currentIndex + 1) % itens.length;
      atualizarCarrossel();
    }

    function prevSlide() {
      itens[currentIndex].classList.remove("active");
      indicadoress[currentIndex].classList.remove("ativo");
      currentIndex = (currentIndex - 1 + itens.length) % itens.length;
      atualizarCarrossel();
    }

    function atualizarCarrossel() {
      itens[currentIndex].classList.add("active");
      indicadoress[currentIndex].classList.add("ativo");
    }
  });

