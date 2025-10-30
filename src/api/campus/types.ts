export interface register_new_campus_req {
	campus_name: string;
	campus_uf: string;
}

export interface register_new_campus_res {
	status: boolean;
	msg: string;
}

export interface get_campus_res {
	status: boolean;
	msg: string;
	campusList?: {
		campusId: number;
		campusName: string;
	}[];
}
