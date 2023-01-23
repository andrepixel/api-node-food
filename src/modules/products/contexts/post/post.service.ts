import { Model, Schema } from 'mongoose';
import { CategorySchema } from '../../../../shared/entities/category';
import * as express from 'express';

export default class PostService {
	private schema: Object;

	public async postCategories(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = await CategorySchema.create(req.body);

		return res.json(this.schema);
	}

	// public async deleteCategories(
	// 	req: express.Request,
	// 	res: express.Response,
	// ): Promise<express.Response<Schema, Record<string, any>>> {
	// 	this.schema = CategorySchema.findById(req.params.id);

	// 	const query = await CategorySchema.deleteOne();

	// 	return res.json(query);
	// }
}
