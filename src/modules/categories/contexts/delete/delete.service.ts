import * as express from 'express';
import { Schema } from 'mongoose';
import { CategorySchema } from 'shared/entities/category';

export default class DeleteCategoriesService {
	private schema: Object;

	public async deleteCategory(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = CategorySchema.findById(req.params.id);

		const query = await CategorySchema.deleteOne();

		return res.json(query);
	}
}
