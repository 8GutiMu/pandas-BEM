var cargarPagina = function(){
    
    textoOrigen();
    textoExtincion();
    eliminarPanditas();
    restaurarPanditas();
}

var restaurarPanditas = function(){
    
    $(".botones__btn--restaurar").click(function(){
        $(".fotos").show();
    });
    
}

var eliminarPanditas = function(){
    $cerrar = $(".fotos__panda--cerrar");
    
  
    $cerrar.click(function(){
        $(this).hide();
    });
    
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

