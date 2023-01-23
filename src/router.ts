import { Router } from 'express';
import { getAllController } from 'modules/products/contexts/getAll';
import { postController } from 'modules/products/contexts/post';

export const routes = Router();

routes.get('/health', (req, res) => res.status(200).json('OK'));
routes.get('/categories', (req, res) => getAllController.index(req, res));
routes.post('/categories', (req, res) => postController.index(req, res));
// routes.delete('/categories/:id', deleteCategories);

// routes.get('/products', getProduct);
// routes.post('/products', postCategories);

// routes.get('/order', (req, res) => {
// 	res.json('OKAY');
// });
// routes.post('/order', (req, res) => {
// 	res.json('OKAY');
// });
