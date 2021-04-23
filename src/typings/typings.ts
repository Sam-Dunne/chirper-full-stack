export interface IUsersTable {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    created_at?: Date;
}

export interface IChirp {
    id?: string;
    name?: string;
    email?: string;
    password?: string | number;
    _created?: string;
    userid?: string;
    content?: string;
    location?: string;
};

export interface MySQLResponse {
    affectedRows: number;
    insertId: number;
}

export interface MySQL_Err {
	code?: string;
	errno?: number;
	sqlMessage?: string;
	sqlState?: string;
	index?: number;
	sql?: string;
}

export interface MySQL_Success {
	fieldCount?: number;
	affectedRows?: number;
	insertId?: number;
	serverStatus?: number;
	warningCount?: number;
	message?: string;
	protocol41?: boolean;
	changedRows?: number;
}