import { CategorySchema } from '../../../../shared/entities/category';
import * as express from 'express';

export default class PostCategoriesService {
	private schema: Object;

	public async postCategories(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		try {
			this.schema = await CategorySchema.create(req.body);

			return this.schema;
		} catch (error) {
			console.log(error);

			throw error;
		}
	}
}
