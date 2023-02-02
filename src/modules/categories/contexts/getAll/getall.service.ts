import { CategorySchema } from '../../../../shared/entities/category';
import * as express from 'express';

export default class GetAllCategoriesService {
	private schema: Object;

	public async getCategories(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		this.schema = await CategorySchema.find();

		return this.schema;
	}
}
