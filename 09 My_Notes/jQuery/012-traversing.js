$(function () {
    $('ul').attr('title','This is my list :)');
    $('.btn').click(function(){
        var eleKids = $('p').children(); 
        console.log(eleKids);
        
    })
    $('span').click(function(){
        var eleDad = $(this).parent().parent().attr('title');
        console.log(eleDad);
    })   
})




$(function () {
    $('ul').attr('title', 'This is my list :)');
    $('span').click(function () {
        $(this).next().css("color", "red");
        $(this).prev().css("color", "blue");
        //var eleDad = $(this).closest('ul').attr('title');
        //console.log(eleDad);
    })
    $('li').click(function () {
        $(this).find('span').css('color', 'yellow');
        /*
        $(this).next().css("color","red");
        $(this).prev().css("color","blue"); 
        $(this).nextAll().text("I'm next!");
        $(this).prevAll().text("I'm Previous");
        */
    })
})