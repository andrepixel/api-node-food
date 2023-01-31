import DeleteCategoriesService from './delete.service';
import DeleteCategoriesController from './delete.controller';

const deleteCategoryService = new DeleteCategoriesService();
const deleteCategoryController = new DeleteCategoriesController(
	deleteCategoryService,
);

export { deleteCategoryService, deleteCategoryController };
