var _options = {};

$(function(){
    readSettings();
    displayTime();
    setInterval(displayTime, _options.refreshInterval);
});

function displayTime(){
    var time = new Date().toLocaleString('en-US', _options);

    $('h1').text(time);
}

function readSettings(){
    // Hour format: 12 / 24
    var _hrFormat = getParameterByName('hrFormat');
    _options.hour12 = (_hrFormat != '24');

    // Date-time components
    var _hour = getParameterByName('hour');
    if(_hour == 'true')
        _options.hour = '2-digit';

    var _minute = getParameterByName('minute');
    if(_minute == 'true')
        _options.minute = '2-digit';

    var _second = getParameterByName('second');
    if(_second == 'true'){
        _options.second = '2-digit';
        _options.refreshInterval = 1000;
    } else {
        _options.refreshInterval = 600000;
    }

    var _year = getParameterByName('year');
    if(_year == 'true')
        _options.year = 'numeric';

    var _month = getParameterByName('month');
    if(_month == 'true')
        _options.month = '2-digit';

    var _day = getParameterByName('day');
    if(_day == 'true')
        _options.day = '2-digit';

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