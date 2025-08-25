import { Router } from 'express';
import { ReportController } from '../controller/report.controller';

const router = Router();


router.post('/', ReportController.create);
router.get('/', ReportController.get);

export default router;
