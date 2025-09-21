import { Router } from 'express';
import { AccountController } from '../controller/account.controller';

const router = Router();


router.get('/', AccountController.getAccounts);
router.post('/', AccountController.insertAccount);
router.delete('/:id', AccountController.deleteAccount);

export default router;
