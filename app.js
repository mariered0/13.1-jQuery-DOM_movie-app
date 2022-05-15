$('form').on('submit', function (event) {
    event.preventDefault();

    $('#content').append($('<div>'));
    $('div').last().append($('<p>').text("Title: " + $('#title').val()));
    $('div').last().append($('<p>').text("Rating: " + $('#rating').val()));
    $('div').last().append($('<button>').text('x'));
    $('button').on('click', function (){
        $(this, 'button').parent().remove();
    })
    $('#title, #rating').val('');
})