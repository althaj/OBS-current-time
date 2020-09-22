$(function(){
    $('input[type=color]').spectrum({
        type: 'color',
        showPalette: 'false',
        showButtons: 'false',
        allowEmpty: 'false'
    });

    $('.sp-palette-container').remove();

    $('#previewButton').off('click').on('click', function(){
        window.open(getURL(), '_blank');
    });

    $('#copyButton').off('click').on('click', function(){
        copyToClipboard(getURL());
    });
});

function getURL(){
    var query = 'index.html?';
    $('select').each(function(index, item){
        if($(item).val() != '')
            query += item.id + '=' + $(item).val().replace('#','') + '&';
    });

    $('input[type=color]').each(function(index, item){
        var color = $(item).spectrum('get');
        query += item.id + '=' + $(item).spectrum('get').toHex() + '&';
    });
    return new URL(query, document.baseURI).href;
}

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  }