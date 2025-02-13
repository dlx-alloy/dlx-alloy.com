window.addEventListener('load', function() {
    // 获取链接参数
    var urlParams = new URLSearchParams(window.location.search);
    var gclidParam = urlParams.get('gclid');
    var adsParam = urlParams.get('ads');
    var amParam = urlParams.get('am');
    var adcidParam = urlParams.get('adcid');
    var adgidParam = urlParams.get('adgid');
    var locParam = urlParams.get('loc');
    var kwdParam = urlParams.get('kwd');
    var tidParam = urlParams.get('tid');
    // 存储到 cookies 中
    var cookieOptions = {expires: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toUTCString(), path: '/'};
    if (gclidParam) {
        document.cookie = 'gclid=' + gclidParam + ';expires=' + cookieOptions.expires + ';path=' + cookieOptions.path;
    }
    if (adsParam) {
        document.cookie = 'ads=' + adsParam + ';expires=' + cookieOptions.expires + ';path=' + cookieOptions.path;
    }
    if (amParam) {
        document.cookie = 'am=' + amParam + ';expires=' + cookieOptions.expires + ';path=' + cookieOptions.path;
    }
    if (adcidParam) {
        document.cookie = 'adcid=' + adcidParam + ';expires=' + cookieOptions.expires + ';path=' + cookieOptions.path;
    }
    if (adgidParam) {
        document.cookie = 'adgid=' + adgidParam + ';expires=' + cookieOptions.expires + ';path=' + cookieOptions.path;
    }
    if (locParam) {
        document.cookie = 'loc=' + locParam + ';expires=' + cookieOptions.expires + ';path=' + cookieOptions.path;
    }
    if (kwdParam) {
        document.cookie = 'kwd=' + kwdParam + ';expires=' + cookieOptions.expires + ';path=' + cookieOptions.path;
    }
    if (tidParam) {
        document.cookie = 'tid=' + tidParam + ';expires=' + cookieOptions.expires + ';path=' + cookieOptions.path;
    }
});