const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado")

const preguntas = [
    {
        pregunta: "1. Cuál es la capital de Irán?",
        respuestas: {
          a: "Bagdad",
          b: "Teherán",
          c: "Islamabad"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "2. Cuál es la capital de Irak?",
        respuestas: {
          a: "Kuwait",
          b: "Dubai",
          c: "Bagdad"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "3. Cuál es la capital de Noruega?",
        respuestas: {
          a: "Roma",
          b: "Copenague",
          c: "Estocolmo",
          d: "Oslo"
        },
        respuestaCorrecta: "d"
    },
    {
        pregunta: "4. Cuál es la capital de Noruega?",
        respuestas: {
          a: "Roma",
          b: "Copenague",
          c: "Estocolmo",
          d: "Oslo"
        },
        respuestaCorrecta: "d"
    },
    {
        pregunta: "5. Cuál es la capital de Irán?",
        respuestas: {
          a: "Bagdad",
          b: "Teherán",
          c: "Islamabad"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "6. Cuál es la capital de Irak?",
        respuestas: {
          a: "Kuwait",
          b: "Dubai",
          c: "Bagdad"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "7. Cuál es la capital de Noruega?",
        respuestas: {
          a: "Roma",
          b: "Copenague",
          c: "Estocolmo",
          d: "Oslo"
        },
        respuestaCorrecta: "d"
    },
    {
        pregunta: "8. Cuál es la capital de Noruega?",
        respuestas: {
          a: "Roma",
          b: "Copenague",
          c: "Estocolmo",
          d: "Oslo"
        },
        respuestaCorrecta: "d"
    }
];


function mostrarTest(){
    const preguntasYrespuestas = [];
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}"></input>
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label>`

            );
        }
        preguntasYrespuestas.push(
            `<div class="cuestion">${preguntaActual.pregunta}</div>
            <div class="respuestas">${respuestas.join('')}</div>`
        )
    })
    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarTest();

function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;
    let respuestasIncorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

        if(respuestaElegida === preguntaActual.respuestaCorrecta){
            respuestasCorrectas++;
        }
        else{
            respuestasIncorrectas++;
        }
    });

    resultadoTest.innerHTML = 'respuestas correctas ' + respuestasCorrectas + ', respuestas incorrectas ' + respuestasIncorrectas + ', total de preguntas ' + preguntas.length;
}

botonRes.addEventListener('click', mostrarResultado);