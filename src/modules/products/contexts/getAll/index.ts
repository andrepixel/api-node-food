import GetAllController from "./getall.controller";
import GetAllService from "./getall.service";

const getAllService = new GetAllService();
const getAllController = new GetAllController(getAllService);

export { getAllController, getAllService };
