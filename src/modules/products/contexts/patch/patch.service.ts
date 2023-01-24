import * as express from 'express';
import { ProductSchema } from '../../../../shared/entities/product';

export default class PatchService {
	private schema: Object;

	public async patchProduct(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		try {
			await ProductSchema.findByIdAndUpdate(
				req.params.categoryId,
				req.body,
			);

			this.schema = await ProductSchema.findById(req.params.categoryId);

			return this.schema;
		} catch (error) {
			throw error;
		}
	}
}
