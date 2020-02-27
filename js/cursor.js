$(document).ready(function(){

    $(document).mousemove(function(e){
        $('.cursor').eq(0).css({left: e.pageX, top: e.pageY})
        setTimeout(function(){
            $('.cursor').eq(1).css({left: e.pageX, top: e.pageY})
        },100);
    });

    $(function(){

        $(".bouton").mouseover(function(){
            console.log('coucou');
            $('.cursor:nth-child(2)').addClass("cursor-hover");
            $('.cursor').eq(0).css('display','none');
            var comment = $(this).attr('data-comment');
            $('.text-cursor').text(comment);
            $('.text-cursor').css('opacity','1');
        });
  
         $('.bouton').mouseout(function(){
            $('.cursor:nth-child(2)').removeClass("cursor-hover");
            $('.cursor').eq(0).css('display','inherit');
            $('.text-cursor').text('');
            $('.text-cursor').css('opacity','0');
        });
  
    });
});

 
  


