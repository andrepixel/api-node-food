import { routes as router } from './router';
import mongoose from 'mongoose';
import * as env from 'dotenv';
import express from 'express';

mongoose.set('strictQuery', false);

env.config({ path: './.env' });

mongoose
	.connect('mongodb://localhost:27017')
	.then(() => {
		const app = express();

		app.use(express.json());
		app.use(router);
		app.listen(process.env.PORT, () =>
			console.log(`Running on http://localhost:${process.env.PORT}`),
		);
	})
	.catch((err) => console.log(err));
