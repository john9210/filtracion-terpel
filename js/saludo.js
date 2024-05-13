        // Aquí copia el código JavaScript proporcionado
        const horaActual = new Date().getHours();

        if (horaActual >= 6 && horaActual < 12) {
            document.getElementById('saludo').textContent = '¡Buenos días!';
        } else if (horaActual >= 12 && horaActual < 18) {
            document.getElementById('saludo').textContent = '¡Buenas tardes!';
        } else {
            document.getElementById('saludo').textContent = '¡Buenas noches!';
        }