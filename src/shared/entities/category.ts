import { Schema, model } from 'mongoose';

export const CategorySchema = model('Category', new Schema({
	name: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
}));
