import * as express from 'express';
import { ProductSchema } from 'shared/entities/product.js';

export default class DeleteService {
	private schema: Object;

	public async deleteProduct(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		this.schema = ProductSchema.findById(req.params.id);

		const query = await ProductSchema.deleteOne();

		return query;
	}
}
