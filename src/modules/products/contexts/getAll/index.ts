import GetAllProductsController from "./getall.controller";
import GetAllProductsService from "./getall.service";

const getAllProductsService = new GetAllProductsService();
const getAllProductsController = new GetAllProductsController(getAllProductsService);

export { getAllProductsController, getAllProductsService };
