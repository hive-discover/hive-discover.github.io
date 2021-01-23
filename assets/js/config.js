API_ADDRESS = "http://127.0.0.1:5000/";


function reload_js(src) {
    $('script[src="' + src + '"]').remove();
    $('<script>').attr('src', src).appendTo('head');
}