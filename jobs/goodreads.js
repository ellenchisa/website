var goodreads = require('goodreads'),
  key = config().tokens.goodreads.key,
  secret = config().tokens.goodreads.secret;

job('last_book', function(done) {

	var client = new goodreads.client({ 'key': key, 'secret': secret});
	client.getSingleShelf('1952043', 'currently-reading', function(reading_shelf) {
		done({
			title: reading_shelf.GoodreadsResponse.books[0].book[0].title[0],
			image: reading_shelf.GoodreadsResponse.books[0].book[0].small_image_url[0],
			author: reading_shelf.GoodreadsResponse.books[0].book[0].authors[0].author[0].name[0],
			link: reading_shelf.GoodreadsResponse.books[0].book[0].link[0]
		});
	});
}).every('1 day');