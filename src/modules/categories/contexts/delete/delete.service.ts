import * as express from 'express';
import { CategorySchema } from 'shared/entities/category';

export default class DeleteCategoriesService {
	private schema: Object;

	public async deleteCategory(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		this.schema = CategorySchema.findById(req.params.id);

		const query = await CategorySchema.deleteOne();

		return query;
	}
}
