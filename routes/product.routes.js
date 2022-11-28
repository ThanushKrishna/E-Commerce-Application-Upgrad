const express = require("express")
const productRouter = express.Router()
const productController = require("../controllers/product.controller")
const authjwt = require("../middlewares/authjwt")

// The following API endpoints must be implemented in the 'Product Controller' class:
// Search Product - '/products'
productRouter.get("", productController.fetchProducts)

// Get Product Categories - '/products/categories'
productRouter.get("/categories", productController.fetchCategories)

// Get Product by Product ID - '/products/{id}'
productRouter.get("/:id", productController.fetchById)

//Save Product - '/products'
productRouter.post("",[authjwt.verifyToken, authjwt.verifyAdmin], productController.addProduct)

module.exports = productRouter