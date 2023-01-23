import * as express from 'express';
import PostCategoriesService from './post.service';
import { CategorySchema } from '../../../../shared/entities/category';

export default class PostCategoriesController {
	constructor(private readonly service: PostCategoriesService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.postCategories(req, res)
			.then((data) => {
				res.status(201).json(data);
			})
			.catch((error) => res.status(400).json({ error: [error.message] }));
	}
}
