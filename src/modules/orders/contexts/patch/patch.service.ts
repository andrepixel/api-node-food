import * as express from 'express';
import { OrderSchema } from '../../../../shared/entities/order';

export default class PatchService {
	private schema: Object;

	public async patchOrder(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		try {
			await OrderSchema.findByIdAndUpdate(
				req.params.categoryId,
				req.body,
			);

			this.schema = await OrderSchema.findById(req.params.categoryId);

			return this.schema;
		} catch (error) {
			throw error;
		}
	}
}
