import DeleteProductsService from './delete.service';
import DeleteProductsController from './delete.controller';

const deleteProductsService = new DeleteProductsService();
const deleteProductsController = new DeleteProductsController(deleteProductsService);

export { deleteProductsService, deleteProductsController };
