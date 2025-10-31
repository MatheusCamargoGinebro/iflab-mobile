// O=========================================================================================================O //

// Função genérica que entra em contato com a API:
import { api_request, default_res } from "../utils";
import {
	register_equipment_req,
	delete_equipment_req,
	list_lab_equipments_res,
	list_session_equipments_res,
	get_equipment_info_res,
	edit_equipment_info_req,
} from "../interfaces/equipments";
import { list_lab_elements_res } from "../interfaces";

// O=========================================================================================================O //

// Função para registrar equipamento:
export async function register_equipment(
	equipment_name: string,
	equipment_quantity: number,
	equipment_quality: number,
	equipment_admin_level: number,
	equipment_image: string,
	lab_id: number
): Promise<default_res> {
	return api_request<default_res, register_equipment_req>({
		method: "POST",
		path: "equipments/register",
		body: {
			equipment_name,
			equipment_quantity,
			equipment_quality,
			equipment_admin_level,
			equipment_image,
			lab_id,
		},
	});
}

// O=========================================================================================================O //

// Função para deletar equipamento:
export async function delete_equipment(
	equipment_id: number
): Promise<default_res> {
	return api_request<default_res, delete_equipment_req>({
		method: "DELETE",
		path: "equipments/delete",
		body: { equipment_id },
	});
}

// O=========================================================================================================O //

// Função para listar equipamentos de um laboratório:
export async function list_lab_equipments(
	labId: number
): Promise<list_lab_equipments_res> {
	return api_request<list_lab_elements_res>({
		method: "GET",
		path: `equipments/${labId}`,
	});
}

// O=========================================================================================================O //

// Função para listar equipamentos de uma sessão:
export async function list_session_equipments(
	sessionId: number
): Promise<list_session_equipments_res> {
	return api_request<list_session_equipments_res>({
		method: "GET",
		path: `equipments/${sessionId}`,
		body: { sessionId },
	});
}

// O=========================================================================================================O //

// Função para ver informações de um equipamento:
export async function get_equipment_info(
	equipmentId: number
): Promise<get_equipment_info_res> {
	return api_request<get_equipment_info_res>({
		method: "GET",
		path: `elements/info/${equipmentId}`,
	});
}

// O=========================================================================================================O //

// Função para editar nome do equipamento:
export async function edit_equipment_name(
	equipment_id: number,
	equipment_name: string
): Promise<default_res> {
	return api_request<default_res, edit_equipment_info_req>({
		method: "PUT",
		path: "elements/edit/name",
		body: { equipment_id, equipment_name },
	});
}

// O=========================================================================================================O //

// Função para editar quantidade do equipamento:
export async function edit_equipment_quantity(
	equipment_id: number,
	equipment_quantity: number
): Promise<default_res> {
	return api_request<default_res, edit_equipment_info_req>({
		method: "PUT",
		path: "elements/edit/quantity",
		body: { equipment_id, equipment_quantity },
	});
}

// O=========================================================================================================O //

// Função para editar qualidade do equipamento:
export async function edit_equipment_quality(
	equipment_id: number,
	equipment_quality: number
): Promise<default_res> {
	return api_request<default_res, edit_equipment_info_req>({
		method: "PUT",
		path: "elements/edit/quality",
		body: { equipment_id, equipment_quality },
	});
}

// O=========================================================================================================O //

// Função para editar descrição do equipamento:
export async function edit_equipment_description(
	equipment_id: number,
	equipment_description: string
): Promise<default_res> {
	return api_request<default_res, edit_equipment_info_req>({
		method: "PUT",
		path: "elements/edit/description",
		body: { equipment_id, equipment_description },
	});
}

// O=========================================================================================================O //

// Função para editar admin do equipamento:
export async function edit_equipment_administration(
	equipment_id: number,
	equipment_admin_level: number
): Promise<default_res> {
	return api_request<default_res, edit_equipment_info_req>({
		method: "PUT",
		path: "elements/edit/admin",
		body: { equipment_id, equipment_admin_level },
	});
}

// O=========================================================================================================O //

// Função para editar imagem do equipamento:
export async function edit_equipment_image(
	equipment_id: number,
	equipment_image: string
): Promise<default_res> {
	return api_request<default_res, edit_equipment_info_req>({
		method: "PUT",
		path: "elements/edit/image",
		body: { equipment_id, equipment_image },
	});
}

// O=========================================================================================================O //
