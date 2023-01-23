import * as express from 'express';
import PostCategoriesService from './post.service';

export default class PostCategoriesController {
	constructor(private readonly service: PostCategoriesService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.postCategories(req, res)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch(() => res.status(500));
	}
}
