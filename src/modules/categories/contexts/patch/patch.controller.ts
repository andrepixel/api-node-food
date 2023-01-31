import * as express from 'express';
import PatchCategoriesService from './patch.service';

export default class PatchCategoriesController {
	constructor(private readonly service: PatchCategoriesService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.patchCategory(req, res)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((error) => res.status(400).json({ error: [error.message] }));
	}
}
