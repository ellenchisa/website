var goodreads = require('goodreads');

job('last_book', '1 day', function(done) {
	var client = new goodreads.client({ 'key': 'auaYzVO0q5dYrIly7e9w', 'secret': 'UvPhnsJoOzfGeVC0cdD1pfELxfr6gxSn4LiKTfY'});
	client.getSingleShelf('1952043', 'currently-reading', function(reading_shelf) {
		done({
			title: reading_shelf.GoodreadsResponse.books[0].book[0].title[0],
			image: reading_shelf.GoodreadsResponse.books[0].book[0].small_image_url[0],
			author: reading_shelf.GoodreadsResponse.books[0].book[0].authors[0].author[0].name[0],
			link: reading_shelf.GoodreadsResponse.books[0].book[0].link[0]
		});
	});
});