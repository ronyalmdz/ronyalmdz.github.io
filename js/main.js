
$(document).ready(function () {	

    // permitir el evento de scroll sobre el mapa al hacer clic;

    $('#map_canvas1').addClass('scrolloff'); // apagar el evento de scroll sobre el mapa
    $('#canvas1').on('click', function () {
        $('#map_canvas1').removeClass('scrolloff'); // encender el evento de scroll al hacer clic
    });

    // deshabilitar el evento cuando haces clic

    $("#map_canvas1").mouseleave(function () {
        $('#map_canvas1').addClass('scrolloff'); // quitar el cursor pointer cuando se mueve el mouse 
    });
});

