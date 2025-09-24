import { Router } from 'express';
import { FisherFolkController } from '../controller/fisherFolk.controller';
import { upload } from '../utils/multer';

const router = Router();

router.post('/', FisherFolkController.create);
router.get('/', FisherFolkController.getAll);
router.get('/:id', FisherFolkController.getById);
router.put('/:id', FisherFolkController.update);
router.delete('/:id', FisherFolkController.delete);
router.post('/login', FisherFolkController.auth);
router.post('/uploadProfile', upload.single('profile') ,FisherFolkController.uploadProfile);

export default router;
