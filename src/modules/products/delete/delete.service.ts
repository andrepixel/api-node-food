import * as express from 'express';
import { Schema } from 'mongoose';
import { CategorySchema } from 'shared/entities/category';

export default class DeleteService {
	private schema: Object;

	public async deleteCategories(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = CategorySchema.findById(req.params.id);

		const query = await CategorySchema.deleteOne();

		return res.json(query);
	}
}
