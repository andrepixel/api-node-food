import { Model, Schema } from 'mongoose';
import * as express from 'express';
import { OrderSchema } from '../../../../shared/entities/order';

export default class GetAllService {
	private schema: Object;

	public async getOrders(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = await OrderSchema.find();

		return res.status(200).send(this.schema);
	}
}
