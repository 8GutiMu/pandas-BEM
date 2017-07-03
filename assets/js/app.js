var cargarPagina = function(){
    
    textoOrigen();
    textoExtincion();
}


var eliminarPanditas = function(){
    $cerrar = $(".fotos__panda--cerrar")
}


var textoOrigen = function(){
    var $textoOrigne = $(".texto__parrafo--origen")

         $(".botones__btn--origen").click(function(){
        $textoOrigne.toggle();
    });
 
   
};

var textoExtincion = function(){
    var $textoExtincion = $(".texto__parrafo--extincion")

         $(".botones__btn--extincion").click(function(){
        $textoExtincion.toggle();
    });
 
   
};


$(document).ready(cargarPagina);

