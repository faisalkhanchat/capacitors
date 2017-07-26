    
	//dropdown hover js
$(document).ready(function(){ //alert('asdf');
    $("#ddmenu li", this).hover(function(){ //alert();
        $(this).addClass('over').stop();
         },
    function(){ $(this).removeClass('over').stop();
    }); 
    $('#backtotop').click(function(){
       $('html, body').animate({scrollTop: 0}, 1000); 
    });
});
	
    $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
	    
    $(function(){
    $("#accordion a").click(            
            function() {
                $('i.fa', this).toggleClass("fa-plus");                
            },
            function() {
                $('i.fa', this).toggleClass("fa-minus");                
            });
    });
/*
	$('.owl-carousel').owlCarousel({
		navigation:true,
		loop:true,
		margin:0,
		autoWidth:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:true
			}
		}
	})
*/
/*
	$("#zoom_09").elevateZoom({
            gallery : "gallery_09",
            galleryActiveClass: "active"
    	  		}); 
     */       
  
     $("#select").change(function(e){
	   var currentValue = $("#select").val();
	   if(currentValue == 1){    
	   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image1.png';
	   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image1.jpg';
	   }
	   if(currentValue == 2){    
	   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image2.png';
	   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image2.jpg';
	   }
	   if(currentValue == 3){    
	   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image3.png';
	   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image3.jpg';
	   }
	   if(currentValue == 4){    
	   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image4.png';
	   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image4.jpg';
	   }
		// Example of using Active Gallery
	  $('#gallery_09 a').removeClass('active').eq(currentValue-1).addClass('active');		
	 
	 
		 var ez =   $('#zoom_09').data('elevateZoom');	  
	   
	  ez.swaptheimage(smallImage, largeImage); 
		 
		});