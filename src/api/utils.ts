// O====================================================================O \\
/*
    Arquivo de parâmetros auxiliares para o funcionamento do aplicativo
*/
// O====================================================================O \\

const BASE_URL = "https://api-flab-v2-0.vercel.app/";

const AsyncStorage =
	require("@react-native-async-storage/async-storage").default;

// O====================================================================O \\

// O------------------------------------------------O //

// Interface genérica para o corpo e retorno
export interface Params<TBody = undefined> {
	method: "GET" | "POST" | "PUT" | "DELETE";
	path: string;
	body?: TBody;
}

// O------------------------------------------------O //

// Saída padrão para funções relacionadas a ações:
export interface default_res {
	status: boolean;
	msg: string;
}

// O------------------------------------------------O //

// O====================================================================O \\

export async function api_request<TResponse = any, TBody = any>({
	method,
	path,
	body,
}: Params<TBody>): Promise<TResponse> {
	const token = await AsyncStorage.getItem("token");

	try {
		const response = await fetch(`${BASE_URL}${path}`, {
			method,
			headers: {
				"Content-Type": "application/json",
				"x-access-token": token || "",
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

		const data = await response.json();

		if (data.status && path === "users/login") {
			await AsyncStorage.setItem("token", data.token);
		}

		return data;
	} catch (err) {
		const message = err instanceof Error ? err.message : JSON.stringify(err);
		throw new Error(`Erro de rede: ${message}`);
	}
}

// O====================================================================O \\
