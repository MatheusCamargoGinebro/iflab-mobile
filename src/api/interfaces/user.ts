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

// Entrada:
export interface email_validation_code_req {
	user_email: string;
	reason_for_code: number;
}

// O------------------------------------------------O //

// Entrada:
export interface email_code_validation_req {
	user_email: string;
	user_validation_code: string;
}

// Saída:
export interface email_code_validation_res {
	status: boolean;
	msg: string;
	authToken: string;
}

// O------------------------------------------------O //

// Entrada:
export interface password_recovery_req {
	user_email: string;
	user_validation_code: string;
	user_password: string;
}

// O------------------------------------------------O //

// Entrada:
export interface register_user_req {
	user_email: string;
	user_password: string;
	user_name: string;
	user_creation_token: string;
	campus_id: number;
}

// O------------------------------------------------O //

// Saída:
export interface edit_user_info_req {
	user_name?: string;
	user_email?: string;
	user_validation_code?: string;
	user_password?: string;
	user_image?: string;
}

// O------------------------------------------------O //

// Saída:
export interface get_user_info_res {
	status: boolean;
	data?: {
		user_id: number;
		user_name: string;
		user_email: string;
		user_type: string;
		user_access_level: number;
		user_image: string;
		campus_id: number;
	};
	msg: string;
}

// O------------------------------------------------O //
