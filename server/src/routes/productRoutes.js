const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.get('/', getProducts);               // GET all
router.post('/', createProduct);           // POST create
router.put('/:id', updateProduct);         // PUT update
router.delete('/:id', deleteProduct);      // DELETE

module.exports = router;
