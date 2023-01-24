import PatchOrdersService from './patch.service';
import PatchOrdersController from './patch.controller';

const patchOrdersService = new PatchOrdersService();
const patchOrdersController = new PatchOrdersController(patchOrdersService);

export { patchOrdersService, patchOrdersController };
