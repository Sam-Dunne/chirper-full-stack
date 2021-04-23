export interface UsersTable {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    created_at?: Date;
}

export interface ChirpsTable {
    id?: number;
    userid?: number;
    content?: string;
    location?: string;
    created_at?: Date;
}

export interface MySQLResponse {
    affectedRows: number;
    insertId: number;
}