// 首页图片轮换
function mainCarousel (opts) {
    $.ajax({
        url: opts.url,
        type: 'GET',
        dataType: 'json',
    })
    .done(function(resp) {
        if(resp.status == 200){
            var $indicators = $(opts.indicators);
            var $slides = $(opts.inner);

            var slides = [], indicators = [];
            $.each(resp.results, function (index, item) {
            	indicators.push(('<li data-target="#carousel-generic" data-slide-to="'+ index +'"></li>'));
            	slides.push(('<div class="item"> <a href="'+ item.url +'"><img src="'+ item.images +'" alt="'+ item.title +'"></a> <div class="carousel-caption"> '+ item.title +' </div> </div>'));
            });

            $indicators.html(indicators.join(''));
            $slides.append($(slides.join('')));

            // $('#carousel-generic').carousel();

            /* <li data-target="#carousel-generic" data-slide-to="0" class="active"></li> */

			/*
            <div class="item">
                <img src="_temp/images/slide_02.jpg" alt="图片1">
                <div class="carousel-caption">
                    机APP上线
                </div>
            </div>
            */
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
					debugger;
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