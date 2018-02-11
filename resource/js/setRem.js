/**
* 设置HTML字体大小;
* PSD设计稿宽度为640px；设定html字体大小100px;
* 1rem相当于100px；

*/
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    reCalF = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth >= 640) {
    clientWidth = 640;
    }
    docEl.style.fontSize = 50 * (clientWidth / 320) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, reCalF, false);
    doc.addEventListener('DOMContentLoaded', reCalF, false);
    })(document, window);
    