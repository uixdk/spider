
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var download = require('./lib/download');

var url = "http://channel.jd.com/1713-3287.html";
var baseUrl = "http://www.haodf.com"

function downloadList(url, type){

	download(url, function(data){
		console.log(url);
		if(data){
			console.log('xxxxx');
			var html = iconv.decode(data, 'utf-8');
			console.log(html);
			console.log('xx');
			var $ = cheerio.load(html);
			$('.gl-item').each(function(){
				console.log('tmd');
				var $e = $(this);
				var name = $e.find('.p-name').text();
				console.log(name)
			});
		}else{
			console.log('error');
		}
	});
}


download(url, function(data){
	if(data){
		var html = iconv.decode(data, 'utf-8');
		var $ = cheerio.load(html);
		/*
		$('.auto-wrap .sub-menu a').each(function(){
			var $e = $(this);
			var catName = $e.text();
			var listUrl = $e.attr('href');
			downloadList(listUrl, catName);
		});
		*/

		downloadList($('.auto-wrap .sub-menu a').attr('href'), '');
	}
});
