import DeleteOrdersService from './delete.service';
import DeleteOrdersController from './delete.controller';

const deleteOrdersService = new DeleteOrdersService();
const deleteOrdersController = new DeleteOrdersController(deleteOrdersService);

export { deleteOrdersService, deleteOrdersController };
