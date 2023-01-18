import * as express from 'express';
import { routes } from './routes';
import mongoose from 'mongoose';


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017').then(() => {
	const app = express.default();
	const port = 3000;

	app.use(express.json());
	app.use(routes);
	app.listen(port, () => console.log(`Running on http://localhost:${port}`));
}).catch(
	(err) => console.log(err),
);
