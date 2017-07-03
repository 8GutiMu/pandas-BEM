console.log("hola, ya me he conectado;")

var cargarPagina = function(){
    agregarAddEventListener();
}

var agregarAddEventListener = function(){
    $(".fotos__panda--cerrar").addEventListener(eliminarPanditas);
}

var eliminarPanditas = function(){
    
}

($document).ready(cargarPagina);