import * as express from 'express';
import DeleteService from './delete.service';

export default class DeleteController {
	constructor(private readonly service: DeleteService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.deleteOrder(req, res)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((error) => res.status(500));
	}
}
