import { ProductSchema } from '../../shared/entities/product';
import * as express from 'express';

/**
 * getProduct
 */
export function getProduct(req: express.Request, res: express.Response): void {
	const productSchema = ProductSchema.find();

	res.json(productSchema);
}
