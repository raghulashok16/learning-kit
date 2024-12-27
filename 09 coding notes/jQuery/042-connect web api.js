$(function () {
    $('.btn').css({
        'border': '1px solid black'
        , 'width': '150px'
        , 'padding': '10px'
    })
    $('.btn-1').click(function (e) {
        var url = 'http://api.icndb.com/jokes/random/';
        $.getJSON(url, function (data) {
            $('#output1').html(data.value.joke);
        })
    })
    $('.btn-2').click(function (e) {
        var url = 'https://swapi.co/api/people/?format=json';
        $.getJSON(url, function (data) {
            $.each(data.results, function (i, v) {
                $('#output1').append(v.name + '<br>');
            });
        })
    })
    $('.btn-3').click(function (e) {
        var url = 'https://raw.githubusercontent.com/mattdesl/marvel-characters/master/characters.json';
        $.getJSON(url, function (data) {
            $.each(data, function (i, v) {
                $('#output1').append(v + '<br>');
            });

        })


    })
})