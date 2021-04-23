import { Router } from 'express';
import chirpRouter from './chirps';
import usersRouter from './users';

const router = Router();

router.use('/chirper', chirpRouter);
router.use('/users', usersRouter);

export default router;