// CAMBIA LA FECHA AQUÍ (formato: "2025-12-13 00:00:00")
const FECHA_REVELAR = new Date("2025-12-13 00:00:00").getTime();

const countdownEl = document.getElementById('countdown');
const letterEl = document.getElementById('letter');
let revelado = false;

function actualizar() {
  const ahora = new Date().getTime();
  const diferencia = FECHA_REVELAR - ahora;

  if (diferencia <= 0 && !revelado) {
    // ¡Llegó el momento!
    countdownEl.style.opacity = '0';
    setTimeout(() => {
      countdownEl.classList.add('hidden');
      letterEl.classList.remove('hidden');
      
      // Animación de entrada
      setTimeout(() => {
        letterEl.style.opacity = '1';
        letterEl.style.transform = 'translateY(0)';
      }, 100);

      // Confetti rosa y mágico
      const duration = 4 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 90,
          spread: 55,
          origin: { x: 0.5, y: 0.8 },
          colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }, 600);

    revelado = true;
    return;
  }

  // Contador normal
  const dias = Math.floor(diferencia / (1000*60*60*24));
  const horas = Math.floor((diferencia % (1000*60*60*24)) / (1000*60*60));
  const minutos = Math.floor((diferencia % (1000*60*60)) / (1000*60));
  const segundos = Math.floor((diferencia % (1000*60)) / 1000);

  document.getElementById('days').textContent = String(dias).padStart(2, '0');
  document.getElementById('hours').textContent = String(horas).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutos).padStart(2, '0');
  document.getElementById('seconds').textContent = String(segundos).padStart(2, '0');
}

setInterval(actualizar, 1000);
actualizar();
