//检查是否为空
function isEmpty(string) {
    if (string.length < 1 || string == 0 || string == '')
        return true;
    else
        return false;
}

//判断是否是微信
function isWeixn() {
    //var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

//判断是否为ios设备
function isIos() {
    if (ua.indexOf('os') > 0) {
        return true;
    } else {
        return false;
    }
}
//判断是否为电脑
function isPc() {
    var Agents = new Array("android", "iphone", "symbianos", "windows phone", "ipad", "ipod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (ua.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

// 添加Cookie
// escape对字符串进行编码
function addCookie(name, value, expireHours) {
    var cookieString = name + "=" + escape(value) + "; path=/";
    //判断是否设置过期时间
    if (expireHours > 0) {
        var date = new Date();
        date.setTime(date.getTime() + expireHours * 3600 * 1000);
        cookieString = cookieString + ";expires=" + date.toGMTString();
    }
    document.cookie = cookieString;
}

// 获取Cookie
function getCookie(name) {
    var strcookie = document.cookie;
    var arrcookie = strcookie.split("; ");
    for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name) return unescape(arr[1]);
    }
    return null;
}
// 删除cookie
function delCookie(name) { //删除cookie
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + "; path=/;expires=" + exp.toGMTString();
}



