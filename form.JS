document.getElementById('promedioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    let calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    
    if (!isNaN(calificacion1) && !isNaN(calificacion2)) {
        let promedio = (calificacion1 + calificacion2) / 2;
        document.getElementById('resultado').innerHTML = `El promedio es: ${promedio}`;
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, ingrese valores válidos.';
    }
});
