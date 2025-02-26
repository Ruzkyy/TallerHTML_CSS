function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}

function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var tituloTexto = document.getElementById("texto").value; 

    if (tituloTexto.trim() === "") {
        alert("ingresa un título.");
        return;
    }

    var titulo = document.createElement("h1");
    titulo.textContent = tituloTexto;
    contenido.appendChild(titulo);
}

document.getElementById('imagen').onchange = function (evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function () {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}
function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

function nuevoEnlace() {
    var contenido = document.getElementById('contenido');
    var textoEnlace = document.getElementById("texto").value;
    var urlEnlace = document.getElementById("enlaceURL").value;

    if (textoEnlace.trim() === "" || urlEnlace.trim() === "") {
        alert("Por favor, ingresa tanto el texto del enlace como la URL.");
        return;
    }

    var enlace = document.createElement("a");
    enlace.textContent = textoEnlace;
    enlace.setAttribute('href', urlEnlace);
    enlace.setAttribute('target', '_blank'); 
    enlace.style.display = "block"; 
    enlace.style.marginTop = "5px";
    
    contenido.appendChild(enlace);
}

