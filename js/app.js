var sliderImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('.left');
var arrowRight = document.querySelector('.right');
var current = 0;

function reset() {
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlide() {
  reset()
  sliderImages[0].style.display = 'block';
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

arrowLeft.addEventListener('click', function() {
  if (current === 0) {
    current = 1;
  }
  slideLeft();
});

arrowRight.addEventListener('click', function() {
  if (current === sliderImages.length -1) {
    current = 1;
  }
  slideRight();
});

startSlide();



var modal = document.getElementById('idmodal');
var btn = document.getElementById('iduser');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function openmodal(modalbook) {
  var i;
  var b = document.querySelectorAll('.idbook');
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "block";
  }
  document.getElementById('modalbook').style.display = "block";
}

var m = document.getElementById('modalbook');
var s = document.getElementsByClassName('close')[1];

s.onclick = function() {
  m.style.display = "none";
}



function openTab(TabName) {
  var i;
  var x = document.getElementsByClassName("service-info");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(TabName).style.display = "flex";  
}



