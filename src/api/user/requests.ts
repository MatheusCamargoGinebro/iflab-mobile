// O=========================================================================================================O //

// Função genérica que entra em contato com a API:
import { api_request } from "../utils";
import {} from "./types";

// O=========================================================================================================O //

// Função para logar usuário:
async function login_user() {}

// Função para deslogar usuário:
async function logout_user() {}

// Função para solicitar código de veriricação:
async function email_validation() {}

// Função para testar código de verificação
async function email_code_validation() {}

// Função para recuperar a senha:
async function password_recovery() {}

// Função para registrar usuário:
async function register_user() {}

// Função para editar nome de usuário:
async function edit_user_name() {}

// Função para editar email de usuário:
async function edit_user_email() {}

// Função para editar senha de usuário:
async function edit_user_password() {}

// Função para editar imagem de usuário:
async function edit_user_image() {}

// Função para ler informações de usuário:
async function get_user_info() {}

// O=========================================================================================================O //

// Exportando funções:
export {
	login_user,
	logout_user,
	email_validation,
	email_code_validation,
	password_recovery,
	register_user,
	edit_user_name,
	edit_user_email,
	edit_user_password,
	edit_user_image,
	get_user_info,
};

// O=========================================================================================================O //
