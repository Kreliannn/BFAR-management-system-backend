import { Router } from 'express';
import { ActivityController } from '../controller/activity.controller';

const router = Router();

router.post('/', ActivityController.create);
router.get('/', ActivityController.getAll);
router.get('/:id', ActivityController.getById);
router.put('/:id', ActivityController.update);
router.delete('/:id', ActivityController.delete);
router.get('/fisherFolk/:id', ActivityController.getManyByUsetId);

export default router;
