var books = [ 
  {'title': "Beloved",
  'author': "Toni Morrison",
  'alreadyRead': true
  },
  {'title': "Walking With Einstein",
   'author': 'Someone',
   'alreadyRead': false
  }];

for(var x = 0; x < books.length; x++) {
    var book = books[x];
    var bookInfo = book.title + ' by ' + book.author;
    if(book.alreadyRead) {
        console.log('You already read ' + bookInfo);
    }
    else {
        console.log('You still need to read ' + bookInfo);
    }
}