$(function () {
    
    
    
 
$('.btn').click(function(){
    var eleHighlight = $('.highlight').map(function(){
        return $(this).html();
    })
    console.log(eleHighlight[2]);
    
    $('li').slice(3,7).css("background-color","yellow");
    
})    
    
    
})