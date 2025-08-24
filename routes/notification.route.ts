import { Router } from 'express';
import { NotificationController } from '../controller/notification.controller';

const router = Router();


router.get('/:id', NotificationController.getNotification);

export default router;
