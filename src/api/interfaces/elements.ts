// O------------------------------------------------O //

// Entrada:
export interface register_element_req {
	element_name: string;
	element_image: string;
	element_molar_mass: number;
	element_quantity: number;
	element_cas_number: string;
	element_ec_number: string;
	element_admin_level: number;
	element_validity: string;
	element_physical_state: string;
	lab_id: number;
}

// O------------------------------------------------O //

export interface delete_element_req {
	element_id: number;
}

// O------------------------------------------------O //

// Saída:
export interface list_lab_elements_res {
	status: boolean;
	msg: string;
	elementsList?: {
		chemicalId: number;
		name: string;
		quantity: string;
		molarMass: string;
		casNumber: string;
		ecNumber: string;
		physicalState: string;
		accessLevel: string;
		expirationDate: string;
		image: string;
		labId: number;
	}[];
}

// O------------------------------------------------O //

// Saída:
export interface get_session_elements_res {
	status: boolean;
	msg: string;
	elementsList: {
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

// O------------------------------------------------O //

// Saída:
export interface get_element_info_res {
	status: boolean;
	msg: string;
	element: {
		element_id: number;
		element_name: string;
		element_image: string | null;
		element_molar_mass: string;
		element_quantity: string;
		element_cas_number: string;
		element_ec_number: string;
		element_admin_level: string;
		element_validity: string;
		element_physical_state: string;
		lab_id: number;
	};
}

// O------------------------------------------------O //

// Entrada:
export interface edit_element_info_req {
	element_id: number;
	element_name?: string;
	element_quantity?: number;
	element_cas_number?: string;
	element_ec_number?: string;
	element_physical_state?: "Sólido" | "Liquido" | "Gasoso";
	element_validity?: string;
	element_admin_level?: number;
	element_molar_mass?: number;
	element_image?: string;
}

// O------------------------------------------------O //
