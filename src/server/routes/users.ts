import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', async (req, res, next) => {
	try {
		const users = await db.users.all();
		res.json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const id = Number(req.params.id);
		const [user] = await db.users.one(id);
		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
	}
});

// router.delete('/:id', async (req, res, next) => {
// 	try {
// 		const id = Number(req.params.id);
// 		const trump = await db.chirp_crud.destroy(id);
// 		res.json(trump);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
// 	}
// });

// router.post('/', async (req, res, next) => {
// 	try {
// 		const newChirp: any = req.body;
// 		const result = await db.chirp_crud.post(newChirp.userid, newChirp.content, newChirp.location);
// 		res.json(result);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
// 	}
// });

// router.put('/:id', async (req, res, next) => {
// 	try {
// 		const id = Number(req.params.id);
// 		const editedChirp = req.body;
// 		const result = await db.chirp_crud.update(editedChirp.content, id);
// 		res.json(result);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({ message: 'lukes code fucking sucks lol', error: error.message });
// 	}
// });

export default router;
