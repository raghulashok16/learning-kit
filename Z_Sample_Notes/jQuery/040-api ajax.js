$(function () {
    //https://codepen.io/discoveryvip/pen/rJoyZQ?editors=1011
    //https://api.jquery.com/jQuery.ajax/
    //https://api.randomuser.me/?results=50
    //https://api.github.com/gists
    $('.btn').css({
        'border': '1px solid black'
        , 'width': '150px'
        , 'padding': '10px'
    })
    $('.btn-3').click(function (e) {
        $.ajax({
            url: 'https://api.github.com/gists'
            , dataType: 'json'
            , success: (function (data) {
                console.log(data)
                $.each(data, function (d) {
                    $('#output1').append(data[d].description)
                })
            })
        })
    })
    $('.btn-2').click(function (e) {
        $.ajax({
            url: 'https://api.randomuser.me/?results=150'
            , dataType: 'json'
            , success: (function (data) {
                var n = data.results[0];
                var html = '<h1>People</h1>'
                $.each(data.results, function (i, n) {
                    var fullName = n.name.first + ' ' + n.name.last;
                    var userImage = n.picture.thumbnail;
                    html += '<span><img src="' + userImage + '"></span>';
                })
                $('#output1').html(html);
            })
        })
    })
    $('.btn-1').click(function (e) {
        $.ajax({
            url: 'https://api.randomuser.me/'
            , dataType: 'json'
            , success: (function (data) {
                var n = data.results[0];
                var fullName = n.name.first + ' ' + n.name.last;
                var userImage = n.picture.thumbnail;
                var html = '<div>' + fullName + '</div><br><img src="' + userImage + '">';
                $('#output1').html(html);
            })
        })
    })
})