import * as express from 'express';
import * as imager from 'image-downloader';
import path from 'path';
import { ProductDTO } from 'shared/dtos/product.dto';
import { ProductSchema } from 'shared/entities/product.js';

export default class PostService {
	private schema: Object;

	public async postProduct(
		req: express.Request,
		res: express.Response,
	): Promise<Object> {
		try {
			let dto: ProductDTO;

			dto = req.body;

			const objectPathImage = await imager.image({
				url: dto.imagePath,
				dest: path.join(__dirname, '/../../../../../', 'uploads'),
			});

			const newPathImage = objectPathImage.filename.split('/');

			dto.imagePath = path.join(__dirname, '/../../../../../', 'uploads') + '/' + newPathImage[newPathImage.length - 1];

			this.schema = await ProductSchema.create(dto);

			return this.schema;
		} catch (error) {
			throw error;
		}
	}
}
