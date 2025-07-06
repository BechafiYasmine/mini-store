const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST - Create a product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, image_url } = req.body;
    const product = await prisma.product.create({
      data: { name, description, price, image_url }
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT - Update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image_url } = req.body;

    const updated = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, description, price, image_url }
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE - Remove a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: "Product deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};