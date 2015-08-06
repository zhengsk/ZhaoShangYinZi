
// 页面导航地位
;(function setNavLocation(){
	var locationId = "#sadfas";
	$(locationId).addClass('active')
})();


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
        $(document.getElementsByTagName('body')[0]).addClass('only-show-article');
    }
}

// 详情页显示广告
function showBottomAd (query, url) {
    if(getUrlParam(query) === "1"){
        $(document.getElementsByTagName('body')[0]).addClass('show-bottom-ad');

        $.ajax({
        	url: url,
        	type: 'get',
        	dataType: 'json'
        })
        .done(function(datas) {
        	console.log("success");
        	if(datas.status === 200){
        		var adDatas = datas.results;
        		$.each(adDatas, function(i, item){
        			var ad = $('<img src="'+ item.image +'" class="width-100">');
        			if(item.param && item.param.url){
        				var link = $('<a href="'+ item.param.url +'"></a>');
        				ad = link.append(ad);
        			}
        			$('#pageBottomAd').append(ad);
        		});
        	}else{
        		console.warn('加载底部广告失败！');
        	}
        });
        
    }
}