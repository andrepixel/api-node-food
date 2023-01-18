import * as express from 'express';
import { getProduct } from './modules/products/products.service';
import { deleteCategories, getCategories, postCategories } from './modules/products/categories.service';

export const routes = express();

routes.get('/categories', getCategories);
routes.post('/categories', postCategories);
routes.delete('/categories/:id', deleteCategories);

routes.get('/products', getProduct);
routes.post('/products', postCategories);

routes.get('/order', (req, res) => {
	res.json('OKAY');
});
routes.post('/order', (req, res) => {
	res.json('OKAY');
});
