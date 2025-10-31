// O=========================================================================================================O //

// Função genérica que entra em contato com a API:
import { api_request, default_res } from "../utils";
import {
    register_element_req,
    delete_element_req,
    list_lab_elements_res,
    get_session_elements_res,
    get_element_info_res,
    edit_element_info_req
} from "../interfaces/elements";

// O=========================================================================================================O //

// Função para  elemento:
export async function register_element(
    	element_name: string,
	element_image: string,
	element_molar_mass: number,
	element_quantity: number,
	element_cas_number: string,
	element_ec_number: string,
	element_admin_level: number,
	element_validity: string,
	element_physical_state: string,
	lab_id: number,
): Promise<default_res> {
    return api_request<default_res,register_element_req>({
        method: "POST",
        path: "elements/register",
        body: {
            element_name,
            element_image,
            element_molar_mass,
            element_quantity,
            element_cas_number,
            element_ec_number,
            element_admin_level,
            element_validity,
            element_physical_state,
            lab_id
        }
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function delete_element(
element_id:number
): Promise<default_res> {
    return api_request<default_res,delete_element_req>({
        method: "DELETE",
        path: "elements/delete",
        body: {element_id}
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function list_lab_elements(
labId:number
): Promise<list_lab_elements_res> {
    return api_request<list_lab_elements_res>({
        method: "GET",
        path: `elements/lab/${labId}`,
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function get_session_elements(
sessionId: number
): Promise<get_session_elements_res> {
    return api_request<get_session_elements_res>({
        method: "GET",
        path: `elements/session/${sessionId}`
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function get_element_info(
elementId: number
): Promise<get_element_info_res> {
    return api_request<get_element_info_res>({
        method: "GET",
        path: `elements/info/${elementId}`,
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_name(
    element_id: number,
    element_name: string
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/name",
        body: {element_id, element_name}
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_quantity(
    element_id: number,
    element_quantity: number
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/quantity",
        body: {element_id, element_quantity}
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_CAS(
    element_id: number,
    element_cas_number: string
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/cas",
        body: {element_id, element_cas_number}
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_EC(
    element_id: number,
    element_ec_number: string
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/ec",
        body: {element_id, element_ec_number}
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_physical_state(
    element_id: number,
    element_physical_state: "Sólido" | "Liquido" | "Gasoso"
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/state",
        body: {element_id, element_physical_state}
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_validity(
    element_id: number,
    element_validity: string
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/validity",
        body: {element_id, element_validity}
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_administration(
    element_id: number,
    element_admin_level: number
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/admin",
        body: {element_id, element_admin_level}
    })
}
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_molar_mass(
    element_id: number,
    element_molar_mass: type
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/molarmass",
        body: {element_id, element_molar_mass}
    })
}

// O=========================================================================================================O //

// Função para  elemento:
export async function edit_element_image(
    element_id: number,
    element_image: string
): Promise<default_res> {
    return api_request<default_res,edit_element_info_req>({
        method: "PUT",
        path: "elements/edit/image",
        body: {element_id, element_image}
    })
}

// O=========================================================================================================O //
