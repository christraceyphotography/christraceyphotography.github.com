var modal = false;

(function($){
     $.fn.extend({
          center: function () {
                return this.each(function() {
                        var top = ($(window).height() - $(this).outerHeight()) / 2;
						alert('top: ' + top);
                        var left = ($(window).width() - $(this).outerWidth()) / 2;
                        $(this).css({position:'absolute', margin:0, top: (top > 0 ? top : 0)+'px', left: (left > 0 ? left : 0)+'px'});
                });
        }
     });
})(jQuery);


$(window).load(function(){  
    var spotlight = {  
         // the opacity of the "transparent" images - change it if you like  
        opacity : 0.1,  
  
        /*the vars bellow are for width and height of the images so we can make 
        the <li> same size */  
        imgWidth : $('.spotlightWrapper ul li').find('img').width(),  
        imgHeight : $('.spotlightWrapper ul li').find('img').height()  
  
    };  
  
    //set the width and height of the list items same as the images  
    //width = $('.spotlightWrapper ul li').find('img').width();  
    width = $('.imgTemplate').find('img').width();  
    alert('m: ' + width);
    $('.imgTemplate').hide();
    //$('.spotlightWrapper ul li').css({ 'width' : spotlight.imgWidth, 'height' : spotlight.imgHeight });  
    $('.spotlightWrapper ul li').css({ 'width' : width, 'height' : width });  
  
    //when mouse over the list item...  
    $('.spotlightWrapper ul li').hover(function(){  
  		if(!modal){
		    //...find the image inside of it and add active class to it and change opacity to 1 (no transparency)  
		    target_img = $(this).find('img')
			target_img.addClass('preview').css({ 'opacity' : 1});
            img_src = target_img.attr('src');
			target_img.attr('src', img_src.replace(/[0-9].jpg$/, '4.jpg'))
		}    
        //when mouse leave...  
    }, function(){  
  		if(!modal){
        	//... find the image inside of the list item we just left and remove the active class  
        	target_img = $(this).find('img')
			target_img.removeClass('preview');  
			img_src = target_img.attr('src');
			target_img.attr('src', img_src.replace(/[0-9].jpg$/, '2.jpg'))
  		}
    });

	//when mouse click the list item...  
//    $('.spotlightWrapper ul li').click(function(event){  
//  		modal = true;

        //... find the image inside of the list item we just clicked and remove the active class  
//       	$(this).find('img').removeClass('preview');  
  
        //get the other list items and change the opacity of the images inside it to the one we have set in the spotlight array  
//        $('.spotlightWrapper ul li').find('img').css({'opacity' : spotlight.opacity}) ;  

//		$('#photoViewerImg').attr("src",event.target.src);
		
//		var top = '100px';
//        var left = ($(window).width() - $('#photoViewer').outerWidth()) / 2;
//        $('#photoViewer').css({position:'absolute', margin:0, top: top, left: (left > 0 ? left : 0)+'px'});

//		$('#photoViewer').center();
//		$('#photoViewer').show();
		
  
        //when mouse leave...  
//    });    
  
    //when mouse leaves the unordered list...  
    $('.spotlightWrapper ul').bind('mouseleave',function(){  
		if(!modal){        
			//find the images and change the opacity to 1 (fully visible)  
		    $(this).find('img').css('opacity', 1);  
		}
    });  

	$('.photoViewer').click(function(){
		modal = false;
		$("#photoViewer").hide();
       	$('.spotlightWrapper ul').find('img').css('opacity', 1);
	})
  
}); 
