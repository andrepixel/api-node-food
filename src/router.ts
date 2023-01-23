import { Router } from 'express';
import { deleteCategoryController } from 'modules/categories/contexts/delete';
import { getAllCategoryController } from 'modules/categories/contexts/getAll';
import { postCategoryController } from 'modules/categories/contexts/post';
import { deleteOrdersController } from 'modules/orders/contexts/delete';
import { getAllOrdersController } from 'modules/orders/contexts/getAll';
import { postOrdersController } from 'modules/orders/contexts/post';
import { deleteProductsController } from 'modules/products/contexts/delete';
import { getAllProductsController } from 'modules/products/contexts/getAll';
import { postProductsController } from 'modules/products/contexts/post';

export const routes = Router();

routes.get('/health', (req, res) => res.status(200).json('OK'));

routes.get('/categories', (req, res) => getAllCategoryController.index(req, res));
routes.post('/categories', (req, res) => postCategoryController.index(req, res));
routes.delete('/categories', (req, res) => deleteCategoryController.index(req, res));

routes.get('/orders', (req, res) => getAllOrdersController.index(req, res));
routes.post('/orders', (req, res) => postOrdersController.index(req, res));
routes.delete('/orders', (req, res) => deleteOrdersController.index(req, res));

routes.get('/products', (req, res) => getAllProductsController.index(req, res));
routes.post('/products', (req, res) => postProductsController.index(req, res));
routes.delete('/products', (req, res) => deleteProductsController.index(req, res));

