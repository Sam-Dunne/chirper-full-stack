import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res, next) => {
	try {
		const chirps = await db.chirp_crud.all();
		res.json(chirps);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const [student] = await db.chirp_crud.one(id);
		res.json(student);
	} catch (error) {
		next(error);
}});

router.delete('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const trump = await db.chirp_crud.destroy(id);
		res.json(trump);
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newChirp: any = req.body;
		const result = await db.chirp_crud.post(newChirp.userid, newChirp.content, newChirp.location);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const editedChirp = req.body;
		const result = await db.chirp_crud.update(editedChirp.content, id);
		res.json(result);
	} catch (error) {
		next(error);
	}
});

export default router;
