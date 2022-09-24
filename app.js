var Presentacion="<h1>Presentación</h1><article><img src='https://www.mediacommerce.ec/wp-content/uploads/2020/12/computo-tecnologia-panorama.jpg' alt='Imagen sobre la tecnologia' height='100' width='150'>Soy un estudiante entusiasmado e interesado en crecer profesionalmente y busco un puesto donde pueda practicar y mejorar mis habilidades. Tengo conocimientos en varios lenguajes de programación con los que he realizado pequeños proyectos personales. Me apasiona seguir adquiriendo conocimiento en el área, por lo que constantemente tomo cursos y me informo sobre temas científicos de impacto de la actualidad</article>";
 
var Experiencia="<h1>Educacion y experiencia laboral</h1><ul><li><h1>Universidad del magdalena<h1><p>Actualmente curso el 6 semestre de ingenieria de sistemas en la universidad del magdalena</p><a href='https://www.unimagdalena.edu.co'>Pagina principal de la universidad</a></li><li><h1>Cursando un certificado de Oracle ONE next education<h1><p>Actualmente estoy en asistiendo a un curso de 6 meses de duracion, con el cual obtendre un certificado de Oracle</p><a href='https://www.oracle.com/co/education/oracle-next-education/'>Pagina principal de ONE Next Education</a></li><li><h1>Experiencia laboral<h1><p>No cuento con experiencia laboral, yo espero conseguir este trabajo para poder mejorar mis habilidades de programacion y asi cuando termine mi carrera este preparado para el mundo profesional, tambien quisiera ayudar a la institucion que me esta dando mi educacion.</p><a href='https://www.unimagdalena.edu.co'>Pagina principal de la universidad</a></li></ul>";

var Tabla="<div><h1>habilidades</h1><table><thead><tr><th>Habilidades</th><th>Nivel</th></tr></thead><tbody><tr><td>Python</td><td>8</td></tr><tr><td>JavaScript</td><td>7</td></tr><tr><td>Java</td><td>7</td></tr><tr><td>Html</td><td>7</td></tr><tr><td>Ingles</td><td>6</td></tr><tr><td>SLQ</td><td>6</td></tr><tr><td>Git</td><td>6</td></tr><tr><td>C++</td><td>7</td></tr><tr><td>Compañerismo</td><td>9</td></tr></tbody></table></div>";

const botonSubir=document.getElementById('subir');



function Escribir_html(contenedor,texto){
    const Padre=document.getElementById(contenedor);
    Padre.insertAdjacentHTML('beforeend',texto);
}

function EnviarCorreo(){
    if(document.getElementById('nombreApellido').value!="" && document.getElementById('correoElectronico').value!="" && document.getElementById('telefono').value!="" && document.getElementById('mensaje').value!=""){
        alert("NOMBRE Y APELLIDO: "+document.getElementById('nombreApellido').value+"\nCORREO: "+document.getElementById('correoElectronico').value+"\nNUMERO DE TELEFONO: "+document.getElementById('telefono').value+"\nMENSAJE: "+ document.getElementById('mensaje').value);
    }
}

Escribir_html('Contenido',Presentacion);
Escribir_html('Contenido',Experiencia);
Escribir_html('Contenido',Tabla);
botonSubir.addEventListener('click',EnviarCorreo,true);
