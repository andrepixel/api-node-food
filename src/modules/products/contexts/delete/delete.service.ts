import * as express from 'express';
import { Schema } from 'mongoose';
import { ProductSchema } from 'shared/entities/product.js';

export default class DeleteService {
	private schema: Object;

	public async deleteProduct(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = ProductSchema.findById(req.params.id);

		const query = await ProductSchema.deleteOne();

		return res.json(query);
	}
}
