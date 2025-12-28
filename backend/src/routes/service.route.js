import express from 'express';
import ServiceController from '../controllers/service.controller.js';

const router = express.Router();

router.post('/services', ServiceController.addService);
router.get('/services', ServiceController.showAllServices);
router.put('/services/:id', ServiceController.updateService);
router.delete('/services/:id', ServiceController.deleteService);

export default router;
