import * as express from 'express';
import DeleteCategoriesService from './delete.service';

export default class DeleteCategoriesController {
	constructor(private readonly service: DeleteCategoriesService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.deleteCategory(req, res)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((error) => res.status(500));
	}
}
