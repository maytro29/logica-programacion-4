function generarFibonacci(n) {
    const serie = [0, 1];
    for (let i = 2; i < n; i++) {
      serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie.slice(0, n);
  }
  
  function resultadoSerie(serie) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = "Serie de Fibonacci: " + serie.join(', ');
  }
  
  function calcularFibonacci() {
    const numeroInput = document.getElementById('numero');
    const numero = parseInt(numeroInput.value, 10);
  
    if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
      const serieFibonacci = generarFibonacci(numero);
      resultadoSerie (serieFibonacci);
      numeroInput.value = "";
    } else {
      alert("Ingresa un número valido");
      numeroInput.value = "";
    }
  }
  