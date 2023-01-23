import GetAllService from './getall.service';
import * as express from 'express';

export default class GetAllController {
	constructor(private readonly service: GetAllService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.getCategories(req, res)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch(() => res.status(500));
	}
}
