
// 获取地址栏参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

// 隐藏不需要的内容
function detailOnlyShow (param) {
    if(getUrlParam(param) === "1"){
        document.getElementsByTagName('body')[0].className = "only-show-article";
    }
}