import PostProductsController from './post.controller';
import PostProductsService from './post.service';

const postProductsService = new PostProductsService();
const postProductsController = new PostProductsController(postProductsService);

export { postProductsService, postProductsController };
