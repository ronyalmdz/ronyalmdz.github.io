////////////////
//VALIDACION FORMULARIOS IE
//////////////
function validate(formulario) 
{
    if (!Modernizr.input.required) 
	{
		 var required = [], att, val;
		$(formulario).find('input[required]').each(function()
		{
			if($(this).val() == '')
			{
				  required.push($(this).attr('name'));
			}
		});
		if (required.length > 0) 
		{ 
			alert('Los siguientes campos son obligatorios: ' + required.join(', '));
			return false;
		}
		else
		{
			return true;
		}
    }
}
///////////////
//ENVIO DE FORMULARIO DE CONTACTO AJAX
//////////////
$('#contacto_form').submit(function(event)
{
	event.preventDefault();
	if(!Modernizr.input.required) //si es IE
	{
		if(validate('#contacto_form'))
		{
			var datos = $('#contacto_form').serialize();
			var datastring = datos + '&modo=contacto';
			$('#myModal').modal('hide');
			$('#myModal2').modal();
			$.ajax
  			({
				type: "POST",
				url: "includes/mail.php",
				data: datastring,
				success: function(data)
				{
					location.reload();
				},
				error: function()
				{
					$('#myModal2 .modal-body').html('<p style="text-align:center" class="contactdir">Sucedio un error :( Intenta más tarde.</p>');
					$('input#nombre').val("");
					$('input#email').val("");
					$('textarea#mensaje').val("");
				}
  			});
		}
	}
	else //sino es IE
	{
		var datos = $('#contacto_form').serialize();
		var datastring = datos + '&modo=contacto';
		$('#myModal').modal('hide');
		$('#myModal2').modal();
		$.ajax
  		({
			type: "POST",
			url: "includes/mail.php",
			data: datastring,
			success: function(data)
			{
				location.reload();
			},
			error: function()
			{
				$('#myModal2 .modal-body').html('<p style="text-align:center" class="contactdir">Sucedio un error :( Intenta más tarde.</p>');
			}
  		});
	}
});
///////////////////////FOOTER
$('#contacto_form2').submit(function(event)
{
	event.preventDefault();
	if(!Modernizr.input.required) //si es IE
	{
		if(validate('#contacto_form2'))
		{
			var datos = $('#contacto_form2').serialize();
			var datastring = datos + '&modo=contacto';
			$('#myModal').modal('hide');
			$('#myModal2').modal();
			$.ajax
  			({
				type: "POST",
				url: "includes/footer.php",
				data: datastring,
				success: function(data)
				{
					location.reload();
				},
				error: function()
				{
					$('#myModal2 .modal-body').html('<p style="text-align:center" class="contactdir">Sucedio un error :( Intenta más tarde.</p>');
					$('input#nombre').val("");
					$('input#email').val("");
					$('textarea#mensaje').val("");
				}
  			});
		}
	}
	else //sino es IE
	{
		var datos = $('#contacto_form2').serialize();
		var datastring = datos + '&modo=contacto';
		$('#myModal').modal('hide');
		$('#myModal2').modal();
		$.ajax
  		({
			type: "POST",
			url: "includes/footer.php",
			data: datastring,
			success: function(data)
			{
				location.reload();
			},
			error: function()
			{
				$('#myModal2 .modal-body').html('<p style="text-align:center" class="contactdir">Sucedio un error :( Intenta más tarde.</p>');
			}
  		});
	}
});
///// NEWSLETTER /////////////////
$('#form').submit(function(event)
{
	event.preventDefault();
	if(!Modernizr.input.required) //si es IE
	{
		if(validate('#form'))
		{
			var datos = $('#form').serialize();
			var datastring = datos + '&modo=contacto';
			$('#myModal').modal('hide');
			$('#myModal2').modal();
			$.ajax
  			({
				type: "POST",
				url: "includes/suscripcion.php",
				data: datastring,
				success: function(data)
				{
					location.reload();
				},
				error: function()
				{
					$('#myModal2 .modal-body').html('<p style="text-align:center" class="contactdir">Sucedio un error :( Intenta más tarde.</p>');
					$('input#correo2').val("");

				}
  			});
		}
	}
	else //sino es IE
	{
		var datos = $('#form').serialize();
		var datastring = datos + '&modo=contacto';
		$('#myModal').modal('hide');
		$('#myModal2').modal();
		$.ajax
  		({
			type: "POST",
			url: "includes/suscripcion.php",
			data: datastring,
			success: function(data)
			{
				location.reload();
			},
			error: function()
			{
				$('#myModal2 .modal-body').html('<p style="text-align:center" class="contactdir">Sucedio un error :( Intenta más tarde.</p>');
			}
  		});
	}
});
///////////////
//PRETTYPHOTO
//////////////
$("a[rel^='prettyPhoto']").prettyPhoto({default_width: 720,default_height: 480});
///////////////
//IFRAME VIMEO
//////////////
$('.videoyoutube').each(function(index, element) 
{
	var str = $('#vimeo').attr('data-rel');
	if(str != undefined)
	{
		var widthv = $(this).attr('data-width'); //default 420
		var heightv = $(this).attr('data-height'); //default 345
		$(this).parent().html(str.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w\-]{10,12})(?:&feature=related)?(?:[\w\-]{0})?/g, '<iframe 	width="'+widthv +'" height="'+heightv +'" src="http://www.youtube.com/embed/$1?wmode=opaque&rel=0" frameborder="0" allowfullscreen></iframe>'));
};
});$(".search-txt").keyup(function(event) {
    if (event.keyCode==13) {
        location.href="search?keyword="+$(this).val();
    }
});


