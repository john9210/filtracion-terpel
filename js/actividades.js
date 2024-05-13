/*Arrastrar y soltar*/

function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event, imageId) {
    event.dataTransfer.setData("text", imageId);
  }

  function drop(event, dropzoneId) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var dropzone = event.target;

    if (dropzoneId === 'region1' && data === 'image1') {
      dropzone.appendChild(document.getElementById(data));
    } else if (dropzoneId === 'region2' && data === 'image2') {
      dropzone.appendChild(document.getElementById(data));
    } else if (dropzoneId === 'region3' && data === 'image3') {
      dropzone.appendChild(document.getElementById(data));
    } else if (dropzoneId === 'region4' && data === 'image4') {
      dropzone.appendChild(document.getElementById(data));
    } else if (dropzoneId === 'region5' && data === 'image5') {
      dropzone.appendChild(document.getElementById(data));
    }
  }



// funsion de respuetas tema 3-4-1


var contadorIntentos = 2; // Inicializa el contador de intentos en 0

// Define las preguntas y respuestas en un objeto
const preguntasYRespuestas = [
    { pregunta: "Pregunta 1", respuesta: 4 },
    { pregunta: "Pregunta 2", respuesta: 1 },
    { pregunta: "Pregunta 3", respuesta: 3 },
    { pregunta: "Pregunta 4", respuesta: 1 },
    // Agrega más preguntas y respuestas aquí
];

$(document).ready(function () {
    $("#typicalday").submit(function (event) {
        event.preventDefault();

        const $selects = $("select[name^='survey-']");

        const resultados = preguntasYRespuestas.map((pregunta, index) => {
            const $select = $selects.eq(index);
            $select.removeClass("is-invalid is-valid");
            const userAnswer = parseInt($select.val());
            const correcta = userAnswer === pregunta.respuesta;
            $select.addClass(correcta ? "is-valid" : "is-invalid");
            return { pregunta: pregunta.pregunta, correcta };
        });

        contadorIntentos++;

        $('#correct, #fail, #Contador').show();
        $('#Contador').text('Intentos: ' + contadorIntentos);

        const respuestasCorrectas = resultados.filter(result => result.correcta).length;
        $('#correct').text('Correctas: ' + respuestasCorrectas);
        $('#fail').text('Incorrectas: ' + (preguntasYRespuestas.length - respuestasCorrectas));

        // Mostrar un mensaje de resultado para cada pregunta
        resultados.forEach((result, index) => {
            const mensaje = result.correcta ? 'Correcto' : 'Falla';
            const $mensajeDiv = $('<div>').addClass(result.correcta ? 'text-success' : 'text-danger').text(`Pregunta ${index + 1}: ${mensaje}`);
            $('#resultados').append($mensajeDiv);
        });
    });
});



    
    // Uncomment this line if you want to display the solution element
    // $("#solutiontypicalday").css("display", "block");

// Actividad 2.2 respuestas correctas 

function verificarRespuestas() {
	var respuestas = {
		campo1: "organización",
		campo2: "12,000",
		campo3: "servicios",
		campo4: "obtener",
		campo7: "agua",
		campo9: "ducto",
    campo10: "2” y 6”",
    campo11: "máxima",
    campo12: "mensual",
    campo13: "31-12-2020",
    campo14: "1588,1599,15XX",
    campo15: "Robustez",
    campo16: "electrostática",
    campo17: "campo"
	};

	var respuestasCorrectas = true;

	for (var campoId in respuestas) {
		var campoRespuesta = document.getElementById(campoId).value.toLowerCase();
		if (campoRespuesta !== respuestas[campoId]) {
			respuestasCorrectas = false;
			break;
		}
	}

	if (respuestasCorrectas) {
		document.getElementById("resultado").innerHTML = "¡Respuestas correctas!";
	} else {
		document.getElementById("resultado").innerHTML = "¡Algunas respuestas son incorrectas! Por favor, verifica tus respuestas.";
	}
}



// tema-7-6
const correctAnswers = ["A", "D", "C", "B"]; // Respuestas correctas para cada pregunta

const quizForm = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");

quizForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userAnswers = [
        quizForm.querySelector('input[name="question1"]:checked'),
        quizForm.querySelector('input[name="question2"]:checked'),
        quizForm.querySelector('input[name="question3"]:checked'),
        quizForm.querySelector('input[name="question4"]:checked')
    ];

    let allAnswered = true; // Variable para verificar si todas las preguntas están respondidas

    userAnswers.forEach(function(answer) {
        if (!answer) {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        resultDiv.innerHTML = "Por favor, responde todas las preguntas.";
        return; // No verificamos las respuestas si no se han respondido todas las preguntas.
    }

    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i].value === correctAnswers[i]) {
            score++;
        }
    }

    resultDiv.innerHTML = `Tu puntuación es: ${score} de ${correctAnswers.length}`;
});
