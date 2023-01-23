import { Model, Schema } from 'mongoose';
import { CategorySchema } from '../../../../shared/entities/category';
import * as express from 'express';

export default class PostCategoriesService {
	private schema: Object;

	public async postCategories(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = await CategorySchema.create(req.body);

		return res.json(this.schema);
	}
}
