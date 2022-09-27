var Presentacion="<div class='presentacion' id='presentacion'><h1>Presentación</h1><article><img src='https://www.mediacommerce.ec/wp-content/uploads/2020/12/computo-tecnologia-panorama.jpg' alt='Imagen sobre la tecnologia' height='200' width='300'><p>La tecnología es la llave que mejora nuestra sociedad día con día, y ser parte del proceso de innovación es lo que me motiva a seguir aprendiendo diversos lenguajes de programación asi como, sobre el mundo de las redes neuronales y sus aplicaciones en el mundo.</p></article></div>";
 
var Experiencia="<div class='experiencia' id='experiencia'><h1>Experiencia académica</h1><ul><li><h1>Universidad del Magdalena</h1><p>Actualmente curso el 6 semestre de ingeniería de sistemas en la universidad del magdalena</p><a id='LinksPaginas' href='https://www.unimagdalena.edu.co'>Pagina de la universidad</a></li><li><h1>Cursando un certificado de Oracle ONE next education</h1><p>Actualmente estoy en asistiendo a un curso de 6 meses de duración, con el cual obtendré un certificado de Oracle</p><a id='LinksPaginas' href='https://app.aluracursos.com/degree/certificate/f8926160-6c4b-47fd-832f-9c77dc45d987'>Certificación</a></li><li><h1>Aspiración laboral</h1><p>Si bien es verdad que no cuento con experiencia profesional, me considero capaz de mejorar y aprender a diario, por lo que esta es para mí, una oportunidad única de poner en práctica todo lo aprendido durante mi carrera profesional.</p><a id='LinksPaginas' href='https://www.unimagdalena.edu.co'>Pagina de la universidad</a></li><li><h1>Calculadora en Python</h1><p>Es una calculadora programada en lenguaje Python utilizando la librería tkinter con la cual diseñe la interfaz que realiza operaciones básicas.</p><a id='LinksPaginas' href='https://www.unimagdalena.edu.co'>Pagina de la universidad</a></li><li><h1>Juego Snake en Python</h1><p>El icónico juego de la serpiente lo realice en Python con la librería Tkinter con la cual hice la interfaz y también incluye un sistema de puntuación.</p><a id='LinksPaginas' href='https://www.unimagdalena.edu.co'>Pagina de la universidad</a></li></ul></div>";

var Tabla="<div class='tabla' id='tabla'><h1>Habilidades</h1><table><thead><tr><th>Habilidades</th><th>Nivel</th></tr></thead><tbody><tr><td>Python</td><td>8</td></tr><tr><td>JavaScript</td><td>7</td></tr><tr><td>Java</td><td>7</td></tr><tr><td>Html</td><td>8</td></tr><tr><td>Ingles</td><td>7</td></tr><tr><td>SLQ</td><td>7</td></tr><tr><td>Git</td><td>7</td></tr><tr><td>C++</td><td>7</td></tr><tr><td>Compañerismo</td><td>9</td></tr></tbody></table></div>";

const botonSubir=document.getElementById('subir');



function Escribir_html(contenedor,texto){
    const Padre=document.getElementById(contenedor);
    Padre.insertAdjacentHTML('beforeend',texto);
}

function EnviarCorreo(){
    if(document.getElementById('asunto').value!="" && document.getElementById('correoElectronico').value!="" && document.getElementById('mensaje').value!=""){
        alert("ASUNTO: "+document.getElementById('asunto').value+"\nCORREO: "+document.getElementById('correoElectronico').value+"\nMENSAJE: "+ document.getElementById('mensaje').value);
    }
}

Escribir_html('Contenido',Presentacion);
Escribir_html('Contenido',Experiencia);
Escribir_html('Contenido',Tabla);
botonSubir.addEventListener('click',EnviarCorreo,true);
