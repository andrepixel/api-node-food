import * as express from 'express';
import { Schema } from 'mongoose';
import { CategorySchema } from 'shared/entities/category';

export default class PatchCategoriesService {
	private schema: Object;

	public async patchCategory(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		try {
			await CategorySchema.findByIdAndUpdate(
				req.params.categoryId,
				req.body,
			);

			this.schema = await CategorySchema.findById(req.params.categoryId);

			return this.schema;
		} catch (error) {
			throw error;
		}
	}
}
