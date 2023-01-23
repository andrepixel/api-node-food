import * as express from 'express';
import PostService from './post.service';

export default class PostController {
	constructor(private readonly service: PostService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.postProduct(req, res)
			.then((data) => {
				res.status(201).json(data);
			})
			.catch(() => res.status(500));
	}
}
