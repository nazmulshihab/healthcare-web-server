import { Router } from 'express';
import patientRoutes from './patientRoutes.js';
import doctorRoutes from './doctorRoutes.js';

const router = Router();

router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);

export default router;

