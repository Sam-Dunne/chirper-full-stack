import { Query } from '../config';
// import { Query } from '../config';  // does this need to be here...threw errors
import type { IUsersTable, MySQL_Err, MySQL_Success} from '../../../typings/typings';

const all = () => Query<(IUsersTable)[]>('SELECT * FROM users');

const one = (id: number) => Query<(IUsersTable)[]>
	('SELECT * FROM users WHERE users.id = ?', [id]);



export type MySQL_Res = MySQL_Success & MySQL_Err;

export default {
	all,
	one	
};