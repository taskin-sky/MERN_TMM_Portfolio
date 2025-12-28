import express from 'express';
import EducationController from '../controllers/education.controller.js';

const router = express.Router();

router.post('/education', EducationController.addEducation);
router.get('/education', EducationController.showAllEducation);
router.put('/education/:id', EducationController.updateEducation);
router.delete('/education/:id', EducationController.deleteEducation);

export default router;
