import * as express from 'express';
import PatchService from './patch.service';

export default class PatchController {
	constructor(private readonly service: PatchService) {}

	index(req: express.Request, res: express.Response) {
		this.service
			.patchProduct(req, res)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((error) => res.status(500));
	}
}