$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 600,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 15,
    controls: true,
    pager: false,
    nextText: '',
    prevText: ''
  });
  //Carrusel Nuestra Clinica
	$('.slider-imagenes').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  arrows: false,
	  dots: true,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToScroll: 3,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToScroll: 1,
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	//IniciarSlick();

});

$('.slider-logos').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 3,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]  
});
$('.slider-testimonios').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]  
});
$('.slider-consejos').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 1,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]  
});
$('.slider-menu').slick({
  centerMode: false,
  centerPadding: '10px',
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]  
});
$('.aros-carousel1').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerPadding: '0px',
  arrows: false
});
$('.aros-carousel2').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerPadding: '0px',
  arrows: false
});
$(window).load(function(){
	$('.slider-logos').css('display', 'none');	
	$('.aros-carousel2').css('display', 'none');
	$('.slider-logos:first').css('display', 'block');
});
$('.btn-item').click(function(){
	$('.slider-logos').css('display', 'none');
	$('.btn-item').removeClass('active');
	$(this).addClass('active');
	$($(this).data('target')).css('display', 'block');
});
$('.bullets .item').click(function(){
	$('.testimonio').addClass('hide');
	$('.testimonio').css('display', 'block');
	$($(this ).data('target')).removeClass('hide');
	$('.bullets .item').removeClass('active');
	$(this).addClass('active');
});
$('.btn-aros').click(function(){
	$('.btn-aros').removeClass('active');
	$(this).addClass('active');
	$('.aros-carousel').css('display', 'none');
	$($(this).data('target')).css('display', 'block');
	console.log($($(this).data('target')).css('display', 'block'));
});
$('.btn-atras').click(function(){
	window.history.back();
});

$(function() {
	/* initiate plugin assigning the desired button labels  */
	$("div.holder").jPages({
	  containerID : "noticias-gal",
	  first       : false,
	  previous    : "anterior",
	  next        : "siguiente",
	  last        : false,
	  perPage     : 8,
	});
	$("div.holder").jPages({
	  containerID : "articulos-gal",
	  first       : false,
	  previous    : "anterior",
	  next        : "siguiente",
	  last        : false,
	  perPage     : 5,
	});
	$("div.holder").jPages({
	  containerID : "avances-gal",
	  first       : false,
	  previous    : "anterior",
	  next        : "siguiente",
	  last        : false,
	  perPage     : 5,
	});
	$("div.holder").jPages({
	  containerID : "medicos-gal",
	  first       : false,
	  previous    : "anterior",
	  next        : "siguiente",
	  last        : false,
	  perPage     : 9,
	});
});
$('.btn-regresar').click(function(){
	window.history.back();
});
$('.carousel-inner .item:first').addClass('active');
$('.testimonio').css('display', 'none');
$('.testimonio:first').css('display', 'block');
function cortarpalabras(clase,tamano)
	{
		if(clase != undefined)
		{
			$(clase).trunk8({lines:tamano, tooltip:false});
		}
};
$('.panel-collapse').on('hidden.bs.collapse', function () {
  cortarpalabras('.dosl',2); 
})

