// 首页图片轮换
function mainCarousel (opts) {
    $.ajax({
        url: opts.url,
        type: 'GET',
        dataType: 'json',
    })
    .done(function(resp) {
        if(resp.status == 200){
            var $slides = $(opts.id);

            var slides = [];
            $.each(resp.results, function (index, item) {
            	slides.push(('<li><img src="'+ item.images +'" /><p class="flex-caption"><a href="'+ item.url +'">'+ item.title +'</a></p></li>'));
            });

            $slides.find('.slides').append($(slides.join('')));

            $slides.flexslider({
                animation: "slide"
            });

        }else{
            alert("加载幻灯图片失败！")
        }
    })
    .fail(function() {
        console.log("error");
    });
}


// 加载新闻列表
function newsList (opts) {
	var wrapper = $(opts.id);
	$.ajax({
		url: opts.url,
		type: 'GET',
		dataType: 'json'
	})
	.done(function(resp) {
		if(resp.status == 200){
			var articleBody = $(opts.id).find('>.article-body');
			$.each(resp.results, function(index, item) {
				
				var ele = $('<div class="media"></div>');
				if(item.images){
					var img = '<div class="media-left"><a href="'+ item.url +'"><img class="media-object" src="'+ item.images[0] +'"></a></div>'
					ele.append($(img));
				}

				ele.append($('<div class="media-body"><h4 class="media-heading"><a href="'+ item.url +'">'+ item.title +'</a></h4><div class="media-note">'+ item.fromName+' '+ item.updatetime +'</div>'))

				ele.appendTo(articleBody);
				
			});
		}else{
			alert("加载"+opts.title+"失败！")
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
}