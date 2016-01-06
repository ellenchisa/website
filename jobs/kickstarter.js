job('last_kickstarter', function(done) {
	var cheerio = require('cheerio');
	var request = require('request');

	request.get('http://www.kickstarter.com/profile/ellenchisa', function(err,response) {
		var $ = cheerio.load(response.body);

		var page = $('.page');
		var projects = page.find('.project_item').toArray();
		projects.splice(3);

		var result = [];


		projects.forEach(function(project) {
			var title = $(project).find('.project_name').first().text();
			var url = "http://www.kickstarter.com/" + $(project).attr('href');
			var image = $(project).find('img').first().attr('src');
			result.push({
				title:title,image:image,url:url
			});
		});
		done({ array: result });
	});
}).every('1 day');