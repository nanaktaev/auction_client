$(function(){
    const includes = $('[data-include]');
    jQuery.each(includes, function(){
        const file = '/auction_client/html/common/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});