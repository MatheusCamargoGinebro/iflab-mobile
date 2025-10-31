// O=========================================================================================================O //

// Função genérica que entra em contato com a API:
import { api_request, default_res } from "../utils";
import {
	login_user_req,
	login_user_res,
	email_validation_code_req,
	email_code_validation_req,
	email_code_validation_res,
	password_recovery_req,
	register_user_req,
	edit_user_info_req,
	get_user_info_res,
} from "../interfaces";

// O=========================================================================================================O //

// Função para logar usuário:
export async function login_user(
	user_email: string,
	user_password: string
): Promise<login_user_res> {
	return api_request<login_user_res, login_user_req>({
		method: "POST",
		path: "users/login",
		body: { user_email, user_password },
	});
}

// O=========================================================================================================O //

// Função para deslogar usuário:
export async function logout_user(): Promise<default_res> {
	return api_request<default_res>({
		method: "POST",
		path: "user/logout",
	});
}

// O=========================================================================================================O //

// Função para solicitar código de veriricação:
export async function email_validation(
	user_email: string,
	reason_for_code: number
): Promise<default_res> {
	return api_request<default_res, email_validation_code_req>({
		method: "POST",
		path: "users/email/getcode",
		body: { user_email, reason_for_code },
	});
}

// O=========================================================================================================O //

// Função para testar código de verificação:
export async function email_code_validation(
	user_email: string,
	user_validation_code: string
): Promise<email_code_validation_res> {
	return api_request<email_code_validation_res, email_code_validation_req>({
		method: "POST",
		path: "users/email/validate",
		body: { user_email, user_validation_code },
	});
}

// O=========================================================================================================O //

// Função para recuperar a senha:
export async function password_recovery(
	user_email: string,
	user_validation_code: string,
	user_password: string
): Promise<default_res> {
	return api_request<default_res, password_recovery_req>({
		method: "POST",
		path: "users/password/recovery",
		body: { user_email, user_validation_code, user_password },
	});
}

// O=========================================================================================================O //

// Função para registrar usuário:
export async function register_user(
	user_email: string,
	user_password: string,
	user_name: string,
	user_creation_token: string,
	campus_id: number
): Promise<default_res> {
	return api_request<default_res, register_user_req>({
		method: "POST",
		path: "users/register",
		body: {
			user_email,
			user_password,
			user_name,
			user_creation_token,
			campus_id,
		},
	});
}

// O=========================================================================================================O //

// Função para editar nome de usuário:
export async function edit_user_name(user_name: string): Promise<default_res> {
	return api_request<default_res, edit_user_info_req>({
		method: "PUT",
		path: "/users/edit/name",
		body: {
			user_name,
		},
	});
}

// O=========================================================================================================O //

// Função para editar email de usuário:
export async function edit_user_email(
	user_email: string,
	user_validation_code: string
): Promise<default_res> {
	return api_request<default_res, edit_user_info_req>({
		method: "PUT",
		path: "/users/edit/email",
		body: {
			user_email,
			user_validation_code,
		},
	});
}

// O=========================================================================================================O //

// Função para editar senha de usuário:
export async function edit_user_password(
	user_password: string
): Promise<default_res> {
	return api_request<default_res, edit_user_info_req>({
		method: "PUT",
		path: "/users/edit/password",
		body: {
			user_password,
		},
	});
}

// O=========================================================================================================O //

// Função para editar imagem de usuário:
export async function edit_user_image(
	user_image: string
): Promise<default_res> {
	return api_request<default_res, edit_user_info_req>({
		method: "PUT",
		path: "/users/edit/image",
		body: {
			user_image,
		},
	});
}

// O=========================================================================================================O //

// Função para ler informações de usuário:
export async function get_user_info(): Promise<get_user_info_res> {
	return api_request<get_user_info_res>({
		method: "GET",
		path: "users/info",
	});
}

// O=========================================================================================================O //
