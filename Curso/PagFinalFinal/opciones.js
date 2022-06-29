cambioOpcion = function (ev) {
    let target = this.getAttribute("data-target");
    let valor = ev.target.value;
    if (valor == "")
        valor = "plato";
    let imagenUrl = `${valor}.jpg`;
    document.getElementById(target).setAttribute("src", imagenUrl);

};

buscarReceta = function () {
    let ingredientes = "";
    let selectoresImagen = document.getElementsByClassName("selector-imagen");
    for (let selectorImagen of selectoresImagen) {
        if (selectorImagen.value == "")
            continue;
        ingredientes += selectorImagen.value + "+";
    }
    url = "https://www.google.com/search?q=" + "receta+" + ingredientes;
    window.location = url;
};

window.onload = function () {
       let selectoresImagen = document.getElementsByClassName("selector-imagen");
    for (let selectorImagen of selectoresImagen) {
        selectorImagen.onchange = cambioOpcion;
    };
    document.getElementById("boton-buscar").onclick = buscarReceta;
};







 //console.log(ev.target.value);//