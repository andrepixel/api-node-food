import * as express from 'express';
import { routes } from './routes';
import mongoose from 'mongoose';
import * as env from 'dotenv';

mongoose.set('strictQuery', false);

env.config({ path: './.env'});

mongoose.connect('mongodb://localhost:27017').then(() => {
	const app = express();

	app.use(express.json());
	app.use(routes);
	app.listen(process.env.PORT, () => console.log(`Running on http://localhost:${process.env.PORT}`));
}).catch(
	(err) => console.log(err),
);
