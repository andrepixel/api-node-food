import PostCategoriesController from './post.controller';
import PostCategoriesService from './post.service';

const postCategoryService = new PostCategoriesService();
const postCategoryController = new PostCategoriesController(postCategoryService);

export { postCategoryService, postCategoryController };
