import { Model, Schema } from 'mongoose';
import { CategorySchema } from '../../../../shared/entities/category';
import * as express from 'express';

export default class GetAllCategoriesService {
	private schema: Object;

	public async getCategories(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = await CategorySchema.find();

		return res.status(200).send(this.schema);
	}
}
