job('last_book', '* * * * *', function(done) {
	var cheerio = require('cheerio');
	var request = require('request');

	request.get('http://www.awesomefoundation.org/en/chapters/nyc', function(err,response) {
		var $ = cheerio.load(response.body);

		var project = $('.project').first();

		var title = project.find('h2').first().text();
		var url = "http://www.awesomefoundation.org" + project.find("a").first().attr('href');
		var image = project.find('img').first().attr('src');
		done({title:title, image:image, url:url})

	});
});