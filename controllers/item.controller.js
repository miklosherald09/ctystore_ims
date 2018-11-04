const Item = require('../models/item.model');

// Simple version, without validation or sanitation

exports.test = function(req, res){
    res.send('Greetings from the Test controller!');
}

exports.find = function (req, res) {

    Item.findById(req.params.id, function (err, item) {
        if(err)
            res.send(err);
        else
            res.send(item);
    });
};

exports.find_all = function (req, res) {

    Item.find({}, function(err, items) {
        var itemMap = [];
    
        items.forEach(function(item) {
            itemMap.push(item);
        });
    
        res.send(itemMap);  
      });
};

exports.create = function(req, res){

    // res.send(req.body.book+' '+req.body.version)
    let item = new Item({
        name: req.body.name,
        price: req.body.price,
        in_stock: req.body.in_stock,
    });

    Item.findOne({name: req.body.name}, function(err, resad){
        if(err)
            res.send(err);
        else{
            if(!resad){
                item.save(function(err){
        
                    if(err){
                        res.send(err);
                    }
                    else{
                        res.send('successfully created item!');
                    }
                })
            }
            else{
                res.send('duplicate data');
            }
        }
    });
}

exports.toggle_stock = function(req, res){

    var status = false;
    Item.findById(req.params.id, function (err, item) {
        if(item.in_stock == true)
            status = false;
        else
            status = true;

        req.body.in_stock = status;

        Item.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true},
            (err, item) => {
                if (err) return res.status(500).send(err);
                    return res.send(item);
            }
        );
    });
  
}


exports.update = function(req, res){


    Item.findOneAndUpdate(
        // the id of the item to find
        {_id: req.params.id},
                                                                                                                                        
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,

        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},

        // the callback function
        (err, item) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(item);
        }
    );
}

exports.delete = function(req, res){

    // The "todo" in this callback function represents the document that was found.
    // It allows you to pass a reference back to the client in case they need a reference for some reason.
    Item.findByIdAndRemove(req.params.id, (err, item) => {
        // As always, handle any potential errors:
        
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        
       if(item){
            const response = {
                message: "Item successfully deleted",
                id: item._id
            };
            return res.status(200).send(response);
        }
        else{
            return res.send(item);
        }
    });
};