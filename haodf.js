
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var download = require('./lib/download');

var url = "http://www.haodf.com/yiyuan/all/list.htm";
var baseUrl = "http://www.haodf.com"

function downloadHostopal(url, area){

	download(url, function(data){
		if(data){
			console.log(area);
			console.log(url);
			console.log('\n');
			var html = iconv.decode(data, 'GB2312');
			var $ = cheerio.load(html);
			$('.m_ctt_green ul li a').each(function(){
				var $e = $(this);
				console.log($e.text());
				console.log(baseUrl + $e.attr('href'));
			});
			console.log('\n\n');
		}else{
			console.log('error');
		}
	});
}


downloadHostopal(url, "北京");
download(url, function(data){
	if(data){
		var html = iconv.decode(data, 'GB2312');
		var $ = cheerio.load(html);
		$('.kstl a').each(function(){
			var $e = $(this);
			var area = $e.text();
			var areaUrl = $e.attr('href');
			downloadHostopal(areaUrl, area);
		});
	}
});
