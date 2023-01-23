import GetAllCategoriesController from "./getall.controller";
import GetAllCategoriesService from "./getall.service";

const getAllCategoryService = new GetAllCategoriesService();
const getAllCategoryController = new GetAllCategoriesController(getAllCategoryService);

export { getAllCategoryController, getAllCategoryService };
