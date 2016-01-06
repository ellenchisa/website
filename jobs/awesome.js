job('last_awesome', function(done) {
	var cheerio = require('cheerio');
	var request = require('request');

	request.get('http://www.awesomefoundation.org/en/chapters/nyc', function(err,response) {
		var $ = cheerio.load(response.body);

		var projects = $('.project');

		var most_recent = $(projects[0]);
		var result = {most_recent:{}};
		result.most_recent.title = most_recent.find('h2').first().text();
		result.most_recent.url = "http://www.awesomefoundation.org" + most_recent.find('a').first().attr('href');
		result.most_recent.image = most_recent.find('img').first().attr('src');

		var second_most = $(projects[1]);
		result.second_most = {};
		result.second_most.title = second_most.find('h2').first().text();
		result.second_most.url = "http://www.awesomefoundation.org" + second_most.find('a').first().attr('href');
		result.second_most.image = second_most.find('img').first().attr('src');

		var third_most = $(projects[2]);
		result.third_most = {};
		result.third_most.title = third_most.find('h2').first().text();
		result.third_most.url = "http://www.awesomefoundation.org" + third_most.find('a').first().attr('href');
		result.third_most.image = third_most.find('img').first().attr('src');

		done(result);
	});
}).every('1 day');