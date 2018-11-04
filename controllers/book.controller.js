const Book = require('../models/book.model');

// Simple version, without validation or sanitation

exports.test = function(req, res){
    res.send('Greetings from the Test controller!');
}

exports.create = function(req, res){

    // res.send(req.body.book+' '+req.body.version)
    let book = new Book({
        book: req.body.book,
        version: req.body.version
    });

    book.save(function(err){
       
        if(err){
            res.send(err);
        }
        else{
            res.send('successfully created book!');
        }
    })
}

exports.stable_version = function (req, res) {

    Book.findById(req.params.id, function (err, book) {
        if (err){
            return next(err);
        }
        else{
            res.send(book);
        }
    })
};

exports.version_update = function (req, res) {
    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err){
            return next(err);
        }
        else{
            res.send('Book version udpated.');
        }        
    });
};

exports.version_delete = function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err){
            return next(err);
        }
        else{
            res.send('Deleted successfully!');
        }        
    })
};

exports.patch_book = function (req, res) {
    res.send('patching book');
};

