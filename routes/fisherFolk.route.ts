import { Router } from 'express';
import { FisherFolkController } from '../controller/fisherFolk.controller';

const router = Router();

router.post('/', FisherFolkController.create);
router.get('/', FisherFolkController.getAll);
router.get('/:id', FisherFolkController.getById);
router.put('/:id', FisherFolkController.update);
router.delete('/:id', FisherFolkController.delete);

export default router;
