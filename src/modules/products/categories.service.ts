import { CategorySchema } from '../../shared/entities/category';
import * as express from 'express';
import { model, Schema } from 'mongoose';
import mongoose from 'mongoose';
import { routes } from '../../routes';

/**
 * getProduct
 */
export async function getCategories(req: express.Request, res: express.Response) {
	const categorySchema = await CategorySchema.find();

	res.json(categorySchema);
}

/**
 * postCategories
 */
export async function postCategories(req: express.Request, res: express.Response) {
	const categorySchema = await CategorySchema.create(req.body);

	res.json(categorySchema);
}

export async function deleteCategories(req: express.Request, res: express.Response) {
	const categorySchema = CategorySchema.findById(req.params.id);

	const query = await categorySchema.deleteOne();

	res.json(query);
}
