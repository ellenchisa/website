// var goodreads = require('goodreads');

// job('2013', '1 year', function(done) {
//     var client = new goodreads.client({ 'key': 'auaYzVO0q5dYrIly7e9w', 'secret': 'UvPhnsJoOzfGeVC0cdD1pfELxfr6gxSn4LiKTfY'});
//     client.getSingleShelf('1952043', '2013', function(reading_shelf) {
//         var books = reading_shelf.GoodreadsResponse.books.toArray();

// job('2012', '1 year', function(done) {
//     var client = new goodreads.client({ 'key': 'auaYzVO0q5dYrIly7e9w', 'secret': 'UvPhnsJoOzfGeVC0cdD1pfELxfr6gxSn4LiKTfY'});
//     client.getSingleShelf('1952043', '2012', function(reading_shelf) {
//         var books = reading_shelf.GoodreadsResponse.books.toArray();


// job('2011', '1 year', function(done) {
//     var client = new goodreads.client({ 'key': 'auaYzVO0q5dYrIly7e9w', 'secret': 'UvPhnsJoOzfGeVC0cdD1pfELxfr6gxSn4LiKTfY'});
//     client.getSingleShelf('1952043', '2011', function(reading_shelf) {
//         var books = reading_shelf.GoodreadsResponse.books.toArray();

// job('2010', '1 year', function(done) {
//     var client = new goodreads.client({ 'key': 'auaYzVO0q5dYrIly7e9w', 'secret': 'UvPhnsJoOzfGeVC0cdD1pfELxfr6gxSn4LiKTfY'});
//     client.getSingleShelf('1952043', '2010', function(reading_shelf) {
//         var books = reading_shelf.GoodreadsResponse.books.toArray();

// job('2009', '1 year', function(done) {
//     var client = new goodreads.client({ 'key': 'auaYzVO0q5dYrIly7e9w', 'secret': 'UvPhnsJoOzfGeVC0cdD1pfELxfr6gxSn4LiKTfY'});
//     client.getSingleShelf('1952043', '2009', function(reading_shelf) {
//         var books = reading_shelf.GoodreadsResponse.books.toArray();


//         done({
//             title: reading_shelf.GoodreadsResponse.books[0].book[0].title[0],
//             image: reading_shelf.GoodreadsResponse.books[0].book[0].small_image_url[0],
//             author: reading_shelf.GoodreadsResponse.books[0].book[0].authors[0].author[0].name[0],
//             link: reading_shelf.GoodreadsResponse.books[0].book[0].link[0]
//         });
//     });
// });