cortarpalabras('.dosl',2); 
cortarpalabras('.unal',1);

$('.flex-video').each(function(index, element){
	var str = $(this).attr('data-rel');
	if (str != undefined){
		if(/vimeo/.test(str)){
			str.match(/https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/);
    		var id_vimeo = RegExp.$1 == 'vimeo' ? RegExp.$2 : RegExp.$3;
    		$(this).html('<iframe width="546" height="320"  src="http://player.vimeo.com/video/'+id_vimeo+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>');    			
		}
		else{
			var widthv = $(this).attr('data-width'); //default 420
			var heightv = $(this).attr('data-height'); //default 345
			$(this).html(str.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w\-]{10,12})(?:&feature=related)?(?:[\w\-]{0})?/g, '<iframe 	width="100%" height="330" src="http://www.youtube.com/embed/$1?wmode=opaque&rel=0" frameborder="0" allowfullscreen></iframe>'));
		}
    	
	} 
});
$('.flex-video2').each(function(index, element){
	var str = $(this).attr('data-rel');
	if (str != undefined){
		if(/vimeo/.test(str)){
			str.match(/https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/);
    		var id_vimeo = RegExp.$1 == 'vimeo' ? RegExp.$2 : RegExp.$3;
    		$(this).html('<iframe width="546" height="320"  src="http://player.vimeo.com/video/'+id_vimeo+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>');    			
		}
		else{
			var widthv = $(this).attr('data-width'); //default 420
			var heightv = $(this).attr('data-height'); //default 345
			$(this).html(str.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w\-]{10,12})(?:&feature=related)?(?:[\w\-]{0})?/g, '<iframe 	width="310" height="150" src="http://www.youtube.com/embed/$1?wmode=opaque&rel=0" frameborder="0" allowfullscreen></iframe>'));
		}
    	
	} 
});


$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 


$(document).ready(function(){

	$("#d1").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d10").hide();

	
});
$("#dd1").click(function(){
	$("#d1").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd2").click(function(){
	$("#d2").show();
	$("#d1").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd1').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd3").click(function(){
	$("#d3").show();
	$("#d2").hide();
	$("#d1").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd1').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd4").click(function(){
	$("#d4").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d1").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd1').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd5").click(function(){
	$("#d5").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d1").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd1').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd6").click(function(){
	$("#d6").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d1").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd1').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd7").click(function(){
	$("#d7").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d1").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd1').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd8").click(function(){
	$("#d8").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d1").hide();
	$("#d9").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd1').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd9").click(function(){
	$("#d9").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d1").hide();
	$("#d10").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd1').removeClass('active2');
	$('#dd10').removeClass('active2');
	
});
$("#dd10").click(function(){
	$("#d10").show();
	$("#d2").hide();
	$("#d3").hide();
	$("#d4").hide();
	$("#d5").hide();
	$("#d6").hide();
	$("#d7").hide();
	$("#d8").hide();
	$("#d9").hide();
	$("#d1").hide();
	$(this).addClass('active2');
	$('#dd2').removeClass('active2');
	$('#dd3').removeClass('active2');
	$('#dd4').removeClass('active2');
	$('#dd5').removeClass('active2');
	$('#dd6').removeClass('active2');
	$('#dd7').removeClass('active2');
	$('#dd8').removeClass('active2');
	$('#dd9').removeClass('active2');
	$('#dd1').removeClass('active2');
	
});

//salud ocular

$('.thumbsalud').click(function(){
	$('.item-target').addClass('hide');
	var id = $(this).attr('data-id');
	$('.'+id).removeClass('hide');
});
$(document).ready(function(){
	$('.item-target:first').removeClass('hide');


	});
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

$('.feo').onclick(function(){
	$(this).addClass('nigga');
});