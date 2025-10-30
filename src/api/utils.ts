// O====================================================================O \\
/*
    Arquivo de parâmetros auxiliares para o funcionamento do aplicativo
*/
// O====================================================================O \\

const BASE_URL = "https://api-flab-v2-0.vercel.app/";

// Interface genérica para o corpo e retorno
export interface Params<TBody = undefined> {
	method: "GET" | "POST" | "PUT" | "DELETE";
	path: string;
	body?: TBody;
	token?: string;
}

export async function api_request<TResponse = any, TBody = any>({
	method,
	path,
	body,
	token,
}: Params<TBody>): Promise<TResponse> {
	try {
		const response = await fetch(`${BASE_URL}${path}`, {
			method,
			headers: {
				"Content-Type": "application/json",
				"x-access-token": token ? token : "",
			},
			body:
				method === "GET" || method === "DELETE"
					? undefined
					: JSON.stringify(body),
		});

		// Verificar dps, pq pode dar erro
		/* if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Erro na requisição: ${response.status} - ${errorText}`);
		} */

		return response.json();
	} catch (err) {
		const message = err instanceof Error ? err.message : JSON.stringify(err);
		throw new Error(`Erro de rede: ${message}`);
	}
}
