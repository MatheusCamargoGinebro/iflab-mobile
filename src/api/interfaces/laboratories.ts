// O------------------------------------------------O //

// Entrada:
export interface register_new_laboratory_req {
	lab_name: string;
}

// O------------------------------------------------O //

// Saída:
export interface list_user_laboratories_res {
	status: boolean;
	msg: string;
	labsList?: {
		labId: number;
		labName: string;
		userLevel: string;
		status: number;
		startsAt: string;
		endsAt: string;
		userName: string;
	}[];
}

// O------------------------------------------------O //

// Saída:
export interface list_laboratory_schedule_res {
	status: boolean;
	msg: string;
	scheduleList?: {
		startsAt: string;
		endsAt: string;
		date: string;
		responsable: string;
		elementsQtd: number;
		equipmentsQtd: string;
	}[];
}

// O------------------------------------------------O //

// Saída:
export interface get_lab_users_res {
	status: string;
	msg: string;
	usersList: [
		{
			userName: string;
			userType: string;
			profilePic?: string;
			adminLevel: string;
		},
	];
}

// O------------------------------------------------O //

// Entrada:
export interface change_user_admin_level_req {
	lab_id: number;
	user_id: number;
	user_admin_level: number;
}

// O------------------------------------------------O //

// Entrada:
export interface add_user_to_lab_req {
	lab_id: number;
	user_id: number;
	user_admin_level: number;
}

// O------------------------------------------------O //

// Entrada:
export interface remove_user_from_lab_req {
	lab_id: number;
	user_id: number;
}

// O------------------------------------------------O //
