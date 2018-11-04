
const express = require('express');
const router = express.Router();

// Require the Controller WHICH WE DID NOT CREATE YET!!

const item_controller = require('../controllers/item.controller');

// a simple test url to check that all of our files are communicatin correctly

router.get('/find_all', item_controller.find_all);
router.get('/find/:id', item_controller.find);
router.get('/test', item_controller.test);
router.post('/create', item_controller.create);
router.post('/update/:id', item_controller.update);
router.delete('/delete/:id', item_controller.delete);
router.get('/toggle_stock/:id', item_controller.toggle_stock);

// router.get('/:id', book_controller.stable_version);

// router.post('patch_book', book_controller.patch_book);

// router.delete('/:id/delete', book_controller.version_delete);

// router.delete('/', book_controller.default);


module.exports = router;