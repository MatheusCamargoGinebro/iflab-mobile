// O------------------------------------------------O //

// Entrada:
export interface register_equipment_req {
	equipment_name: string;
	equipment_quantity: number;
	equipment_quality: number;
	equipment_admin_level: number;
	equipment_image: string;
	lab_id: number;
}

// O------------------------------------------------O //

export interface delete_equipment_req {
	equipment_id: number;
}

// O------------------------------------------------O //

export interface list_lab_equipments_res {
	status: boolean;
	msg: string;
	equipmentsList?: {
		equipmentId: number;
		name: string;
		description: string;
		quantity: number;
		quality: string;
		accessLevel: string;
		image: string | null;
		labId: number;
	}[];
}

// O------------------------------------------------O //

export interface list_session_equipments_res {
	status: boolean;
	msg: string;
	equipmentsList: {
		equipment_id: number;
		equipment_name: string;
		equipment_description: string;
		equipment_image: string | null;
		total_quantity: number;
		reserved_quantity: number;
		equipment_quality: string;
		equipment_admin_level: string;
		lab_id: number;
	}[];
}

// O------------------------------------------------O //

export interface get_equipment_info_res {
	status: boolean;
	msg: string;
	equipment: {
		equipment_id: number;
		equipment_name: string;
		equipment_description: string;
		equipment_quantity: number;
		equipment_quality: string;
		equipment_admin_level: string;
		equipment_image: string | null;
		lab_id: number;
	};
}

// O------------------------------------------------O //

export interface edit_equipment_info_req {
	equipment_id: number;
	equipment_name?: string;
	equipment_quantity?: number;
	equipment_quality?: number;
	equipment_description?: string;
	equipment_admin_level?: number;
	equipment_image?: string;
}

// O------------------------------------------------O //
