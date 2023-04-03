import express, { Router } from 'express';
import CategoriesController from './controllers/CategoriesController'
import ProductsController from './controllers/ProductsController'


const router: Router = express.Router();
const categoriesController = new CategoriesController;
const productsController = new ProductsController;

router.post('/categories', categoriesController.create);
router.get('/categories', categoriesController.getAll);
router.delete('/categories/:id', categoriesController.delete);
router.put('/categories/:id', categoriesController.update);
router.get('/categories/:id', categoriesController.getById);

router.post('/products', productsController.create);
router.get('/products', productsController.getAll);
router.delete('/products/:id', productsController.delete);
router.put('/products/:id', productsController.update);
router.get('/products/:id', productsController.getById);

export default router;