import { Schema, model } from 'mongoose';
import { CategorySchema } from './category';

export const ProductSchema = model('Product', new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imagePath: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	ingredients: [
		{
			name: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
		},
	],
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
}));
