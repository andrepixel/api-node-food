import PatchCategoriesService from './patch.service';
import PatchCategoriesController from './patch.controller';

const patchCategoryService = new PatchCategoriesService();
const patchCategoryController = new PatchCategoriesController(patchCategoryService);

export { patchCategoryService, patchCategoryController };
