/*<!---------------------------------------------------------------
# Version sweetalert2
-------------------------------------------------------------->*/
function version() {

  swal({
    title: 'Version',
    text: 'Mensaje de texto',
    html: '<p>* Portfolio - v3.9.0</p>\n<p>* Template URL: https://rripollesg.github.io/portfolio</p>\n * Author: Raul Ripolles',
  });
}
console.log("* Portfolio - v3.9.0\n* Template URL: https://rripollesg.github.io/porfolio\n* Author: Raul Ripolles")

/*<!---------------------------------------------------------------
# Canvas
-------------------------------------------------------------->*/
/*let resizeReset = function() {
	w = canvasBody.width = window.innerWidth;
	h = canvasBody.height = window.innerHeight;
}

const opts = {
	particleColor: "rgb(200,200,200)",
	lineColor: "rgb(200,200,200)",
	particleAmount: 30,
	defaultSpeed: 1,
	variantSpeed: 1,
	defaultRadius: 2,
	variantRadius: 2,
	linkRadius: 200,
};

window.addEventListener("resize", function(){
	deBouncer();
});

let deBouncer = function() {
    clearTimeout(tid);
    tid = setTimeout(function() {
        resizeReset();
    }, delay);
};

let checkDistance = function(x1, y1, x2, y2){
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function(point1, hubs){
	for (let i = 0; i < hubs.length; i++) {
		let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
		let opacity = 1 - distance / opts.linkRadius;
		if (opacity > 0) {
			drawArea.lineWidth = 0.5;
			drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
			drawArea.beginPath();
			drawArea.moveTo(point1.x, point1.y);
			drawArea.lineTo(hubs[i].x, hubs[i].y);
			drawArea.closePath();
			drawArea.stroke();
		}
	}
}

Particle = function(xPos, yPos){
	this.x = Math.random() * w;
	this.y = Math.random() * h;
	this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
	this.directionAngle = Math.floor(Math.random() * 360);
	this.color = opts.particleColor;
	this.radius = opts.defaultRadius + Math.random() * opts. variantRadius;
	this.vector = {
		x: Math.cos(this.directionAngle) * this.speed,
		y: Math.sin(this.directionAngle) * this.speed
	};
	this.update = function(){
		this.border();
		this.x += this.vector.x;
		this.y += this.vector.y;
	};
	this.border = function(){
		if (this.x >= w || this.x <= 0) {
			this.vector.x *= -1;
		}
		if (this.y >= h || this.y <= 0) {
			this.vector.y *= -1;
		}
		if (this.x > w) this.x = w;
		if (this.y > h) this.y = h;
		if (this.x < 0) this.x = 0;
		if (this.y < 0) this.y = 0;
	};
	this.draw = function(){
		drawArea.beginPath();
		drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		drawArea.closePath();
		drawArea.fillStyle = this.color;
		drawArea.fill();
	};
};

function setup(){
	particles = [];
	resizeReset();
	for (let i = 0; i < opts.particleAmount; i++){
		particles.push( new Particle() );
	}
	window.requestAnimationFrame(loop);
}

function loop(){
	window.requestAnimationFrame(loop);
	drawArea.clearRect(0,0,w,h);
	for (let i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].draw();
	}
	for (let i = 0; i < particles.length; i++){
		linkPoints(particles[i], particles);
	}
}

const canvasBody = document.getElementById("canvas"),
drawArea = canvasBody.getContext("2d");
let delay = 200, tid,
rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();*/
/*<!---------------------------------------------------------------
# Fichero segun idioma navegador
-------------------------------------------------------------->*/

// Detecta el idioma del navegador
var idiomaNavegador = navigator.language || navigator.userLanguage;

// Define las URLs para cada idioma
var urlsPorIdioma = {
  'es': 'https://rripollesg.github.io/portfolio/',
  'en': 'https://rripollesg.github.io/portfolio/EN',
  'it': 'https://rripollesg.github.io/portfolio/'
};

// Función para redirigir según el idioma
function redirigirSegunIdioma(idioma) {
  // Comprueba si ya se ha redirigido previamente
  if (localStorage.getItem('idiomaRedirigido') !== idioma) {
    // Guarda el idioma en localStorage y redirige
    localStorage.setItem('idiomaRedirigido', idioma);
    window.location.href = urlsPorIdioma[idioma] || urlsPorIdioma['es']; // Redirige a español por defecto si el idioma no está definido
  }
}

// Ejecuta la redirección solo si no se ha hecho previamente
if (!localStorage.getItem('idiomaRedirigido')) {
  if (idiomaNavegador.startsWith('es')) {
    redirigirSegunIdioma('es');
  } else if (idiomaNavegador.startsWith('en')) {
    redirigirSegunIdioma('en');
  } else if (idiomaNavegador.startsWith('it')) {
    redirigirSegunIdioma('it');
  } else {
    // Si el idioma no es ninguno de los anteriores, puedes elegir una acción por defecto
    redirigirSegunIdioma('es'); // Por ejemplo, redirigir a la versión en español
  }
}

/*<!---------------------------------------------------------------
# Slider
-------------------------------------------------------------->
<script>
    $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
</script>*/
