import { Router } from 'express';
import { SystemController } from '../controller/system.controller';

const router = Router();

router.get("/dashboard", SystemController.getDashboardData)


export default router;