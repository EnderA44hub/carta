// ¡¡¡CAMBIA ESTA FECHA POR LA QUE TÚ QUIERAS!!!
const FECHA_REVELAR = new Date("2025-12-13 00:00:00").getTime(); 
// Ejemplos: Navidad → "2025-12-25 00:00:00"
// San Valentín → "2026-02-14 09:00:00"
// Aniversario → "2025-08-15 20:00:00"

const countdownEl = document.getElementById('countdown');
const letterEl = document.getElementById('letter');

function actualizar() {
  const ahora = new Date().getTime();
  const diferencia = FECHA_REVELAR - ahora;

  if (diferencia <= 0) {
    // ¡Ya llegó la fecha! Mostrar carta y ocultar contador
    countdownEl.classList.add('hidden');
    letterEl.classList.remove('hidden');
    return;
  }

  // Calcular tiempo restante
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = dias.toString().padStart(2, '0');
  document.getElementById('hours').textContent = horas.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutos.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = segundos.toString().padStart(2, '0');
}

setInterval(actualizar, 1000);
actualizar(); // Primera ejecución inmediata
