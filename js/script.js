console.log('Warsztat - (jQuery) pobierz dane po kliknięciu przycisku');

$(document).ready(function(){
    $('#get-data').click(function(){

        // wariant 1
    //     $.get('https://akademia108.pl/api/ajax/get-post.php')
    //     .done(function(data){
    //         let pId = $('<p></p>').text(`Post ID: ${data.id}`);
    //         let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`);
    //         let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
    //         let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
    //         let hr = $('<hr />');

    //         let jqBody = $('body');

    //         $('body').append(pId);
    //         $('body').append(pUserId);
    //         $('body').append(pTitle);
    //         $('body').append(pBody);
    //         $('body').append(hr);
            
    //     })
    //     .fail(function(error){
    //         console.error(error);
    //     })
        
    // });

    // wariant 2
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data){
            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`);
            let pTitle = $('<p></p>').text(`Post ID: ${data.title}`);
            let pBody = $('<p></p>').text(`Post ID: ${data.body}`);
            let hr = $('<hr />');

            let jqBody = $('body');

            $('body').append(pId);
            $('body').append(pUserId);
            $('body').append(pTitle);
            $('body').append(pBody);
            $('body').append(hr);
            
        })
        .fail(function(error){
            console.error(error);
        })
        
    });
});