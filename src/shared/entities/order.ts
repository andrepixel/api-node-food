import { Schema, model } from 'mongoose';
import { ProductSchema } from './product';

export const OrderSchema = model('Order', new Schema({
	table: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ['WAITING', 'PROCESSING', 'DONE'],
		default: 'WAITING',
		required: true,
	},
	products: [
		{
			product: {
				type: Schema.Types.ObjectId,
				ref: 'Product',
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
		}
	],
	creadedAt: {
		type: Date,
		default: Date.now,
		required: true,
	},
}));
