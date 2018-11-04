
const express = require('express');
const router = express.Router();

// Require the Controller WHICH WE DID NOT CREATE YET!!

const book_controller = require('../controllers/book.controller');

// a simple test url to check that all of our files are communicatin correctly

router.post('/create', book_controller.create);

router.get('/test', book_controller.test);

router.get('/:id', book_controller.stable_version);

router.post('patch_book', book_controller.patch_book);

router.delete('/:id/delete', book_controller.version_delete);

// router.delete('/', book_controller.default);


module.exports = router;