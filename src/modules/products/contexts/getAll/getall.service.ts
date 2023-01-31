import * as express from 'express';
import { ProductSchema } from 'shared/entities/product.js';

export default class GetAllService {
	private schema: Object;

	public async getProducts(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		this.schema = await ProductSchema.find();

		return this.schema;
	}
}
