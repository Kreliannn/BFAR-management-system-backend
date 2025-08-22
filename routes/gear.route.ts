import { Router } from 'express';
import { GearController } from '../controller/gear.controller';

const router = Router();

router.post('/', GearController.create);
router.get('/', GearController.getAll);
router.get('/:id', GearController.getById);
router.put('/:id', GearController.update);
router.delete('/:id', GearController.delete);
router.put('/renew/:id', GearController.renewLicense);

export default router;
