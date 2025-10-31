// O------------------------------------------------O //

// Entrada:
export interface register_new_campus_req {
	campus_name: string;
	campus_uf: string;
}

// Saída:
export interface register_new_campus_res {
	status: boolean;
	msg: string;
}

// O------------------------------------------------O //

// Saída:
export interface get_campus_res {
	status: boolean;
	msg: string;
	campusList?: {
		campusId: number;
		campusName: string;
	}[];
}

// O------------------------------------------------O //
