import { Model, Schema } from 'mongoose';
import * as express from 'express';
import { OrderSchema } from '../../../../shared/entities/order';

export default class PostService {
	private schema: Object;

	public async postOrder(
		req: express.Request,
		res: express.Response,
	): Promise<express.Response<Schema, Record<string, any>>> {
		this.schema = await OrderSchema.create(req.body);

		return res.json(this.schema);
	}
}
