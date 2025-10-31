// O=========================================================================================================O //

// Função genérica que entra em contato com a API:
import { api_request, default_res } from "../utils";
import {
	register_new_laboratory_req,
	list_user_laboratories_res,
	list_laboratory_schedule_res,
	get_lab_users_res,
	change_user_admin_level_req,
	add_user_to_lab_req,
	remove_user_from_lab_req,
} from "../interfaces/";

// O=========================================================================================================O //

// Função para registrar laboratório:
export async function register_new_laboratory(
	lab_name: string
): Promise<default_res> {
	return api_request<default_res, register_new_laboratory_req>({
		method: "POST",
		path: "labs/register",
		body: { lab_name },
	});
}

// O=========================================================================================================O //

// Função para deletar laboratório:
export async function delete_laboratory(labId: number) {
	return api_request<default_res>({
		method: "DELETE",
		path: `labs/delete/${labId}`,
	});
}

// O=========================================================================================================O //

// Função para listar laboratório de um usuário:
export async function list_user_laboratories(): Promise<list_user_laboratories_res> {
	return api_request<list_user_laboratories_res>({
		method: "GET",
		path: "labs/my",
	});
}

// O=========================================================================================================O //

// Função para listar agenda de um laboratório:
export async function list_laboratory_schedule(
	labId: number,
	date: string
): Promise<list_laboratory_schedule_res> {
	return api_request<list_user_laboratories_res>({
		method: "GET",
		path: `labs/schedule/${labId}/${date}`,
	});
}

// O=========================================================================================================O //

// Função para ler usuários de um laboratório:
export async function get_lab_users(labId: number): Promise<get_lab_users_res> {
	return api_request<get_lab_users_res>({
		method: "GET",
		path: `labs/users/${labId}`,
	});
}

// O=========================================================================================================O //

// Função para mudar nível de administração de um usuário de um laboratório:
export async function change_user_admin_level(
	lab_id: number,
	user_id: number,
	user_admin_level: number
): Promise<default_res> {
	return api_request<default_res, change_user_admin_level_req>({
		method: "PUT",
		path: "labs/admin",
		body: { lab_id, user_id, user_admin_level },
	});
}

// O=========================================================================================================O //

// Função para adicionar usuário a um laboratório:
export async function add_user_to_lab(
	lab_id: number,
	user_id: number,
	user_admin_level: number
): Promise<default_res> {
	return api_request<default_res, add_user_to_lab_req>({
		method: "POST",
		path: "labs/admin",
		body: { lab_id, user_id, user_admin_level },
	});
}

// O=========================================================================================================O //

// Função para remover usuário de um laboratório:
export async function remove_user_from_lab(
	lab_id: number,
	user_id: number
): Promise<default_res> {
	return api_request<default_res, remove_user_from_lab_req>({
		method: "DELETE",
		path: "labs/admin",
		body: { lab_id, user_id },
	});
}

// O=========================================================================================================O //
