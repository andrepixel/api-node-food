import DeleteService from './delete.service';
import DeleteController from './delete.controller';

const deleteService = new DeleteService();
const deleteController = new DeleteController(deleteService);

export { deleteService, deleteController };
