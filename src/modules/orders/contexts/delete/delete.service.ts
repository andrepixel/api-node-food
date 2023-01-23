import * as express from 'express';
import { Schema } from 'mongoose';
import { OrderSchema } from '../../../../shared/entities/order';

export default class DeleteService {
	private schema: Object;

	public async deleteOrder(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = OrderSchema.findById(req.params.id);

		const query = await OrderSchema.deleteOne();

		return res.json(query);
	}
}
