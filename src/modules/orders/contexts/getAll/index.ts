import GetAllOrdersController from "./getall.controller";
import GetAllOrdersService from "./getall.service";

const getAllOrdersService = new GetAllOrdersService();
const getAllOrdersController = new GetAllOrdersController(getAllOrdersService);

export { getAllOrdersController, getAllOrdersService };
