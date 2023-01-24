import * as express from 'express';
import { OrderSchema } from '../../../../shared/entities/order';

export default class PostService {
	private schema: Object;

	public async postOrder(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		try {
			this.schema = await OrderSchema.create(req.body);

			return this.schema;
		} catch (error) {
			throw error;
		}
	}
}
