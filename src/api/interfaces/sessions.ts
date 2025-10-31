export interface create_new_session_req {
	lab_id: number;
	session_date: string;
	session_starts_at: string;
	session_ends_at: string;
	elements_list?: {
		element_id: number;
	}[];
	equipments_list?: {
		equipment_id: number;
	}[];
}

export interface session_action {
	session_id: number;
}

export interface list_user_sessions_res {
	status: boolean;
	msg: string;
	sessionsList: {
		sessionId: number;
		labName: string;
		date: string;
		startsAt: string;
		endsAt: string;
		sessionStatus: string;
		elementsQtd: string;
		equipmentsQtd: string;
		formDone: number;
	}[];
}

export interface get_utilization_form_res {
	status: boolean;
	msg: string;
	elements: {
		element_id: number;
		element_name: string;
		element_image: string | null;
		element_molar_mass: string;
		reserved_quantity: string;
		element_cas_number: string;
		element_ec_number: string;
		element_admin_level: string;
		element_validity: string;
		element_physical_state: string;
		lab_id: number;
	}[];
}

export interface save_utilization_form_req {
	session_id: number;
	elements_list: {
		element_id: number;
		element_quantity: number;
	}[];
}
