// O=========================================================================================================O //

// Função genérica que entra em contato com a API:
import { api_request, default_res } from "../utils";
import {
	create_new_session_req,
	session_action,
	list_user_sessions_res,
	get_utilization_form_res,
	save_utilization_form_req,
} from "../interfaces";

// O=========================================================================================================O //

// Função para  sessão:
export async function create_new_session(
	lab_id: number,
	session_date: string,
	session_starts_at: string,
	session_ends_at: string,
	elements_list: { element_id: number }[],
	equipments_list: { equipment_id: number }[]
): Promise<default_res> {
	return api_request<default_res, create_new_session_req>({
		method: "POST",
		path: "sessions/create",
		body: {
			lab_id,
			session_date,
			session_starts_at,
			session_ends_at,
			elements_list,
			equipments_list,
		},
	});
}

// O=========================================================================================================O //

// Função para  sessão:
export async function delete_session(session_id: number): Promise<default_res> {
	return api_request<default_res>({
		method: "DELETE",
		path: "sessions/delete",
		body: { session_id },
	});
}

// O=========================================================================================================O //

// Função para  sessão:
export async function start_session(session_id: number): Promise<default_res> {
	return api_request<default_res>({
		method: "PUT",
		path: "sessions/start",
		body: { session_id },
	});
}

// O=========================================================================================================O //

// Função para  sessão:
export async function finish_session(session_id: number): Promise<default_res> {
	return api_request<default_res>({
		method: "PUT",
		path: "sessions/finish",
		body: { session_id },
	});
}

// O=========================================================================================================O //

// Função para  sessão:
export async function list_user_sessions(): Promise<list_user_sessions_res> {
	return api_request<list_user_sessions_res>({
		method: "GET",
		path: "sessions/mysessions",
	});
}

// O=========================================================================================================O //

// Função para  sessão:
export async function get_utilization_form(
	session_id: number
): Promise<get_utilization_form_res> {
	return api_request<get_utilization_form_res>({
		method: "GET",
		path: `sessions/form/${session_id}`,
	});
}

// O=========================================================================================================O //

// Função para  sessão:
export async function save_utilization_form(
	session_id: number,
	elements_list: {
		element_id: number;
		element_quantity: number;
	}[]
): Promise<default_res> {
	return api_request<default_res, save_utilization_form_req>({
		method: "PUT",
		path: "sessions/form/set",
		body: {
			session_id,
			elements_list,
		},
	});
}

// O=========================================================================================================O //
