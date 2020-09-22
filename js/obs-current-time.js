var settings = {};

$(function(){
    readSettings();
    displayTime();
    setInterval(displayTime, settings.refreshInterval);
});

function displayTime(){
    var time = new Date().toLocaleString(
        'en-US',
        {
            timeStyle: settings.timeStyle,
            hour12: settings.hrFormat
        });

    $('h1').text(time);
}

function readSettings(){
    // Hour format: 12 / 24
    var _hrFormat = getParameterByName('hrFormat');
    settings.hrFormat = (_hrFormat != '24');
    // Style of the clock: full / long / medium / short
    var _timeStyle = getParameterByName('timeStyle');
    settings.timeStyle = 'short';
    if(["full", "long", "medium"].includes(_timeStyle)) settings.timeStyle = _timeStyle;
    // Refresh interval: minute / second
    var _refreshInterval = getParameterByName('refreshInterval');
    if(_refreshInterval == 'second' || _refreshInterval == 1000)
        settings.refreshInterval = 1000;
    else
        settings.refreshInterval = 600000;
    // Background color" css color name or hexadecimal
    var _bgColor = getParameterByName('bgColor');
    if(_bgColor != null && _bgColor != '') $('body').css("background-color", _bgColor);
    // Text color" css color name or hexadecimal
    var _textColor = getParameterByName('textColor');
    if(_textColor != null && _textColor != '') $('h1').css("color", _textColor);
    // Font family: georgia / arial / comic_sans / impact / courier / lucida
    var _font = getParameterByName('font');
    if(_font == 'georgia') $('h1').css('fontFamily', 'Georgia, serif');
    if(_font == 'arial') $('h1').css('fontFamily', 'Arial, Helvetica, sans-serif');
    if(_font == 'comic_sans') $('h1').css('fontFamily', '"Comic Sans MS", cursive, sans-serif');
    if(_font == 'impact') $('h1').css('fontFamily', 'Impact, Charcoal, sans-serif');
    if(_font == 'courier') $('h1').css('fontFamily', '"Courier New", Courier, monospace');
    if(_font == 'lucida') $('h1').css('fontFamily', '"Lucida Console", Monaco, monospace');
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}