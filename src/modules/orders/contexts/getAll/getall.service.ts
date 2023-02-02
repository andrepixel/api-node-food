import * as express from 'express';
import { OrderSchema } from '../../../../shared/entities/order';

export default class GetAllService {
	private schema: Object;

	public async getOrders(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		this.schema = await OrderSchema.find();

		return this.schema;
	}
}
