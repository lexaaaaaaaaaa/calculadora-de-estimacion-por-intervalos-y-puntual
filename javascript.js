// script.js
const nInput = document.getElementById('n');
const sumaInput = document.getElementById('suma');
const calcularButton = document.getElementById('calcular');
const mediaSpan = document.getElementById('media');

calcularButton.addEventListener('click', () => {
  const n = parseInt(nInput.value);
  const suma = parseFloat(sumaInput.value);

  if (n > 0) {
    const media = suma / n;
    mediaSpan.textContent = media.toFixed(2); // Muestra la media con dos decimales
  } else {
    alert("El tamaño de la muestra debe ser mayor que 0.");
  }
});




function calculateEstimation() {
    // Obtener los valores de los inputs
    const mean = parseFloat(document.getElementById('mean').value);
    const stdDev = parseFloat(document.getElementById('stdDev').value);
    const sampleSize = parseInt(document.getElementById('sampleSize').value);
    const confidenceLevel = parseFloat(document.getElementById('confidenceLevel').value);
    const zValue = parseFloat(document.getElementById('zValue').value);

    // Cálculo de la estimación puntual
    const pointEstimate = mean;

    // Cálculo de la estimación por intervalo
    const zScore = getZScore(confidenceLevel);
    const marginOfError = zScore * (stdDev / Math.sqrt(sampleSize));
    const lowerBound = mean - marginOfError;
    const upperBound = mean + marginOfError;

    // Mostrar los resultados
    
    document.getElementById('intervalEstimate').innerText = `Estimación por Intervalo: (${lowerBound.toFixed(2)}, ${upperBound.toFixed(2)})`;
}

// Función para obtener el puntaje Z basado en el nivel de confianza
function getZScore(confidenceLevel) {
    // Ejemplos comunes de puntajes Z para niveles de confianza:
    const zScores = {
        80: 1.28,
        85: 1.44,
        90: 1.645,
        95: 1.96,
        99: 2.576
    };
    return zScores[confidenceLevel] || 1.96; // Por defecto a 95% si no se encuentra el nivel de confianza
}