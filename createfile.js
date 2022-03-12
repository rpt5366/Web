var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'first one', function (err) {
  if (err) throw err;
  console.log('1 Saved!');
});

// various file manipuations

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('2 Saved!');
  });

  fs.writeFile('mynewfile2.txt', 'Hello 3!', function (err) {
    if (err) throw err;
    console.log('3 Saved!');
  });

  fs.appendFile('mynewfile1.txt', ' This is my appended text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

  // replaces the original file3 
  fs.writeFile('mynewfile3.txt', 'This is my replaced text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

  // delete file
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File 2 deleted!');
});

