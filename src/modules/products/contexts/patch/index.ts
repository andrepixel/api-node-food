import PatchProductsService from './patch.service';
import PatchProductsController from './patch.controller';

const patchProductsService = new PatchProductsService();
const patchProductsController = new PatchProductsController(patchProductsService);

export { patchProductsService, patchProductsController };
