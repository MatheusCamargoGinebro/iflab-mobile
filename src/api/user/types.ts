/* export interface register_new_campus_req {
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
 */

// O------------------------------------------------O //

// Entrada:
export interface login_user_req {
	user_email: string;
	user_password: string;
}

// Saída:
export interface login_user_res {
	status: boolean;
	msg: string;
	token?: string;
}

// O------------------------------------------------O //

export interface default_action_result {
	status: boolean;
	msg: string;
}

// O------------------------------------------------O //
