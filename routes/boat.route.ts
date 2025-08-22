import { Router } from 'express';
import { BoatController } from '../controller/boats.controller';

const router = Router();

router.post('/', BoatController.create);
router.get('/', BoatController.getAll);
router.get('/:id', BoatController.getById);
router.put('/:id', BoatController.update);
router.delete('/:id', BoatController.delete);
router.put('/renew/:id', BoatController.renewLicense);

export default router;
