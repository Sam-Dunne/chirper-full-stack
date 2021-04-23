import { Query } from '../config';
import type { ChirpsTable, UsersTable } from '../models';
import type { MySQL_Err, MySQL_Success} from '../../../typings/typings'

const all = () => Query<(ChirpsTable & UsersTable)[]>('SELECT * FROM users JOIN chirps ON users.id = chirps.userid ORDER BY chirps.id DESC');

const one = (id: number) => Query<(ChirpsTable & UsersTable)[]>
	('SELECT * FROM users JOIN chirps ON users.id = chirps.userid WHERE chirps.id = ?', [id]);

const destroy = (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);

const post = (userid: number, content: string, location: string) =>
	Query('INSERT INTO chirps (userid, content, location) VALUE (?,?,?)', [
		userid,
		content,
		location]);

const update = (content: string, id: number) =>
	Query('UPDATE chirps SET content = ? WHERE id = ?', [content, id]);

export type MySQL_Res = MySQL_Success & MySQL_Err;

export default {
	all,
	one,
	destroy,
	post,
	update
};
