import * as express from 'express';
import { OrderSchema } from '../../../../shared/entities/order';

export default class DeleteService {
	private schema: Object;

	public async deleteOrder(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		this.schema = OrderSchema.findById(req.params.id);

		const query = await OrderSchema.deleteOne();

		return query;
	}
}
