// O=========================================================================================================O //

// Função genérica que entra em contato com a API:
import { api_request } from "../utils";
import {
	register_new_campus_req,
	register_new_campus_res,
	get_campus_res,
} from "./types";

// O=========================================================================================================O //

// Função para registrar campus:
async function register_new_campus(
	campus_name: string,
	campus_uf: string
): Promise<register_new_campus_res> {
	return api_request<register_new_campus_res, register_new_campus_req>({
		method: "POST",
		path: "campus/register",
		body: { campus_name, campus_uf },
	});
}

// O=========================================================================================================O //

// Função para ler os campus do bd:
async function get_campus(): Promise<get_campus_res> {
	return api_request<get_campus_res>({
		method: "GET",
		path: "campus/get",
	});
}

// Exportando funções:
export { register_new_campus, get_campus };

// O=========================================================================================================O //
