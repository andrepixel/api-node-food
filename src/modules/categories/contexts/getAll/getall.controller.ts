import GetAllCategoriesService from './getall.service';
import * as express from 'express';

export default class GetAllCategoriesController {
	constructor(private readonly service: GetAllCategoriesService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.getCategories(req, res)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch(() => res.status(500));
	}
}
