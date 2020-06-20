
/**
 * 从 url 中解析参数
 * @param {*} url
 */
export const getUrlParams = url => {
    url = url || location.href;
    if (url.indexOf('#') >= 0) {
        url = url.substr(0, url.indexOf('#'));
    }
    var obj = {};
    if (location.href.indexOf('?') > 0) {
        var params = url.substr(location.href.indexOf('?') + 1);
        params = params.split('&');
        for (var i = 0; i < params.length; i++) {
            var tem = params[i].split('=');
            if (!tem[0]) {
                continue;
            }
            obj[tem[0]] = decodeURIComponent(tem[1]);
        }
    }
	return obj;
};