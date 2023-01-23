import PostOrdersController from './post.controller';
import PostOrdersService from './post.service';

const postOrdersService = new PostOrdersService();
const postOrdersController = new PostOrdersController(postOrdersService);

export { postOrdersService, postOrdersController };
